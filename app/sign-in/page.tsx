import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UserAuthForm } from "@/components/user-auth-form"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
}

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-[#1d2632] text-white">
      {/* Header */}
      <header className="w-full z-50 bg-[#1d2632]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Header%20Links%20Left-b27Z1NZkLilouNW81pIqCewfTVON5r.png"
              alt="Fire Sale Properties"
              width={150}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <MainNav />
        </div>
      </header>

      <div className="container flex h-[calc(100vh-80px)] w-screen flex-col items-center justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-gray-400">
              Enter your email to sign in to your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-gray-400">
            <Link
              href="/sign-up"
              className="hover:text-[#ff6229] underline underline-offset-4"
            >
              Don&apos;t have an account? Sign Up
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

