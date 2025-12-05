import Image from "next/image";
import { SiInstagram, SiFacebook, SiX } from "react-icons/si"

const Footer = () => {
  return (
    <footer className="bg-green-500 font-sans py-15">

      <div className="grid grid-cols-3 items-center max-w-8xl mx-auto px-20">

        <ul className="flex gap-10 font-semibold text-sm">
          <li><a href="">HOME</a></li>
          <li><a href="">OUR STORY</a></li>
          <li><a href="">PRODUCTS</a></li>
          <li><a href="">CONTACT</a></li>
        </ul>

        <div className="flex justify-center">
          <Image
            src="/global/logo.svg"
            width={150}
            height={150}
            alt="Uji Brew Logo"
          />
        </div>

        <div className="flex justify-end gap-10">
          <div className="p-2 rounded-full hover:bg-green-200 transition">
            <SiInstagram size={25} />
          </div>

          <div className="p-2 rounded-full hover:bg-green-200 transition">
            <SiX size={25} />
          </div>

          <div className="p-2 rounded-full hover:bg-green-200 transition">
            <SiFacebook size={25} />
          </div>
        </div>

      </div>

      <div className="text-center text-sm mt-7">
        © 2026 UjiBrew. All rights reserved
      </div>

    </footer>
  )
}

export default Footer
