import { LoaderFunctionArgs, json } from '@remix-run/cloudflare'
import { MetaFunction } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import { createClient } from 'microcms-js-sdk'
import { ContentCard } from '~/components/articles/content-card'

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const client = createClient({
    serviceDomain: context.cloudflare.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: context.cloudflare.env.MICROCMS_API_KEY,
  })

  const { contents } = await client.getList<Blog>({
    endpoint: 'articles',
    queries: {
      orders: '-createdAt',
      filters:
        'id[not_equals]9n3lyk3xm595[and]id[not_equals]03tpp08irfz[and]id[not_equals]gcduwm-cz',
    },
  })

  return json({ contents })
}

export default function Index() {
  const { contents } = useLoaderData<typeof loader>()

  return (
    <div className='container mx-auto max-w-[1120px] space-y-10 md:space-y-16 pt-28 md:pt-40 pb-16'>
      <h2 className='text-center text-2xl font-medium'>すべてのコラム</h2>
      {contents.length > 0 ? (
        <div className='grid lg:grid-cols-3 gap-8 justify-center'>
          {contents.map((content) => (
            <ContentCard key={content.id} content={content} />
          ))}
        </div>
      ) : (
        <div>
          <p className='text-muted-foreground text-center'>
            記事が見つかりません
          </p>
        </div>
      )}
    </div>
  )
}

export const meta: MetaFunction = () => {
  return [
    { title: 'コラム | ReserveEase' },
    {
      description:
        'ReserveEaseはフリーランスや個人事業主向けの予約システムです。あなたのブランドに寄り添った予約ページを作成し、顧客に良質な予約体験を提供しましょう。',
    },
    {
      property: 'og:url',
      content: 'https://www.reserve-ease.com/articles',
    },
    {
      property: 'og:image',
      content: 'https://www.reserve-ease.com/assets/top-ogp.webp',
    },
    {
      property: 'og:title',
      content: 'コラム | ReserveEase',
    },
    {
      property: 'og:description',
      content:
        'ReserveEaseはフリーランスや個人事業主向けの予約システムです。あなたのブランドに寄り添った予約ページを作成し、顧客に良質な予約体験を提供しましょう。',
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
      content: 'コラム | ReserveEase',
    },
  ]
}
