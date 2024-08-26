export const CustomerSupportSection = () => {
  return (
    <div className='p-5 flex flex-col justify-center items-center'>
      <div className='space-y-10 max-w-[620px]'>
        <h2 className='font-medium text-2xl underline decoration-[#DCEFEE] decoration-4 md:decoration-8'>
          安心のカスタマーサポート体制でReserveEaseの導入をサポートします。
        </h2>
        <div className='space-y-2'>
          <p>
            分からないことや困ったことがあれば、管理画面から簡単にお問い合わせいただけます。
          </p>
          <p>追加費用はかからないので、気兼ねなくご質問ください。</p>
          <p className='text-muted-foreground text-xs pt-2'>
            ※ご連絡いただいてから24時間~48時間で対応させていただきます。
          </p>
        </div>
        <div className='bg-gray-100 w-full h-80 rounded-lg'></div>
      </div>
    </div>
  )
}
