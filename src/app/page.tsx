import Image from "next/image";

import { Button } from "@/components/ui/button";

import Navbar from "../components/Navbar";
import Card from "@/components/Card";

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

        <div className="grid grid-cols-3 mt-10 gap-10">
          <Card 
            name="ICED CLOUD MATCHA LATTE" 
            desc="Smooth ceremonial matcha topped with a light, creamy cloud foam." 
            price="£7.00"
            image="/featured/item-1.svg"
          />

          <Card 
            name="ICED STRAWBERRY MATCHA LATTE" 
            desc="Fresh strawberry sweetness layered with vibrant iced matcha." 
            price="£7.00"
            image="/featured/item-2.svg"
          />

          <Card 
            name="ICED CARAMEL MATCHA LATTE" 
            desc="Rich caramel blended with smooth matcha over refreshing ice." 
            price="£7.00"
            image="/featured/item-3.svg"
          />
        </div>
      </div>
    </div>
  );
}
