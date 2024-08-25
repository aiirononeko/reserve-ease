import type { MetaFunction } from '@remix-run/cloudflare'
import { ComparisonTable } from '~/components/top/comparison-table'
import { HeroSection } from '~/components/top/hero-section'

export default function Index() {
  return (
    <div className='space-y-16'>
      <HeroSection />
      <div className='p-5 flex flex-col justify-center items-center'>
        <div className='space-y-10 max-w-[620px]'>
          <h2 className='font-medium text-2xl'>
            予約管理に必要な機能は全て揃っています。
          </h2>
          <div className='space-y-2'>
            <p>
              ネット予約・事前決済・予約管理・顧客管理・リマインドメール送信・多言語対応
            </p>
            <p>すべての機能を初月無料でまずはお試しいただけます。</p>
          </div>
          <div className='bg-gray-100 w-full h-80 rounded-lg'></div>
        </div>
      </div>
      <div className='p-5 flex flex-col justify-center items-center'>
        <div className='space-y-10 max-w-[620px]'>
          <h2 className='font-medium text-2xl'>
            あなたのブランドに合ったデザインの予約ページを作成できます。
          </h2>
          <div className='space-y-2'>
            <p>
              管理画面から必要な情報を入力するだけで、簡単に予約サイトを作成できます。
            </p>
            <p>
              美容師やネイリスト、ヨガ、パーソナルジムなど、さまざまな業種の方にご利用いただけます。
            </p>
          </div>
          <div className='bg-gray-100 w-full h-80 rounded-lg'></div>
        </div>
      </div>
      <div className='p-5 flex flex-col justify-center items-center'>
        <div className='space-y-10 max-w-[620px]'>
          <h2 className='font-medium text-2xl'>
            個人利用に特化した料金設定。月額料金以外の追加課金はありません。
          </h2>
          <ComparisonTable />
        </div>
      </div>
    </div>
  )
}

export const meta: MetaFunction = () => {
  return [{ title: 'トップページ | ReserveEase' }]
}
