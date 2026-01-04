"use client"

import Image from "next/image"
import { Plus } from "lucide-react"
import { addToCart } from "@/app/actions/basket"
import { useRouter } from "next/navigation"

import { toast } from "sonner"

type Product = {
  id: string
  name: string
  desc: string | null
  price: number
  imageUrl: string | null
  stock: number
  isAvailable: boolean
}

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter()

  return (
    <div className="w-80 h-120 bg-white shadow-md rounded-xl border-2 flex flex-col">
      <div className="w-full h-3/5 flex items-center justify-center">
        <Image src={product.imageUrl ?? ""} width={225} height={225} alt="menu item" />
      </div>

      <div className="mt-3 px-4">
        <h1 className="text-xl font-bold">{product.name}</h1>
        <p className="text-xs mt-1 line-clamp-2">{product.desc}</p>
      </div>

      <div className="flex items-center justify-between w-full px-4 mt-auto mb-5">
        <h3 className="font-bold text-xl whitespace-nowrap">
          £{(product.price / 100).toFixed(2)}
        </h3>

        <button
          onClick={async () => {
            const res = await fetch("/api/auth/user")
            const data = await res.json()

            if (!data.user) {
              toast.error("Please sign in to add items to your basket", {
                action: {
                  label: "Login",
                  onClick: () => router.push("/auth/login"),
                },
              })
              return
            }

            await addToCart(product.id)

            toast.success("Added to basket 🛒")

            router.refresh()
          }}
          className="size-7 rounded-full bg-green-300 hover:bg-green-400 transition-all duration-300 flex items-center justify-center"
        >
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}