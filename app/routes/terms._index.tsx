import { json } from '@remix-run/cloudflare'
import { LoaderFunctionArgs } from '@remix-run/cloudflare'
import { MetaFunction } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import parse from 'html-react-parser'
import { createClient } from 'microcms-js-sdk'

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  const url = new URL(request.url)
  const tab = url.searchParams.get('tab') ?? ''

  const determineContentId = (tag: string): string => {
    switch (tag) {
      case 'privacy':
        return 'gcduwm-cz' // プライバシーポリシー
      case 'specified':
        return '03tpp08irfz' // 特定商法取引に関する表記
      default:
        return '9n3lyk3xm595' // 利用規約
    }
  }

  const client = createClient({
    serviceDomain: context.cloudflare.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: context.cloudflare.env.MICROCMS_API_KEY,
  })

  const { content } = await client.get<Blog>({
    endpoint: 'articles',
    contentId: determineContentId(tab),
  })

  return json({ content })
}

export default function Index() {
  const { content } = useLoaderData<typeof loader>()

  return <div id='article'>{parse(content)}</div>
}

export const meta: MetaFunction = () => {
  return [
    { title: '規約とポリシー | ReserveEase' },
    {
      description:
        'ReserveEaseはフリーランスや個人事業主向けの予約システムです。あなたのブランドに寄り添った予約ページを作成し、顧客に良質な予約体験を提供しましょう。',
    },
    {
      property: 'og:url',
      content: 'https://www.reserve-ease.com/terms',
    },
    {
      property: 'og:image',
      content: 'https://www.reserve-ease.com/top-ogp.webp',
    },
    {
      property: 'og:title',
      content: '規約とポリシー | ReserveEase',
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
      content: '規約とポリシー | ReserveEase',
    },
  ]
}
