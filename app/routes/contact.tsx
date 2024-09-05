import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from '@remix-run/cloudflare'
import { Form, useLoaderData } from '@remix-run/react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'
import { createSupabaseClient } from '~/lib/supabase.server'

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  const { supabase } = createSupabaseClient(request, context)
  const { data } = await supabase.auth.getUser()

  return { user: data }
}

export const action = async ({ request, context }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  const notificationMessage = `${name}さんからお問い合わせがありました。\n${message}`
  const requestBody = `{\"content\":\"${notificationMessage}\"}`
  const response = await fetch(
    context.cloudflare.env.DISCORD_CONTACT_WEBHOOK_URL,
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    },
  )

  if (!response.ok) {
    console.error(response.body)
    return new Response(null, { status: 500 })
  }

  return redirect('/dashboard')
}

export default function Contact() {
  const { user } = useLoaderData<typeof loader>()

  return (
    <div className='container mx-auto max-w-[620px] space-y-10 md:space-y-16 pt-24 pb-16'>
      <h2 className='text-center text-xl font-medium'>お問い合わせ</h2>
      <Form method='post' className='space-y-10'>
        <div className='space-y-2'>
          <Label>お名前</Label>
          <Input
            type='text'
            name='name'
            defaultValue={user ? user.user?.user_metadata.name : ''}
          />
        </div>
        <div className='space-y-2'>
          <Label>返信先メールアドレス</Label>
          <Input
            type='email'
            name='email'
            defaultValue={user ? user.user?.email : ''}
          />
        </div>
        <div className='space-y-2'>
          <Label>お問い合わせの内容</Label>
          <Textarea name='message' className='h-60' />
        </div>
        <div className='flex justify-center'>
          <Button type='submit' className='w-2/3 max-w-80'>
            送信
          </Button>
        </div>
      </Form>
    </div>
  )
}
