import { Link } from '@remix-run/react'
import { User } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

interface Props {
  user: User | null
}

export const Header = ({ user }: Props) => {
  const [isSp, setIsSp] = useState(false)

  useEffect(() => {
    const flag = window.innerWidth < 1024
    setIsSp(flag)
  }, [])

  return (
    <header className='px-5 md:px-8 flex justify-between items-center h-16 border-b bg-white bg-opacity-50 fixed border-white w-full'>
      <Link to='/'>ReserveEase</Link>
      {user && (
        <Link to='/dashboard' className='text-sm'>
          ダッシュボード
        </Link>
      )}
    </header>
  )
}
