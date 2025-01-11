import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ProcessStep } from "@/components/process-step"
import { FaqAccordion } from "@/components/faq-accordion"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1d2632] text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-transparent">
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

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v0%20homepage.jpg-GFEsHrX8VPKVHlbWOOfxLTuQ5rNWTD.jpeg"
            alt="Fire damaged house illustration"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1d2632]" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl pt-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              ESCAPE THE RESTORATION NIGHTMARE
              <br />
              <span className="text-4xl md:text-5xl">
                SELL YOUR FIRE-DAMAGED HOME AS-IS.
              </span>
            </h1>
            <Button 
              className="bg-[#ff6229] hover:bg-[#ff6229]/90 text-white mt-8"
              size="lg"
              asChild
            >
              <Link href="/contact">
                Request an offer
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-[#1d2632]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Process Overview</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <ProcessStep
              number="01"
              title="Evaluation"
              description="We conduct a thorough on-site evaluation of your property to see if it meets our criteria."
              icon="home"
            />
            <ProcessStep
              number="02"
              title="Offer"
              description="You receive a no-obligation, as-is offer for your property."
              icon="fire"
            />
            <ProcessStep
              number="03"
              title="Closing"
              description="Upon closing, you retain the full proceeds from the sale, settlement, or both."
              icon="handshake"
            />
          </div>
          <div className="text-center mt-12">
            <Button 
              className="bg-[#ff6229] hover:bg-[#ff6229]/90 text-white"
              size="lg"
              asChild
            >
              <Link href="/contact">
                Get your offer now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#1d2632]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#1d2632] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">
            Sell your
            <br />
            fire-damaged home
            <br />
            as-is!
          </h2>
          <Button 
            className="bg-[#ff6229] hover:bg-[#ff6229]/90 text-white mt-8"
            size="lg"
            asChild
          >
            <Link href="/contact">
              Get your offer now
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

