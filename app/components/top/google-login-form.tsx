import { Form, useNavigation } from '@remix-run/react'

import { Button } from '../ui/button'

export const GoogleLoginForm = () => {
  const navigation = useNavigation()

  return (
    <Form method='post'>
      <Button
        type='submit'
        className='w-full'
        disabled={navigation.state! != 'idle'}
      >
        {navigation.state !== 'idle' ? (
          <div className='flex justify-center' aria-label='読み込み中'>
            <div className='animate-spin size-5 border-2 border-white rounded-full border-t-transparent'></div>
          </div>
        ) : (
          <>
            <img src='/assets/google.svg' alt='google logo' className='mr-2' />
            Googleでログイン
          </>
        )}
      </Button>
    </Form>
  )
}
