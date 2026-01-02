import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { createClient } from "@/lib/supabase/server"

export async function GET() {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    return NextResponse.json({ count: 0 })
  }

  const cart = await prisma.cart.findUnique({
    where: { authUserId: user.id },
    include: { items: true },
  })

  const count =
    cart?.items.reduce((sum, item) => sum + item.quantity, 0) ?? 0

  return NextResponse.json({ count })
}