"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { supabase } from "@/lib/supabase"

const Page = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: {
          full_name: fullName.trim(),
        },
      },
    })

    if (data.user) {
      await fetch("/api/profile/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: data.user.id,
          email: data.user.email,
          fullName: fullName.trim(),
        }),
      })
    }
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
              <h1 className="text-2xl font-semibold text-gray-900">Create your account</h1>
              <p className="mt-2 text-sm text-gray-500">
                Register to get started
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-md border px-4 py-3 outline-none transition focus:ring-2 focus:ring-green-400"
                />
              </div>

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
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md border px-4 py-3 outline-none transition focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full rounded-md border px-4 py-3 outline-none transition focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div className="flex items-start gap-2 text-sm text-gray-600">
                <input type="checkbox" className="mt-1 accent-green-500" />
                <span>
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-green-600 hover:text-green-700 hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-green-600 hover:text-green-700 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </div>

              <Button className="w-full py-5 bg-green-500 hover:bg-green-600 text-md">
                Create Account
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="font-medium text-green-600 hover:text-green-700 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}


export default Page