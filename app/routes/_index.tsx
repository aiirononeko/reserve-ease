import type { MetaFunction } from '@remix-run/cloudflare'
import { Button } from '~/components/ui/button'

export const meta: MetaFunction = () => {
  return [
    { title: 'トップページ | ReserveEase' },
    {
      name: 'description',
      content: '',
    },
  ]
}

export default function Index() {
  return (
    <div className='font-sans p-4'>
      <h1 className='text-3xl'>Welcome to Remix on Hono on Cloudflare!!!</h1>
      <Button>button</Button>
      <ul className='list-disc mt-4 pl-6 space-y-2'>
        <li>
          <a
            className='text-blue-700 underline visited:text-purple-900'
            target='_blank'
            href='https://remix.run/docs'
            rel='noreferrer'
          >
            Remix Docs
          </a>
        </li>
        <li>
          <a
            className='text-blue-700 underline visited:text-purple-900'
            target='_blank'
            href='https://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/'
            rel='noreferrer'
          >
            Cloudflare Pages Docs - Remix guide
          </a>
        </li>
      </ul>
    </div>
  )
}
