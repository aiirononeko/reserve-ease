import { Circle, X } from 'lucide-react'

export const ComparisonTable = () => {
  return (
    <table className='text-center w-full flex-none'>
      <thead>
        <tr className='border border-primary'>
          <td className='border-r border-primary min-w-32'></td>
          <td className='border-2 border-primary px-2 py-4 max-w-24 sm:min-w-32 break-words'>
            ReserveEase
          </td>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            他社有料プラン
          </td>
          <td className='px-2 py-4 text-sm'>他社無料プラン</td>
        </tr>
      </thead>
      <tbody>
        <tr className='border border-primary bg-[#DCEFEE]'>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            月額料金
          </td>
          <td className='border-2 border-primary px-2 py-4'>550円</td>
          <td className='border-r border-primary px-2 py-4 text-sm'>3980円</td>
          <td className='border-r border-primary px-2 py-4 text-sm'>0円</td>
        </tr>
        <tr className='border border-primary'>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            ネット予約
          </td>
          <td className='border-2 border-primary px-2 py-4'>
            <Circle className='size-5 mx-auto' />
          </td>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            <Circle className='size-5 mx-auto' />
          </td>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            <Circle className='size-5 mx-auto' />
          </td>
        </tr>
        <tr className='border border-primary'>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            予約管理
          </td>
          <td className='border-2 border-primary px-2 py-4'>
            <Circle className='size-5 mx-auto' />
          </td>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            <Circle className='size-5 mx-auto' />
          </td>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            <Circle className='size-5 mx-auto' />
          </td>
        </tr>
        <tr className='border border-primary'>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            ネット決済
          </td>
          <td className='border-2 border-primary px-2 py-4'>
            <Circle className='size-5 mx-auto' />
          </td>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            <Circle className='size-5 mx-auto' />
          </td>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            <Circle className='size-5 mx-auto' />
          </td>
        </tr>
        <tr className='border border-primary bg-[#DCEFEE]'>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            予約確認メール
            <br />
            予約リマインドメール
          </td>
          <td className='border-2 border-primary px-2 py-4'>
            <Circle className='size-5 mx-auto' />
          </td>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            <Circle className='size-5 mx-auto' />
          </td>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            <Circle className='size-5 mx-auto' />
          </td>
        </tr>
        <tr className='border border-primary bg-[#DCEFEE]'>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            メール文言変更
          </td>
          <td className='border-2 border-primary px-2 py-4'>
            <Circle className='size-5 mx-auto' />
          </td>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            <Circle className='size-5 mx-auto' />
          </td>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            <X className='size-5 mx-auto' />
          </td>
        </tr>
        <tr className='border border-primary'>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            予約ページQR作成
          </td>
          <td className='border-2 border-primary px-2 py-4'>
            <Circle className='size-5 mx-auto' />
          </td>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            <Circle className='size-5 mx-auto' />
          </td>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            <Circle className='size-5 mx-auto' />
          </td>
        </tr>
        <tr className='border border-primary bg-[#DCEFEE]'>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            顧客管理
          </td>
          <td className='border-2 border-primary px-2 py-4'>
            <Circle className='size-5 mx-auto' />
          </td>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            <Circle className='size-5 mx-auto' />
          </td>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            <X className='size-5 mx-auto' />
          </td>
        </tr>
        <tr className='border border-primary bg-[#DCEFEE]'>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            オリジナルロゴ
          </td>
          <td className='border-2 border-primary px-2 py-4'>
            <Circle className='size-5 mx-auto' />
          </td>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            <Circle className='size-5 mx-auto' />
          </td>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            <X className='size-5 mx-auto' />
          </td>
        </tr>
        <tr className='border border-primary bg-[#DCEFEE]'>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            予約ページカスタマイズ
          </td>
          <td className='border-2 border-primary px-2 py-4'>
            <Circle className='size-5 mx-auto' />
          </td>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            <X className='size-5 mx-auto' />
          </td>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            <X className='size-5 mx-auto' />
          </td>
        </tr>
        <tr className='border border-primary bg-[#DCEFEE]'>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            多言語対応
          </td>
          <td className='border-2 border-primary px-2 py-4'>
            <Circle className='size-5 mx-auto' />
          </td>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            <X className='size-5 mx-auto' />
          </td>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            <X className='size-5 mx-auto' />
          </td>
        </tr>
        <tr className='border border-primary'>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            カスタマーサポート
          </td>
          <td className='border-2 border-primary px-2 py-4'>
            <Circle className='size-5 mx-auto' />
          </td>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            <Circle className='size-5 mx-auto' />
          </td>
          <td className='border-r border-primary px-2 py-4 text-sm'>
            <Circle className='size-5 mx-auto' />
          </td>
        </tr>
      </tbody>
    </table>
  )
}
