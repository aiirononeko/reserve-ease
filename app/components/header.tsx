import { Link } from '@remix-run/react'

export const Header = () => {
  return (
    <header className='px-5 md:px-8 flex justify-between items-center h-16 border-b bg-white bg-opacity-50 fixed border-white w-full'>
      <Link to='/'>ReserveEase</Link>
    </header>
  )
}
