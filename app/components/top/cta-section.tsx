import { Link } from '@remix-run/react'

import { Button } from '../ui/button'

export const CtaSection = () => {
  return (
    <div className='p-5 flex flex-col justify-center items-center'>
      <div className='space-y-10 max-w-[620px]'>
        <h2 className='font-medium text-2xl underline decoration-[#DCEFEE] decoration-4 md:decoration-8'>
          まずはあなたのブランドイメージにあった予約サイトを作ってみましょう。
        </h2>
        <div className='flex justify-center'>
          <Button asChild className='w-2/3 max-w-80'>
            <Link to='/'>初月無料で試す</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
