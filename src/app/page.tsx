import Image from "next/image";

import { Leaf, MountainSnow, Zap } from "lucide-react"

import { Button } from "@/components/ui/button";

import Navbar from "../components/Navbar";
import Card from "@/components/Card";
import Testemonial from "@/components/Testemonial";
import Footer from "@/components/Footer";

import Scroll from "@/components/Scroll";
import NavbarShell from "@/components/NavbarShell";

export default function Home() {
  const reviews = [
    { 
      text: "The smoothest matcha I’ve ever tasted. The flavour is rich but incredibly balanced.", 
      name: "Sarah L." 
    },
    { 
      text: "I’ve tried many matcha brands and this one is by far my favourite.", 
      name: "Min-seo K." 
    },
    { 
      text: "This matcha has become part of my daily routine. The flavour is fresh and clean.", 
      name: "Emily R." 
    },
    { 
      text: "The quality is amazing. The matcha has such a vibrant colour and smooth flavour — it reminds me of tea ceremonies I experienced in Japan.", 
      name: "Yuki T." 
    },
    { 
      text: "I switched from coffee to matcha and this one is perfect. It gives me calm energy throughout the day and tastes incredible iced or hot.", 
      name: "Ayesha K." 
    }
  ]

  return (
    <div className="w-full min-h-screen">
      <section>
        <div className="mx-auto max-w-8xl -my-7 mb-0.5">
          <NavbarShell />
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="font-sans ml-20">
            <h1 className="font-bold text-5xl leading-tight">Experience the Taste of Authentic Japanese <span className="text-green-500">Matcha</span></h1>
            <p className="mt-1 text-xl text-gray-700">Stone-ground green tea crafted for purity and balance.</p>
            <Button className="mt-6 p-5 font-semibold text-md bg-green-500 hover:bg-green-600 duration-300">
              Explore Now
            </Button>
          </div>

          <Image src="/home/matcha-splash.svg" width={600} height={600} alt="matcha cup splash art"/>
        </div>
      </section>

      <section className="mt-40 bg-green-100 py-20">
        <div className="flex flex-col items-center justify-center font-sans">
          <h1 className="font-bold text-4xl">FEATURED MATCHA</h1>
          <p className="mt-2 text-gray-700 text-xl">
            Discover our most <span className="underline decoration-green-500 decoration-2 underline-offset-5">popular</span> matcha selections.
          </p>

          <div className="grid grid-cols-3 mt-10 gap-10">
            <Card 
              name="ICED CLOUD MATCHA LATTE" 
              desc="Smooth ceremonial matcha topped with a light, creamy cloud foam." 
              price="£7.00"
              image="/home/featured/item-1.svg"
            />

            <Card 
              name="ICED STRAWBERRY MATCHA LATTE" 
              desc="Fresh strawberry sweetness layered with vibrant iced matcha." 
              price="£7.00"
              image="/home/featured/item-2.svg"
            />

            <Card 
              name="ICED CARAMEL MATCHA LATTE" 
              desc="Rich caramel blended with smooth matcha over refreshing ice." 
              price="£7.00"
              image="/home/featured/item-3.svg"
            />
          </div>
        </div>
      </section>

      <section className="mt-40 mb-20 ">
        <div className="flex flex-col items-center justify-center font-sans">
          <h1 className="font-bold text-4xl">WHAT MAKES OUR MATCHA SPECIAL</h1>

          <div className="grid grid-cols-3 mt-15 gap-10 max-w-7xl mx-auto">
            <div className="flex flex-col items-center gap-5">
              <div className="flex items-center justify-center p-4 rounded-full bg-green-200">
                <MountainSnow size={35}/>
              </div>

              <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-2xl">
                  Stone-Ground in Japan
                </h1>
                <p className="text-center max-w-xs text-gray-600 mt-1">
                  Traditionally stone-milled matcha sourced from Uji, Japan — the heart of premium Japanese tea.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-5">
              <div className="flex items-center justify-center p-4 rounded-full bg-green-200">
                <Leaf size={35}/>
              </div>

              <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-2xl">
                  Premium Tea Leaves
                </h1>
                <p className="text-center max-w-xs text-gray-600 mt-1">
                  Carefully shade-grown leaves produce matcha with a smooth taste and vibrant green colour.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-5">
              <div className="flex items-center justify-center p-4 rounded-full bg-green-200">
                <Zap size={35}/>
              </div>

              <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-2xl">
                  Natural Energy
                </h1>
                <p className="text-center max-w-xs text-gray-600 mt-1">
                  Rich in antioxidants and natural caffeine for calm, sustained energy throughout the day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-40 bg-green-100 py-20"> 
        <div className="flex flex-row max-w-4xl mx-auto mt-10 gap-15">
          <div className="relative shrink-0 h-150">
            <Image
              src="/home/matcha-brew.jpg"
              width={400}
              height={800}
              alt="matcha ceremony"
              className="rounded shadow-sm block"
            />

            <div className="pointer-events-none animate-pulse h-3 w-3 rounded-full bg-green-500 opacity-20 absolute -right-1 -top-1"></div>
            <div className="pointer-events-none animate-pulse h-3 w-3 rounded-full bg-green-500 opacity-20 absolute -right-1 -bottom-1"></div>
            <div className="pointer-events-none animate-pulse h-3 w-3 rounded-full bg-green-500 opacity-20 absolute -left-1 -top-1"></div>
            <div className="pointer-events-none animate-pulse h-3 w-3 rounded-full bg-green-500 opacity-20 absolute -left-1 -bottom-1"></div>
          </div>

          <div className="flex flex-col items-center font-sans -mt-1">
            <h1 className="font-bold text-4xl">THE RITUAL OF MATCHA</h1>

            <div className="text-gray-600 mt-3 ml-2 space-y-4 leading-relaxed">
              <p>
                Our matcha is sourced from the renowned tea fields of Uji, Japan, a region celebrated for producing some of the finest matcha in the world. For centuries, farmers in Uji have refined the art of cultivating exceptional tea, passing down techniques that ensure unmatched quality and flavour.
              </p>

              <p>
                Before harvest, the tea plants are carefully shade-grown for several weeks, allowing the leaves to develop their vibrant green colour and naturally sweet, umami-rich taste. This process increases the concentration of nutrients and antioxidants that make matcha both delicious and nourishing.
              </p>

              <p>
                Once harvested, the leaves are gently processed and stone-ground using traditional granite mills, slowly transforming them into the fine powder known as matcha. This meticulous process preserves the tea’s delicate aroma, smooth texture, and vivid colour.
              </p>

              <p>
                Every cup reflects a timeless Japanese ritual — a moment of calm, craftsmanship, and connection to centuries of tea tradition.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-40 mb-20">
        <div className="flex flex-col items-center justify-center font-sans">
          <h1 className="font-bold text-4xl">What Our Customers Say</h1>
        </div>

        <Testemonial reviews={reviews}/>

      </section>

      <section className="bg-green-100 py-24">
        <div className="max-w-4xl mx-auto text-center font-sans">

          <h2 className="text-4xl font-bold">
            Start Your Matcha Ritual
          </h2>

          <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
            Get closer to your brew — perks, flavours, and offers made just for you.
          </p>

          <div className="flex items-center justify-center gap-3 mt-7">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-md border border-gray-300 w-72 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <Button className="px-8 py-6 text-lg font-semibold bg-green-500 hover:bg-green-600 transition duration-300">
              Subscribe
            </Button>
          </div>

          <p className="mt-4 text-gray-700 text-md max-w-2xl mx-auto leading-relaxed">
            Join <span className="font-bold italic underline decoration-green-500 decoration-2 underline-offset-5">5000+</span> matcha lovers
          </p>
        </div>
      </section>

      <section>
        <Footer />
      </section>

      <Scroll/>
    </div>
  );
}
