'use client'

import { useState } from 'react'
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { FaqAccordion } from "@/components/faq-accordion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { faqData } from "@/lib/faq-data"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const filteredFaqs = faqData.map((faq, index) => ({ ...faq, index })).filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

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

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm uppercase mb-4">FAQs</p>
          <h1 className="text-4xl font-bold mb-4">Ask us anything</h1>
          <p className="text-gray-400 mb-8">Have any questions? We're here to assist you.</p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search here"
                className="w-full pl-10 bg-white text-gray-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            {searchQuery && filteredFaqs.length > 0 && (
              <div className="mt-2 bg-[#252b42] rounded-lg p-2 absolute z-10 w-full max-w-md">
                {filteredFaqs.map((faq, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-2 hover:bg-[#1d2632] rounded"
                    onClick={() => {
                      const selectedFaq = filteredFaqs.find(faq => faq.question === faq.question);
                      if (selectedFaq) {
                        setOpenAccordion(`item-${selectedFaq.index}`);
                        setSearchQuery('');
                      }
                    }}
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <FaqAccordion faqs={faqData} value={openAccordion} onValueChange={setOpenAccordion} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#252b42]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-400 mb-8">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
          <Button 
            className="bg-[#ff6229] hover:bg-[#ff6229]/90 text-white"
            asChild
          >
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

