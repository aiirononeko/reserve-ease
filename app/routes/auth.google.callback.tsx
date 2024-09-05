import { LoaderFunctionArgs, redirect } from '@remix-run/cloudflare'
import { createSupabaseClient } from '~/lib/supabase.server'
import { notification } from '~/utils/notification.server'

export async function loader({ request, context }: LoaderFunctionArgs) {
  const { supabase, headers } = createSupabaseClient(request, context)
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)
    if (data && !error) {
      const notificationMessage = `${data.user.user_metadata.name}さんがユーザー登録しました🎉`
      const response = await notification(
        context.cloudflare.env.DISCORD_SIGN_UP_WEBHOOK_URL,
        notificationMessage,
      )

      if (!response.ok) {
        console.error('Error executing notification webhook: ', response.body)
        return new Response(null, { status: 500, headers })
      }

      return redirect('/dashboard', { headers })
    }
    console.error('Error exchanging code for session:', error)
  }

  return new Response(null, { status: 400, headers })
}
