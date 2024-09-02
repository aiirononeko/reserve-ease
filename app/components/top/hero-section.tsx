import { Form } from '@remix-run/react'
import { Button } from '~/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'

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
              ブランドイメージに寄り添った予約サイトで、顧客に良質な予約体験を提供します
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className='w-2/3 max-w-80'>初月無料で使ってみる</Button>
            </DialogTrigger>
            <DialogContent className='space-y-4'>
              <DialogHeader className='space-y-6'>
                <DialogTitle className='text-2xl text-left'>
                  ReserveEaseに先行登録でずっと月額500円でご利用いただけます！
                </DialogTitle>
                <DialogDescription className='leading-8 text-left'>
                  ReserveEaseは現在開発中のため、すぐにサービスをご利用いただくことができません。
                  <br />
                  先行登録いただいた方には
                  <strong>
                    通常月額料金980円のところを、永年500円でご利用いただけるキャンペーン
                  </strong>
                  を実施しております！
                  <br />
                  リリース日は<strong>2024年11月1日</strong>
                  を予定しております。（開発状況により変動する可能性があります）
                  <br />
                  先行登録いただければ、サービスリリース直前にメールにてお知らせいたします。
                  <br />
                  課金はサービスリリース後、お客様に月額料金の支払い手続きを実施いただくまで発生いたしません。
                </DialogDescription>
              </DialogHeader>
              <Form method='post'>
                <Button type='submit' className='w-full'>
                  <img
                    src='/assets/google.svg'
                    alt='google logo'
                    className='mr-2'
                  />
                  Googleでログイン
                </Button>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
