import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation'

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/components/user-auth-form"

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a new account",
}

export default function SignUpPage() {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <button
        onClick={handleBack}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back
        </>
      </button>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link
            href="/terms"
            className="hover:text-brand underline underline-offset-4"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="hover:text-brand underline underline-offset-4"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

