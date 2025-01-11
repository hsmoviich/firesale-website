'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 bg-[#252b42] text-white border-gray-600 focus:border-[#ff6229] focus:ring-[#ff6229]"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 bg-[#252b42] text-white border-gray-600 focus:border-[#ff6229] focus:ring-[#ff6229]"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="mt-1 bg-[#252b42] text-white border-gray-600 focus:border-[#ff6229] focus:ring-[#ff6229]"
          rows={4}
        />
      </div>
      <Button type="submit" className="w-full bg-[#ff6229] hover:bg-[#ff6229]/90 text-white">
        Send Message
      </Button>
    </form>
  )
}

