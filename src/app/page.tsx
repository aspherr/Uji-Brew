import Image from "next/image";

import Navbar from "./components/Navbar";

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
          <button className="mt-6 bg-green-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-600 duration-300 text-md">
            Explore Now
          </button>
        </div>

        <Image src="/matcha-splash.svg" width={600} height={600} alt="matcha cup splash art"/>
      </div>
    </div>
  );
}
