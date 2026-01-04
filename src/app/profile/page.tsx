import NavbarShell from "@/components/NavbarShell"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/prisma"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { MapPin, Mail, User, Package } from "lucide-react"

const Page = async () => {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const addresses = user
    ? await prisma.address.findMany({
        where: { authUserId: user.id },
      })
    : []

  const orders = user
    ? await prisma.order.findMany({
        where: { authUserId: user.id },
        orderBy: { createdAt: "desc" },
        take: 3,
      })
    : []

  const fullName =
    user?.user_metadata?.full_name || "Guest User"

  const firstName =
    user?.user_metadata?.full_name?.trim().split(" ")[0] || "Guest"

  return (
    <div className="w-full min-h-screen font-sans">
      <section>
        <div className="mx-auto max-w-8xl -my-7 mb-0.5">
          <NavbarShell />
        </div>
      </section>

      <section className="bg-green-100 py-20">
        <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-6">
          <h1 className="font-bold text-4xl">MY PROFILE</h1>
          <p className="mt-2 text-gray-700 text-xl">
            Manage your details, addresses, and recent orders.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {!user ? (
            <div className="flex flex-col items-center justify-center text-center bg-white rounded-2xl shadow-sm border p-12">
              <h2 className="text-3xl font-bold">Sign in to view your profile</h2>
              <p className="mt-3 text-gray-600 max-w-xl">
                Access your account details, saved addresses, and recent matcha orders.
              </p>
              <Link href="/auth/login">
                <Button className="mt-6 bg-green-500 hover:bg-green-600 px-6 py-5 text-md font-semibold">
                  Sign In
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
              <div className="space-y-6">
                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <User className="h-7 w-7 text-green-700" />
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold">Hi, {firstName}</h2>
                      <p className="text-sm text-gray-500">
                        Welcome back to UjiBrew
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-xl bg-green-50 p-4">
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="mt-1 font-semibold text-gray-900">
                        {fullName}
                      </p>
                    </div>

                    <div className="rounded-xl bg-green-50 p-4">
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="mt-1 font-semibold text-gray-900 break-all">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-green-700" />
                    <h2 className="text-2xl font-bold">Saved Addresses</h2>
                  </div>

                  {addresses.length === 0 ? (
                    <p className="mt-4 text-gray-600">
                      You have no saved addresses yet.
                    </p>
                  ) : (
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {addresses.map((address) => (
                        <div
                          key={address.id}
                          className="rounded-xl bg-green-50 p-4"
                        >
                          <p className="font-semibold text-gray-900">
                            {address.line1}
                          </p>
                          {address.line2 && (
                            <p className="text-gray-700">{address.line2}</p>
                          )}
                          <p className="text-gray-700">
                            {address.city}, {address.postcode}
                          </p>
                          <p className="text-gray-700">{address.country}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Package className="h-5 w-5 text-green-700" />
                    <h2 className="text-2xl font-bold">Recent Orders</h2>
                  </div>

                  {orders.length === 0 ? (
                    <p className="mt-4 text-gray-600">
                      You haven&apos;t placed any orders yet.
                    </p>
                  ) : (
                    <div className="mt-5 space-y-4">
                      {orders.map((order) => (
                        <div
                          key={order.id}
                          className="flex items-center justify-between rounded-xl bg-green-50 p-4"
                        >
                          <div>
                            <p className="font-semibold text-gray-900">
                              Order #{order.id.slice(0, 8)}
                            </p>
                            <p className="text-sm text-gray-500">
                              {new Date(order.createdAt).toLocaleDateString()}
                            </p>
                          </div>

                          <div className="text-right">
                            <p className="font-bold text-gray-900">
                              £{(order.total / 100).toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-500">
                              {order.status}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="h-fit rounded-2xl bg-green-100 p-6 shadow-sm">
                <h2 className="text-2xl font-bold">Account Summary</h2>

                <div className="mt-6 space-y-4 text-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      Email
                    </span>
                    <span className="text-right break-all max-w-60">
                      {user.email}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Addresses</span>
                    <span>{addresses.length}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Recent Orders</span>
                    <span>{orders.length}</span>
                  </div>
                </div>

                <div className="my-6 h-px bg-green-300" />

                <div className="space-y-3">
                  <Button className="w-full bg-green-500 hover:bg-green-600 py-6 text-md font-semibold">
                    Edit Profile
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full py-6 text-md font-semibold bg-white"
                  >
                    Manage Addresses
                  </Button>
                </div>

                <Link
                  href="/basket"
                  className="mt-4 block text-center text-sm font-medium text-green-700 hover:underline"
                >
                  View your basket
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