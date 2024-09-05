import HowToUseImg from '/assets/top-how-to-use.webp'

export const HowToUseSection = () => {
  return (
    <div className='p-5 flex flex-col justify-center items-center'>
      <div className='space-y-10 max-w-[620px]'>
        <h2 className='font-medium text-2xl underline decoration-[#DCEFEE] decoration-4 md:decoration-8'>
          ReserveEase導入から予約完了までの流れ。
        </h2>
        <div className='w-full h-52 md:h-80 rounded-lg'>
          <img src={HowToUseImg} />
        </div>
      </div>
    </div>
  )
}
