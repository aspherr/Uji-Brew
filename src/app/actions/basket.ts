"use server"

import { prisma } from "@/lib/prisma"
import { createClient } from "@/lib/supabase/server"

export async function addToCart(productId: string) {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    throw new Error("You must be signed in to add items to your basket.")
  }

  const cart = await prisma.cart.findUnique({
    where: { authUserId: user.id },
    include: { items: true },
  })

  if (!cart) {
    await prisma.cart.create({
      data: {
        authUserId: user.id,
        items: {
          create: [
            {
              productId,
              quantity: 1,
            },
          ],
        },
      },
    })
    return
  }

  const existingItem = cart.items.find((item) => item.productId === productId)

  if (existingItem) {
    await prisma.cartItem.update({
      where: { id: existingItem.id },
      data: {
        quantity: {
          increment: 1,
        },
      },
    })
  } else {
    await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId,
        quantity: 1,
      },
    })
  }
}   