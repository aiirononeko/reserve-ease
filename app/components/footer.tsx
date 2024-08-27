import { Link } from '@remix-run/react'

export const Footer = () => {
  return (
    <footer className='border-t sticky top-full p-8'>
      <div className='max-w-[620px] mx-auto space-y-8'>
        <div className='container grid grid-cols-2 gap-5 justify-center md:grid-cols-4'>
          <Link to='/' className='text-xs hover:underline'>
            ホーム
          </Link>
          <Link to='/articles' className='text-xs hover:underline'>
            コラム
          </Link>
          <Link to='/how-to-use' className='text-xs hover:underline'>
            使い方
          </Link>
          <Link to='/terms' className='text-xs hover:underline'>
            規約とポリシー
          </Link>
        </div>
        <div className='grid justify-center'>
          <p className='text-xs'>
            &copy; 2024 ReserveEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
