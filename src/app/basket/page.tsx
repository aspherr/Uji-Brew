import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/prisma"
import { createClient } from "@/lib/supabase/server"
import Image from "next/image"
import Link from "next/link"

const Page = async () => {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const cart = user
    ? await prisma.cart.findUnique({
        where: { authUserId: user.id },
        include: {
          items: {
            include: {
              product: true,
            },
          },
        },
      })
    : null

  const total =
    cart?.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    ) ?? 0

  return (
    <div className="w-full min-h-screen font-sans">
      <section>
        <div className="mx-auto max-w-8xl -my-7 mb-0.5">
          <Navbar />
        </div>
      </section>

      <section className="bg-green-100 py-20">
        <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-6">
          <h1 className="font-bold text-4xl">YOUR BASKET</h1>
          <p className="mt-2 text-gray-700 text-xl">
            Review your matcha selection before checkout.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {!user ? (
            <div className="flex flex-col items-center justify-center text-center bg-white rounded-2xl shadow-sm border p-12">
              <h2 className="text-3xl font-bold">Sign in to view your basket</h2>
              <p className="mt-3 text-gray-600 max-w-xl">
                Your saved matcha items will appear here once you sign in.
              </p>
              <Link href="/auth/login">
                <Button className="mt-6 bg-green-500 hover:bg-green-600 px-6 py-5 text-md font-semibold">
                  Sign In
                </Button>
              </Link>
            </div>
          ) : !cart || cart.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center bg-white rounded-2xl shadow-sm border p-12">
              <Image
                src="/home/featured/item-1.svg"
                alt="Empty basket"
                width={180}
                height={180}
                className="opacity-70"
              />
              <h2 className="mt-6 text-3xl font-bold">Your basket is empty</h2>
              <p className="mt-3 text-gray-600 max-w-xl">
                Looks like you haven&apos;t added any matcha yet. Explore our
                collection and find your perfect brew.
              </p>
              <Link href="/products">
                <Button className="mt-6 bg-green-500 hover:bg-green-600 px-6 py-5 text-md font-semibold">
                  Shop Products
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
              <div className="space-y-5">
                {cart.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-6 rounded-2xl border bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-center gap-5">
                      <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-green-100 overflow-hidden">
                        {item.product.imageUrl ? (
                          <Image
                            src={item.product.imageUrl}
                            alt={item.product.name}
                            width={96}
                            height={96}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="text-sm text-gray-500">No image</div>
                        )}
                      </div>

                      <div>
                        <h2 className="text-xl font-bold">
                          {item.product.name}
                        </h2>
                        {item.product.desc && (
                          <p className="mt-1 max-w-md text-sm text-gray-600 line-clamp-2">
                            {item.product.desc}
                          </p>
                        )}
                        <p className="mt-2 text-sm text-gray-500">
                          Quantity: <span className="font-medium text-gray-800">{item.quantity}</span>
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <p className="text-sm text-gray-500">Item Total</p>
                      <p className="text-lg font-bold text-gray-900">
                        £{((item.product.price * item.quantity) / 100).toFixed(2)}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        £{(item.product.price / 100).toFixed(2)} each
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-fit rounded-2xl bg-green-100 p-6 shadow-sm">
                <h2 className="text-2xl font-bold">Order Summary</h2>

                <div className="mt-6 space-y-4 text-gray-700">
                  <div className="flex items-center justify-between">
                    <span>Items</span>
                    <span>
                      {cart.items.reduce((sum, item) => sum + item.quantity, 0)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Subtotal</span>
                    <span>£{(total / 100).toFixed(2)}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Delivery</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>

                <div className="my-6 h-px bg-green-300" />

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-2xl font-bold">
                    £{(total / 100).toFixed(2)}
                  </span>
                </div>

                <Button className="mt-6 w-full bg-green-500 hover:bg-green-600 py-6 text-md font-semibold">
                  Proceed to Checkout
                </Button>

                <Link
                  href="/products"
                  className="mt-4 block text-center text-sm font-medium text-green-700 hover:underline"
                >
                  Continue shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  )
}

export default Page