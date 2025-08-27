import { useCartContext } from '@/context/useCartContext'

export function CartSummary() {
  const { state, removeFromCart, clearCart } = useCartContext()

  const total = state.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  )

  return (
    <div className=' flex flex-col justify-center items-center'>
      <h2 className='text-xl font-bold mb-4'>Shopping Cart</h2>
      {state.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className='mb-4'>
            {state.map((item) => (
              <li
                key={item.id}
                className='flex justify-between items-center py-2 border-b'
              >
                <div>
                  <p className='font-medium'>{item.title}</p>
                  <p className='text-sm'>Quantity: {item.quantity || 1}</p>
                </div>
                <div className='flex items-center gap-2'>
                  <p>${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart({ id: item.id })}
                    className='text-red-400 hover:text-red-300'
                  >
                    ✕
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className='flex justify-between font-bold mb-4'>
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            onClick={clearCart}
            className='w-full py-2 bg-red-500 rounded hover:bg-red-600'
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  )
}
