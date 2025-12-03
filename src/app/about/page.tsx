import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="w-full min-h-screen font-sans">
        <section>
            <div className="mx-auto max-w-8xl -my-7 mb-0.5">
                <Navbar/>
            </div>
        </section>

        <section className="relative w-full h-120">
            <Image
                src="/banner.jpg"
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
                <h1 className="font-bold text-2xl mb-5">A Tradition Worth Sharing</h1>
                <p>
                    UjiBrew was founded with a simple purpose: to share the authentic taste and timeless ritual of Japanese matcha with the world.
                    What began as a deep appreciation for traditional tea culture quickly became a mission to bring the same quality, craftsmanship, and calm experience of matcha to everyday life. At UjiBrew, we believe matcha is more than just a drink — it’s a moment to slow down, focus, and reconnect.
                </p>
            </div>
        </section>

    </div>
  )
}

export default Page
