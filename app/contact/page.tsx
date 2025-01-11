import { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Fire Sale Properties",
}

export default function ContactPage() {
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

      {/* Main Content */}
      <main className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-white">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4 text-white">
              Have questions or need assistance? We're here to help. Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-4 text-white">
              <div>
                <h2 className="text-xl font-semibold mb-2">Address</h2>
                <p>123 Property Lane</p>
                <p>Real Estate City, RE 12345</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Phone</h2>
                <p>(555) 123-4567</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Email</h2>
                <p>info@firesaleproperties.com</p>
              </div>
            </div>
          </div>
          <div className="bg-[#252b42] p-6 rounded-lg">
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

