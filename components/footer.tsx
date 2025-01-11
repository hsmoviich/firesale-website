import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#1d2632] py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-8">
          <Link href="/about" className="text-gray-400 hover:text-white">About</Link>
          <Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link>
          <Link href="/consultants" className="text-gray-400 hover:text-white">Consultants</Link>
          <Link href="/login" className="text-gray-400 hover:text-white">Login</Link>
          <Link href="/team" className="text-gray-400 hover:text-white">Team</Link>
          <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <Link href="#" className="text-gray-400 hover:text-white">
            <Instagram className="w-6 h-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Facebook className="w-6 h-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Twitter className="w-6 h-6" />
          </Link>
        </div>

        <div className="text-center">
          <div className="relative h-8 w-[120px] mx-auto mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Header%20Links%20Left-b27Z1NZkLilouNW81pIqCewfTVON5r.png"
              alt="Fire Sale Properties"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex justify-center space-x-4 text-sm text-gray-400 mb-4">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Use</Link>
            <Link href="/sales-refunds" className="hover:text-white">Sales and Refunds</Link>
            <Link href="/legal" className="hover:text-white">Legal</Link>
          </div>
          <p className="text-sm text-gray-400">
            All Rights Reserved © Fire-Sale Properties LLC D3456789
          </p>
        </div>
      </div>
    </footer>
  )
}

