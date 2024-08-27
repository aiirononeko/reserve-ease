import { NavLink, Outlet, useLocation } from '@remix-run/react'

export default function Terms() {
  const { search } = useLocation()
  const tab = new URLSearchParams(search).get('tab')

  return (
    <div className='container mx-auto max-w-[620px] space-y-10 pt-28 md:pt-40 pb-16'>
      <div className='flex gap-6 border-b pb-2 md:text-xl'>
        <NavLink
          to='/terms'
          className={({ isActive }) =>
            isActive && tab === null ? 'text-primary' : 'text-muted-foreground'
          }
        >
          利用規約
        </NavLink>
        <NavLink
          to='/terms?tab=privacy'
          className={({ isActive }) =>
            isActive && tab === 'privacy'
              ? 'text-primary'
              : 'text-muted-foreground'
          }
        >
          プライバシー<span className='hidden md:inline'>ポリシー</span>
        </NavLink>
        <NavLink
          to='/terms?tab=specified'
          className={({ isActive }) =>
            isActive && tab === 'specified'
              ? 'text-primary'
              : 'text-muted-foreground'
          }
        >
          特商法表記
        </NavLink>
      </div>
      <Outlet />
    </div>
  )
}
