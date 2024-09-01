export const FeaturesSection = () => {
  return (
    <div className='p-5 flex flex-col justify-center items-center'>
      <div className='space-y-10 max-w-[620px]'>
        <h2 className='font-medium text-2xl underline decoration-[#DCEFEE] decoration-4 md:decoration-8'>
          予約管理に必要な機能は全て揃っています。
        </h2>
        <div className='space-y-2'>
          <p>
            ネット予約・事前決済・予約管理・顧客管理・カルテ管理・リマインドメール送信
          </p>
          <p>すべての機能を初月無料でまずはお試しいただけます。</p>
        </div>
        <div className='bg-gray-100 w-full h-80 rounded-lg'></div>
      </div>
    </div>
  )
}
