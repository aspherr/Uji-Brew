"use client"

import { useFormStatus } from "react-dom"
import { addToCart, removeCartItem } from "@/app/actions/basket"

function QuantityButton({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className={`${className} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  )
}

export default function QuantityControls({
  cartItemId,
  productId,
  quantity,
}: {
  cartItemId: string
  productId: string
  quantity: number
}) {
  return (
    <div className="mt-2 flex items-center gap-3">
      <form action={removeCartItem.bind(null, cartItemId)}>
        <QuantityButton className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-bold">
          -
        </QuantityButton>
      </form>

      <span className="font-medium text-gray-800 min-w-5 text-center">
        {quantity}
      </span>

      <form action={addToCart.bind(null, productId)}>
        <QuantityButton className="flex h-7 w-7 items-center justify-center rounded-full bg-green-200 hover:bg-green-300 text-sm font-bold">
          +
        </QuantityButton>
      </form>
    </div>
  )
}