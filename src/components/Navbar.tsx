"use client"

import Image from "next/image";
import Link from 'next/link';

import { User, ShoppingCart } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { supabase } from "@/lib/supabase"
import { useEffect, useState } from "react"

type AuthUser = {
  id: string
  email?: string
  user_metadata?: {
    full_name?: string
  }
}


const Navbar = () => {
    const [user, setUser] = useState<AuthUser | null>(null)
    const firstName = user?.user_metadata?.full_name?.split(" ")[0]

    useEffect(() => {
    const getUser = async () => {
        const { data } = await supabase.auth.getUser()
        setUser(data.user)
    }

    const { data: { subscription }} = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null)
    })

    getUser()
    return () => subscription.unsubscribe()
    }, [])


    let dot_classes = "absolute left-1/2 top-full mt-1 h-1.5 w-3.5 -translate-x-1/2 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 duration-500"
    return (
        <nav className="relative flex items-center justify-between px-20 h-30 mt-7">
            <Link href="/">
                <Image src="/global/logo.svg" width={150} height={150} alt="Uji Brew Logo"/> 
            </Link>

            <ul className="absolute left-1/2 flex -translate-x-1/2 gap-15 font-semibold font-sans text-md">
                <li className="relative group">
                    <Link href="/about">Our Story</Link>
                    <span className={dot_classes}></span>
                </li>
                
                <li className="relative group">
                    <Link href="/products">Products</Link>
                    <span className={dot_classes}></span>
                </li>
                
                <li className="relative group">
                    <Link href="/contact">Contact</Link>
                    <span className={dot_classes}></span>
                </li>
            </ul>

            <div className="flex items-center gap-10 font-sans">
                <div className={`${user ? "px-3 py-1" : "p-2"} rounded-full hover:bg-green-200 transition duration-300`}>
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <div className="flex items-center gap-2 text-gray-800 font-medium">
                                    <User className="w-5 h-5" />
                                    <span>Hi, {firstName || "User"}</span>
                                </div>
                            </DropdownMenuTrigger>
                            
                            <DropdownMenuContent className="font-sans">
                                <DropdownMenuGroup>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Address</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={async () => {
                                    await supabase.auth.signOut()
                                }}> 
                                    Sign Out
                                </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        ) : (
                        <Link href={"/auth/login"}><User/></Link>
                    )}
                </div>

                <div className="p-2 rounded-full hover:bg-green-200 duration-300 transition">
                    <ShoppingCart />
                </div>
            </div>
        </nav>
  )
}

export default Navbar
