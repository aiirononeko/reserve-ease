import type { MetaFunction } from '@remix-run/cloudflare'
import { Link } from '@remix-run/react'
import { Button } from '~/components/ui/button'

export default function Index() {
  return (
    <div>
      <div className='h-screen'>
        {/* <img src='/assets/hero.webp' /> */}
        <div className='bg-[#CFE8E7] h-full flex flex-col justify-center space-y-10 p-5 pt-16 sm:p-10 md:p-32 lg:p-80 xl:p-96'>
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
  )
}

export const meta: MetaFunction = () => {
  return [{ title: 'トップページ | ReserveEase' }]
}
