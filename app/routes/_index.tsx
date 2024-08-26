import type { MetaFunction } from '@remix-run/cloudflare'
import { BrandingSection } from '~/components/top/branding-section'
import { ColumnSection } from '~/components/top/column-section'
import { ComparisonSection } from '~/components/top/comparison-section'
import { CtaSection } from '~/components/top/cta-section'
import { CustomerSupportSection } from '~/components/top/customer-support-section'
import { FeaturesSection } from '~/components/top/features-section'
import { HeroSection } from '~/components/top/hero-section'
import { ProsSection } from '~/components/top/pros-section'

export default function Index() {
  return (
    <div className='space-y-16 mb-16'>
      <HeroSection />
      <FeaturesSection />
      <BrandingSection />
      <ComparisonSection />
      <ProsSection />
      <CustomerSupportSection />
      <ColumnSection />
      <CtaSection />
    </div>
  )
}

export const meta: MetaFunction = () => {
  return [
    { title: 'トップページ | ReserveEase' },
    {
      description:
        'ReserveEaseはフリーランスや個人事業主向けの予約システムです。あなたのブランドに寄り添った予約ページを作成し、顧客に良質な予約体験を提供しましょう。',
    },
    {
      property: 'og:url',
      content: 'https://www.reserve-ease.com',
    },
    {
      property: 'og:image',
      content: 'https://www.reserve-ease.com/assets/top-ogp.webp',
    },
    {
      property: 'og:title',
      content: 'トップページ | ReserveEase',
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
      content: 'トップページ | ReserveEase',
    },
  ]
}
