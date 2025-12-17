"use client"
import Image from "next/image";

import Navbar from "@/components/Navbar";
import CircularText from "@/components/ui/CircularText";
import OrbitImages from "@/components/ui/OrbitImages";
import { Button } from "@/components/ui/button";
import Scroll from "@/components/Scroll";
import Footer from "@/components/Footer";

const Page = () => {
    const images = [
        "/about/orbit/image-1.jpg",
        "/about/orbit/image-2.jpg",
        "/about/orbit/image-3.jpg",
        "/about/orbit/image-4.jpg",
        "/about/orbit/image-5.jpg"
    ]

    return (
    <div className="w-full min-h-screen font-sans">
        <section>
            <div className="mx-auto max-w-8xl -my-7 mb-0.5">
                <Navbar/>
            </div>
        </section>

        <section className="relative w-full h-120">
            <Image
                src="/about/banner.jpg"
                alt="banner image"
                fill
                className="object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="font-bold text-9xl text-white drop-shadow-2xl underline decoration-green-500 decoration-5 underline-offset-15">
                    OUR STORY
                </h1>
            </div>
        </section>

        <section className="py-20">
            <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
                <h1 className="font-bold text-3xl mb-5">A Tradition Worth Sharing</h1>
                <p className="text-gray-600">
                    UjiBrew was founded with a simple purpose: to share the authentic taste and timeless ritual of Japanese matcha with the world.
                    What began as a deep appreciation for traditional tea culture quickly became a mission to bring the same quality, craftsmanship, and calm experience of matcha to everyday life. At UjiBrew, we believe matcha is more than just a drink — it’s a moment to slow down, focus, and reconnect.
                </p>
            </div>
        </section>

        <section className="bg-green-100 py-24">
            <div className="grid grid-cols-2 items-center max-w-5xl mx-auto">
                <div className="relative w-100 h-100">
                    <Image
                        src="/about/fields.jpg"
                        alt="Tea fields in Uji"
                        fill
                        className="rounded-xl shadow-md object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <CircularText
                        text="MADE*IN*UJI*JAPAN*"
                        onHover="speedUp"
                        spinDuration={25}
                        />
                    </div>
                </div>

                <div className="font-sans">
                    <h2 className="text-5xl font-bold">
                        Inspired by Uji, Japan
                    </h2>

                    <div className="text-gray-600 mt-6 space-y-4 leading-relaxed max-w-lg">
                        <p>
                            Our matcha is sourced from the historic tea fields of Uji, Japan, a region renowned for producing some of the finest matcha in the world for centuries. Known as the heart of Japan’s matcha tradition, Uji has long been celebrated for its exceptional tea cultivation and craftsmanship.                        
                        </p>
                        
                        <p>
                            The region’s cool climate, fertile soil, and generations of farming expertise create ideal conditions for growing high-quality tea leaves. Farmers carefully nurture the plants and use traditional cultivation techniques that have been refined over hundreds of years.
                        </p>
                        
                        <p>
                            By working closely with producers who honour these traditions, we ensure every batch of matcha reflects the authenticity, quality, and heritage that made Uji famous. From the tea fields of Japan to your cup, each sip carries the story of a timeless craft.                             
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24">
            <div className="grid grid-cols-2 items-center max-w-5xl mx-auto gap-15">

                {/* Text */}
                <div className="font-sans">
                <h2 className="text-5xl font-bold">
                    Crafted with Care
                </h2>

                <div className="text-gray-600 mt-6 space-y-4 leading-relaxed max-w-lg">
                    <p>
                    The journey of matcha begins long before it reaches your cup.
                    </p>

                    <p>
                    Several weeks before harvest, the tea plants are carefully shade-grown, allowing the leaves to develop their vibrant green colour and rich, umami flavour.
                    </p>

                    <p>
                    Once harvested, the leaves are gently processed and slowly stone-ground using traditional granite mills, transforming them into the fine, vibrant powder known as matcha.
                    </p>
                </div>
                </div>

                <div className="relative w-95 h-95 mx-auto">
                    <Image
                        src="/about/matcha-whisk.jpg"
                        alt="Tea fields in Uji"
                        fill
                        className="rounded-full shadow-md object-cover"
                    />
                </div>
            </div>
        </section>

        <section className="bg-green-100 py-24">
            <div className="grid grid-cols-2 items-center max-w-5xl mx-auto">
                <div className="relative">
                    <OrbitImages
                        images={images}
                        shape="ellipse"
                        radiusX={600}
                        radiusY={80}
                        rotation={-8}
                        duration={30}
                        itemSize={150}
                        responsive={true}
                        radius={200}
                        direction="normal"
                        fill
                        showPath
                        paused={false}
                    />
                </div>

                <div className="font-sans ml-10">
                    <h2 className="text-5xl font-bold">
                        A Modern Matcha Ritual
                    </h2>

                    <div className="text-gray-600 mt-6 space-y-4 leading-relaxed max-w-lg">
                        <p>
                            While matcha has deep roots in Japanese tea ceremonies, its ritual can be enjoyed in many ways today.
                        </p>

                        <p>
                            Whether you prefer a traditional bowl of whisked matcha, a refreshing iced latte, or a creative matcha drink, the experience remains the same — a moment of calm energy and mindful enjoyment.
                        </p>

                        <p>
                            At UjiBrew, we want to make that experience accessible to everyone, from longtime matcha enthusiasts to those discovering it for the first time.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-20">
            <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
                <h1 className="font-bold text-3xl mb-2">Our Philosophy</h1>
                <p className="text-gray-600 mb-5">
                    Quality, authenticity, and simplicity guide everything we do.
                </p>

                <p className="text-gray-600">
                    We believe the best matcha should be crafted with care, sourced responsibly, and enjoyed as part of a balanced lifestyle. Every cup is a reflection of centuries of Japanese tea tradition and the farmers who continue to preserve it.                         When you drink UjiBrew matcha, you’re not just enjoying tea — you’re becoming part of a story that began long ago in the tea fields of Uji.
                </p>
            </div>
        </section>

        <section className="bg-green-100 py-24">
            <div className="max-w-4xl mx-auto text-center font-sans">
                <h2 className="text-4xl font-bold">
                    Start Your Matcha Ritual
                </h2>

                <p className="mt-4 text-gray-700">
                    Experience the smooth flavour, vibrant colour, and calm energy of authentic Japanese matcha.
                </p>

                <div className="flex items-center justify-center mt-7">
                    <Button className="px-8 py-6 text-lg font-semibold bg-green-500 hover:bg-green-600 transition duration-300">
                        Explore Now
                    </Button>
                </div>
            </div>
        </section>

        <section>
            <Footer />
        </section>

        <Scroll/>
    </div>
  )
}

export default Page
