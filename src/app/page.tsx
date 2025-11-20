import Image from "next/image";

import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <div className="mx-auto max-w-8xl -my-7 mb-0.5">
        <Navbar/>
      </div>

      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="font-sans ml-20">
          <h1 className="font-bold text-5xl leading-tight">Experience the Taste of Authentic Japanese <span className="text-green-500">Matcha</span></h1>
          <p className="mt-1 text-xl text-gray-700">Stone-ground green tea crafted for purity and balance.</p>
          <Button className="mt-6 p-5 font-semibold text-md bg-green-500 hover:bg-green-600 duration-300">
            Explore Now
          </Button>
        </div>

        <Image src="/matcha-splash.svg" width={600} height={600} alt="matcha cup splash art"/>
      </div>

      <div className="flex flex-col items-center justify-center font-sans mt-10">
        <h1 className="font-bold text-4xl">FEATURED MATCHA</h1>
        <p className="mt-2 text-gray-700 text-xl">
          Discover our most <span className="underline decoration-green-500 decoration-2 underline-offset-5">popular</span> matcha selections.
        </p>

        <div className="">
          
        </div>
      </div>
    </div>
  );
}
