'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from "@/lib/faq-data"

interface FaqAccordionProps {
  faqs?: typeof faqData
  value?: string | null
  onValueChange?: (value: string | null) => void
}

export function FaqAccordion({ faqs = faqData, value, onValueChange }: FaqAccordionProps) {
  return (
    <Accordion 
      type="single" 
      collapsible 
      className="space-y-4"
      value={value || undefined}
      onValueChange={onValueChange}
    >
      {faqs.map((faq, index) => (
        <AccordionItem 
          key={index} 
          value={`item-${index}`}
          className="bg-[#252b42] rounded-lg overflow-hidden border-none"
        >
          <AccordionTrigger className="px-6 py-4 hover:bg-[#1d2632]/50 text-left">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 text-gray-400">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

