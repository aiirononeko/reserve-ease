import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'

import { Button } from '../ui/button'
import { GoogleLoginForm } from './google-login-form'

export const CtaSection = () => {
  return (
    <div className='p-5 flex flex-col justify-center items-center'>
      <div className='space-y-10 max-w-[620px]'>
        <h2 className='font-medium text-2xl underline decoration-[#DCEFEE] decoration-4 md:decoration-8'>
          まずはあなたのブランドイメージにあった予約サイトを作ってみましょう。
        </h2>
        <div className='flex justify-center'>
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
              <GoogleLoginForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
