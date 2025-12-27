import Image from "next/image";
import Link from 'next/link';

import { User, ShoppingCart } from 'lucide-react';

const Navbar = () => {
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

            <div className="flex items-center gap-10">
                <div className="p-2 rounded-full hover:bg-green-200 duration-300 transition">
                    
                    <Link href={"/auth/login"}><User/></Link>
                </div>

                <div className="p-2 rounded-full hover:bg-green-200 duration-300 transition">
                    <ShoppingCart />
                </div>
            </div>
        </nav>
  )
}

export default Navbar
