import { Link } from '@remix-run/react'
import parse from 'html-react-parser'
import { useEffect, useState } from 'react'
import { Badge } from '~/components/ui/badge'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'

import { Button } from '../ui/button'
import { Toc } from './toc'

interface Props {
  content: Blog
}

export const ContentDetail = ({ content }: Props) => {
  const [isSp, setIsSp] = useState(false)

  useEffect(() => {
    const flag = window.innerWidth < 1024
    setIsSp(flag)
  }, [])

  return (
    <div className='container mx-auto grid grid-cols-4 gap-8 w-full max-w-[1120px] relative'>
      <div className='col-span-4 sm:border rounded py-2 sm:py-6 sm:px-10 md:py-10 lg:col-span-3'>
        <div className='space-x-2'>
          {content.tags.map((tag) => (
            <Badge key={tag.id} variant='outline' className='h-8 space-x-1'>
              <span>#</span>
              <span>{tag.name}</span>
            </Badge>
          ))}
        </div>
        <div id='article' className='article'>
          {parse(content.content)}
          <div className='flex justify-center mt-6 md:py-2'>
            <Button asChild className='w-80'>
              <Link to='/'>初月無料で試す</Link>
            </Button>
          </div>
        </div>
      </div>
      {isSp ? (
        <Popover>
          <PopoverTrigger asChild className='fixed bottom-6 right-6'>
            <Button variant='outline' className='z-10'>
              目次
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Toc />
          </PopoverContent>
        </Popover>
      ) : (
        <div className='col-span-1 flex flex-col gap-8 relative'>
          <div className='border rounded p-5 space-y-4 sticky top-6'>
            <p className='font-bold'>目次</p>
            <Toc />
          </div>
        </div>
      )}
    </div>
  )
}
