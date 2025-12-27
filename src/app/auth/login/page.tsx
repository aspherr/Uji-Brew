"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const Page = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-green-300 px-4 font-sans">
      <section className="bg-white rounded-xl w-full max-w-lg shadow-lg overflow-hidden">
        <div className="w-full">
          <div className="flex flex-col p-10">
            <Link href="/" className="flex items-center justify-center">
              <Image
                src="/global/logo.svg"
                width={140}
                height={140}
                alt="Uji Brew Logo"
              />
            </Link>

            <Separator className="my-5" />

            <div className="mb-6 text-center">
              <h1 className="text-2xl font-semibold text-gray-900">Welcome back</h1>
              <p className="mt-2 text-sm text-gray-500">
                Sign in to your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="jane.doe@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border px-4 py-3 outline-none transition focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md border px-4 py-3 outline-none transition focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" className="accent-green-500" />
                  Remember me
                </label>

                <Link
                  href="/forgot-password"
                  className="text-green-600 hover:text-green-700 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <Button className="w-full py-5 bg-green-500 hover:bg-green-600 text-md">
                Sign In
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-green-600 hover:text-green-700 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page