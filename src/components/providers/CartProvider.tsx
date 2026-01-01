"use client"

import { createContext, useContext, useState, type ReactNode, type Dispatch, type SetStateAction } from "react"

type CartContextType = {
  basketCount: number
  setBasketCount: Dispatch<SetStateAction<number>>
  incrementBasket: (amount?: number) => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({
  children,
  initialCount = 0,
}: {
  children: ReactNode
  initialCount?: number
}) {
  const [basketCount, setBasketCount] = useState(initialCount)

  const incrementBasket = (amount = 1) => {
    setBasketCount((prev) => prev + amount)
  }

  return (
    <CartContext.Provider value={{ basketCount, setBasketCount, incrementBasket }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useCart must be used inside CartProvider")
  }

  return context
}