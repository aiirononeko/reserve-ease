import { Link } from '@remix-run/react'
import { Button } from '~/components/ui/button'

export const HeroSection = () => {
  return (
    <div className='h-screen'>
      <div className='bg-[#DCEFEE] h-full flex flex-col justify-center items-center px-5 pt-16'>
        <div className='space-y-10 max-w-[620px]'>
          <div className='font-medium text-5xl space-y-4'>
            <p>Reserve</p>
            <p>Ease</p>
            <p className='text-muted-foreground text-sm pt-1'>
              - リザーブイーズ
            </p>
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
