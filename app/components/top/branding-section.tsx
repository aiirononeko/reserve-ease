import brandingImg from '/assets/top-branding.webp'

export const BrandingSection = () => {
  return (
    <div className='p-5 flex flex-col justify-center items-center'>
      <div className='space-y-10 max-w-[620px]'>
        <h2 className='font-medium text-2xl underline decoration-[#DCEFEE] decoration-4 md:decoration-8'>
          あなたのブランドに合ったデザインの予約ページを作成できます。
        </h2>
        <div className='space-y-2'>
          <p>
            管理画面から必要な情報を入力するだけで、簡単に予約サイトを作成できます。
          </p>
          <p>
            あなたのブランディングに寄り添った、おしゃれな予約サイトで顧客に良質な予約体験を提供しましょう。
          </p>
        </div>
        <div className='w-full h-52 md:h-80 rounded-lg'>
          <img src={brandingImg} />
        </div>
      </div>
    </div>
  )
}
