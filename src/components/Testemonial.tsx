"use client"

import { useState } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

type Review = {
  text: string
  name: string
}

type TestemonialProps = {   
    reviews: Review[]
}

const Testemonial = ({reviews}: TestemonialProps) => {
    const [index, setIndex] = useState(0)

    const next = () => {
        setIndex((index + 1) % reviews.length)
    }

    const prev = () => {
        setIndex((index - 1 + reviews.length) % reviews.length)
    }

    return (
        <div className="flex flex-col items-center justify-center font-sans mt-10">
            <div className="flex items-center gap-20 mt-6">

                <button onClick={prev} className="flex items-center justify-center p-4 rounded-full bg-green-200 hover:bg-green-400 transition duration-300">
                    <ChevronLeft />
                </button>

                <div className="text-center max-w-lg">
                    <Quote className="text-green-500 scale-x-[-1] mb-2 mx-auto" />

                    <p className="text-gray-700 text-xl">
                        {reviews[index].text}
                    </p>

                    <p className="mt-3 font-semibold font-lg">
                        — {reviews[index].name}
                    </p>
                </div>

                <button onClick={next} className="flex items-center justify-center p-4 rounded-full bg-green-200 hover:bg-green-400 transition duration-300">
                    <ChevronRight />
                </button>
            </div>

            <div className="flex justify-center gap-2 mt-10">
                {reviews.map((_, i) => (
                    <div
                    key={i}
                    className={`h-2 w-2 rounded-full ${
                        i === index ? "bg-green-400" : "bg-gray-300"
                    }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Testemonial
