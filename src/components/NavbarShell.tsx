import Navbar from "@/components/Navbar"
import { prisma } from "@/lib/prisma"
import { createClient } from "@/lib/supabase/server"

const NavbarShell = async () => {
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

  const basketCount =
    cart?.items.reduce((sum, item) => sum + item.quantity, 0) ?? 0

  return <Navbar basketCount={basketCount} />
}

export default NavbarShell