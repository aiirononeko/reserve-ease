import { Link, useNavigation } from '@remix-run/react'

import { Button } from '../ui/button'

export const ColumnSection = () => {
  const navigation = useNavigation()

  return (
    <div className='p-5 flex flex-col justify-center items-center'>
      <div className='space-y-10 max-w-[620px]'>
        <h2 className='font-medium text-2xl underline decoration-[#DCEFEE] decoration-4 md:decoration-8'>
          フリーランスや個人サロン経営者の方向けに、予約システムの活用方法や選び方をご紹介しています。
        </h2>
        <div className='flex justify-center'>
          <Button
            asChild
            className='w-2/3 max-w-80'
            disabled={navigation.state !== 'idle'}
          >
            {navigation.state !== 'idle' ? (
              <div className='flex justify-center' aria-label='読み込み中'>
                <div className='animate-spin size-5 border-2 border-white rounded-full border-t-transparent'></div>
              </div>
            ) : (
              <Link to='/articles'>コラムをみる</Link>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
