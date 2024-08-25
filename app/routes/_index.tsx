import type { MetaFunction } from '@remix-run/cloudflare'
import { Link } from '@remix-run/react'
import { Button } from '~/components/ui/button'

export default function Index() {
  return (
    <div className='space-y-8'>
      <div className='h-screen'>
        <div className='bg-[#DCEFEE] h-full flex flex-col justify-center items-center p-5 pt-16'>
          <div className='space-y-10 lg:space-y-8 max-w-[620px]'>
            <div className='font-medium text-5xl space-y-4'>
              <p>Reserve</p>
              <p>Ease</p>
            </div>
            <div className='space-y-2 font-medium'>
              <p>
                フリーランスや個人事業主のための
                <br />
                シンプルで洗練された予約システム
              </p>
              <p>
                ブランドイメージを損ねない予約ページで、顧客に最高の予約体験を提供します
              </p>
            </div>
            <Button asChild className='w-2/3 max-w-80'>
              <Link to='/'>初月無料で使ってみる</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className='p-5 flex flex-col justify-center items-center'>
        <div className='space-y-10 max-w-[620px]'>
          <h2 className='font-medium text-2xl'>
            予約管理に必要な機能は全て揃っています
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
            あなたのブランドに合ったデザインの予約ページを作成できます
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
    </div>
  )
}

export const meta: MetaFunction = () => {
  return [{ title: 'トップページ | ReserveEase' }]
}
