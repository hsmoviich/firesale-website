'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function MainNav() {
  return (
    <nav className="flex items-center space-x-6">
      <Link href="/faq" className="text-white hover:text-[#ff6229]">
        FAQ
      </Link>
      <Link href="/about-us" className="text-white hover:text-[#ff6229]">
        ABOUT US
      </Link>
      <Link href="/sign-in" className="text-white hover:text-[#ff6229]">
        SIGN IN
      </Link>
      <Button 
        className="bg-[#ff6229] hover:bg-[#ff6229]/90 text-white"
        asChild
      >
        <Link href="/contact">
          Request an offer
        </Link>
      </Button>
    </nav>
  )
}

