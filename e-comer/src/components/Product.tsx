import { useCartContext } from '@/context/useCartContext'
import type { ProductType } from '@/types'

export function Product({ id, thumbnail, title, price }: ProductType) {
  const { addToCart, state } = useCartContext()
  const inCart = state.some((item) => item.id === id)
  const cartItem = state.find((item) => item.id === id)
  return (
    <li
      key={id}
      className='flex flex-col gap-2 items-center p-4 border rounded-lg bg-slate-700'
    >
      <img
        src={thumbnail}
        alt={title}
        className='w-32 h-32 object-cover rounded'
      />
      <p className='font-bold'>
        {title} - <span className='font-semibold'>${price}</span>
      </p>

      {inCart ? (
        <div className='flex items-center gap-2'>
          <span className='text-sm'>En carrito: {cartItem?.quantity || 1}</span>
          <button
            onClick={() =>
              addToCart({ id, thumbnail, title, price, category: '' })
            }
            className='px-3 py-1 bg-blue-500 rounded hover:bg-blue-600'
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() =>
            addToCart({ id, thumbnail, title, price, category: '' })
          }
          className='px-4 py-2 bg-green-500 rounded hover:bg-green-600'
        >
          Agregar al carrito
        </button>
      )}
    </li>
  )
}
