import { LoaderFunctionArgs, redirect } from '@remix-run/cloudflare'
import { createSupabaseClient } from '~/lib/supabase.server'

export async function loader({ request, context }: LoaderFunctionArgs) {
  const { supabase, headers } = createSupabaseClient(request, context)
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      return redirect('/dashboard', { headers })
    }
    console.error('Error exchanging code for session:', error)
  }

  return new Response(null, { status: 400, headers })
}
