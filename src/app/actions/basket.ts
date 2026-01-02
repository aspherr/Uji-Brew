"use server"

import { prisma } from "@/lib/prisma"
import { createClient } from "@/lib/supabase/server"
import { revalidatePath, refresh } from "next/cache" 

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
          create: [{ productId, quantity: 1 }],
        },
      },
    })
  } else {
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

  revalidatePath("/basket")
  refresh()
}

export async function removeCartItem(cartItemId: string) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("Not authenticated")
  }

  const item = await prisma.cartItem.findUnique({
    where: { id: cartItemId },
    include: {
      cart: true,
    },
  })

  if (!item) return

  if (item.cart.authUserId !== user.id) {
    throw new Error("Unauthorized")
  }

  if (item.quantity > 1) {
    await prisma.cartItem.update({
      where: { id: cartItemId },
      data: {
        quantity: {
          decrement: 1,
        },
      },
    })
  } else {
    await prisma.cartItem.delete({
      where: { id: cartItemId },
    })
  }

  revalidatePath("/basket")
}