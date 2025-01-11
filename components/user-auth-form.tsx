"use client"

import * as React from "react"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

export function UserAuthForm({ mode = 'signin' }: { mode?: 'signin' | 'signup' }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    try {
      const response = await fetch(`/api/auth/${mode}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        const data = await response.json()
        localStorage.setItem('token', data.token)
        router.push('/dashboard')
      } else {
        throw new Error(`${mode === 'signup' ? 'Registration' : 'Sign-in'} failed`)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="name@example.com"
                  disabled={isLoading}
                  className="bg-[#252b42] border-gray-700 text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  disabled={isLoading}
                  className="bg-[#252b42] border-gray-700 text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-[#ff6229] hover:bg-[#ff6229]/90"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : mode === 'signup' ? "Sign Up" : "Sign In"}
        </Button>
      </form>
    </Form>
  )
}

