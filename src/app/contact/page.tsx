"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const Page = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = () => {}

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-green-300 font-sans">

      <section className="flex bg-white rounded-xl w-225 h-150 overflow-hidden shadow-lg">

        <div className="grid grid-cols-2 w-full">
          <div className="flex flex-col p-10">

            <Link href="/" className="flex items-center justify-center">
              <Image src="/global/logo.svg" width={140} height={140} alt="Uji Brew Logo" />
            </Link>

            <Separator className="my-5" />

            <form onSubmit={handleSubmit} className="space-y-5 mt-2">

              <input
                type="text"
                placeholder="Jane Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-green-400"
              />

              <input
                type="email"
                placeholder="jane.doe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-green-400"
              />

              <textarea
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 border rounded-md h-56 resize-none focus:ring-2 focus:ring-green-400"
              />

              <Button className="w-full py-5 bg-green-500 hover:bg-green-600 text-md">
                Send Message
              </Button>

            </form>
          </div>

          <div className="relative">
            <Image
              src="/about/fields.jpg"
              alt="matcha fields"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 flex items-center justify-center text-white text-center px-6">
              <div>
                <h2 className="text-3xl font-bold">Get in Touch</h2>
                <p className="mt-3 text-sm">
                  We’d love to hear from you. Whether it’s a question or feedback.
                </p>
              </div>
            </div>
          </div>

        </div>

      </section>
    </div>
  )
}

export default Page