import type { ProductType } from '@/types'

export function Product({ id, thumbnail, title, price }: ProductType) {
  return (
    <li key={id} className='flex flex-col gap-2 items-center'>
      <img src={thumbnail} alt={title} />
      <p className='font-bold'>
        {title}-<span className='font-semibold'>${price}</span>
      </p>
    </li>
  )
}
