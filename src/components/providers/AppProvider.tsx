import { prisma } from "@/lib/prisma"
import { createClient } from "@/lib/supabase/server"
import { CartProvider } from "./CartProvider"

const AppProviders = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const cart = user
    ? await prisma.cart.findUnique({
        where: { authUserId: user.id },
        include: { items: true },
      })
    : null

  const initialCount =
    cart?.items.reduce((sum, item) => sum + item.quantity, 0) ?? 0

  return (
    <CartProvider initialCount={initialCount}>
      {children}
    </CartProvider>
  )
}

export default AppProviders