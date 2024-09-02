import { Link } from '@remix-run/react'
import { Button } from '~/components/ui/button'
import { Separator } from '~/components/ui/separator'

export default function Dashboard() {
  return (
    <div className='container mx-auto max-w-[1120px] space-y-10 md:space-y-16 pt-24 pb-16'>
      <h2 className='text-center text-xl font-medium'>ダッシュボード</h2>
      <div className='mx-auto max-w-[620px] text-left space-y-6'>
        <p>ReserveEaseに先行登録いただき誠にありがとうございます！</p>
        <p>
          ReserveEaseは現在開発中につき、すぐにサービスをご利用いただくことができません。
        </p>
        <p>
          サービスのリリースは、<strong>2024年11月1日</strong>
          を予定しております。
        </p>
        <p>
          リリース日が決定しましたら、ご登録いただいたメールアドレスにお知らせさせていただきます。
        </p>
        <p>
          サービスリリース後、サブスクリプションの登録をいただくまではお支払いは発生いたしませんのでご安心ください。
        </p>
        <Separator />
        <p>
          ReserveEaseの開発状況やフリーランス向けのコラムを公式Xにて発信しております。
        </p>
        <Button variant='link' asChild className='pl-0'>
          <a href='https://x.com/ReserveEase' className='underline'>
            公式Xはこちら
          </a>
        </Button>
        <Separator />
        <p>
          ご不明な点は下記フォームからお問い合わせいただけましたら、開発チームが24時間~48時間で対応させていただきます。
        </p>
        <p>お気軽にご連絡ください。</p>
        <Button variant='link' asChild className='pl-0'>
          <Link to='/' className='underline'>
            お問い合わせフォームはこちら
          </Link>
        </Button>
      </div>
    </div>
  )
}
