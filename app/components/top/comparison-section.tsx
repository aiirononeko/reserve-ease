import { ComparisonTable } from './comparison-table'

export const ComparisonSection = () => {
  return (
    <div className='p-5 flex flex-col justify-center items-center'>
      <div className='space-y-10 max-w-[620px]'>
        <h2 className='font-medium text-2xl underline decoration-[#DCEFEE] decoration-4 md:decoration-8'>
          個人利用に特化した料金設定。月額料金以外の追加課金はありません。
        </h2>
        <ComparisonTable />
      </div>
    </div>
  )
}
