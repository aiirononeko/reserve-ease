import { format } from '@formkit/tempo'
import { MetaFunction, json } from '@remix-run/cloudflare'
import { Link, useLoaderData } from '@remix-run/react'
import { RefreshCcw } from 'lucide-react'
import { createClient } from 'microcms-js-sdk'
import { LoaderFunctionArgs } from 'react-router'
import invariant from 'tiny-invariant'
import { ContentDetail } from '~/components/articles/content-detail'
import { Button } from '~/components/ui/button'

export const loader = async ({
  request,
  params,
  context,
}: LoaderFunctionArgs) => {
  invariant(params.id, 'コンテンツIDが指定されていません')

  const { origin } = new URL(request.url)

  const client = createClient({
    serviceDomain: context.cloudflare.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: context.cloudflare.env.MICROCMS_API_KEY,
  })

  const content = await client.get<Blog>({
    endpoint: 'articles',
    contentId: params.id,
  })

  return json({ content, origin })
}

export default function Content() {
  const { content } = useLoaderData<typeof loader>()

  const createdAt = format({
    date: content.createdAt,
    format: 'YYYY/MM/DD',
    locale: 'ja',
    tz: 'Asia/Tokyo',
  })

  const updatedAt = format({
    date: content.createdAt,
    format: 'YYYY/MM/DD',
    locale: 'ja',
    tz: 'Asia/Tokyo',
  })

  return (
    <article className='pt-20 pb-16'>
      <header className='pt-4 pb-8'>
        <div className='space-y-5 container mx-auto md:space-y-6'>
          <p className='text-center'>ReserveEase コラム</p>
          <h1 className='text-center text-2xl font-medium leading-9'>
            {content.title}
          </h1>
          <div className='flex justify-center gap-3 text-muted-foreground text-sm'>
            <div>{createdAt}に公開</div>
            {content.updatedAt && (
              <div className='flex items-center gap-1'>
                <RefreshCcw className='size-4' />
                {updatedAt}
              </div>
            )}
          </div>
        </div>
      </header>
      <ContentDetail content={content} />
    </article>
  )
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return []
  const { content, origin } = data

  return [
    {
      title: `${content.metaTitle} | ReserveEase`,
    },
    {
      name: 'description',
      content: content.metaDescription,
    },
    {
      property: 'og:url',
      content: `https\://www.reserve-ease.com/articles/${content.id}`,
    },
    {
      property: 'og:image',
      content: `${origin}/resource/og?id=${content.id}`,
    },
    {
      property: 'og:title',
      content: content.title,
    },
    {
      property: 'og:description',
      content: content.description,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      property: 'twitter:title',
      content: content.title,
    },
  ]
}
