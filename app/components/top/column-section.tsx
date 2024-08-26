import { Link } from '@remix-run/react'

import { Button } from '../ui/button'

export const ColumnSection = () => {
  return (
    <div className='p-5 flex flex-col justify-center items-center'>
      <div className='space-y-10 max-w-[620px]'>
        <h2 className='font-medium text-2xl underline decoration-[#DCEFEE] decoration-4 md:decoration-8'>
          予約システムの活用方法や選び方をご紹介しています。
        </h2>
        <div className='flex justify-center'>
          <Button asChild className='w-2/3 max-w-80'>
            <Link to='/'>コラムをみる</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
