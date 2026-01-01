"use client"

import Image from "next/image"

import { Plus } from 'lucide-react';
import { useCart } from "@/components/providers/CartProvider"
import { addToCart } from "@/app/actions/basket";

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
    const { incrementBasket } = useCart()

    return (
    <div className="w-80 h-120 bg-white shadow-md rounded-xl border-2 flex flex-col">
        <div className="w-full h-3/5 rounded-t-xl flex items-center justify-center">
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

            <div className="flex items-center justify-center gap-3">
                <form
                action={async () => {
                    await addToCart(product.id)
                    incrementBasket(1)
                }}
                >
                <button
                    type="submit"
                    className="size-7 min-w-7 min-h-7 rounded-full bg-green-300 hover:bg-green-400 transition-all duration-300 flex items-center justify-center shrink-0 overflow-hidden p-0"
                >
                    <Plus className="w-3.5 h-3.5" />
                </button>
                </form>
            </div>
        </div>
    </div>
    );
  }


         