"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the guest capacity of Marbella Cave Wedding Hall?",
    answer: "The hall can comfortably host up to ~1200 guests with spacious seating arrangements and comfortable ambiance."
  },
  {
    question: "How much advance payment is required for booking?",
    answer: "A minimum of 30% advance payment is required to confirm the booking. The remaining amount can be paid in installments as per the agreed schedule."
  },
  {
    question: "Do you provide catering services?",
    answer: "Yes, we provide customized catering packages with traditional Pakistani cuisine and international options. Our professional chefs prepare fresh, delicious meals tailored to your preferences."
  },
  {
    question: "Is parking available?",
    answer: "Yes, we offer valet parking with a spacious parking area. Our professional valet service ensures convenience and security for all your guests."
  },
  {
    question: "Is decoration included?",
    answer: "Decoration packages are available in different categories (Basic, Standard, Premium). We offer elegant cave-style decorations, floral arrangements, and custom themes to match your vision."
  },
  {
    question: "What makes Marbella Cave unique?",
    answer: "Our unique cave-style interior design, modern lighting system, and premium location near Kabul River create an intimate yet grand atmosphere that sets us apart from traditional wedding halls."
  },
  {
    question: "Do you provide bridal room facilities?",
    answer: "Yes, we have an exclusive bridal suite and VIP lounge with luxury amenities for the bride, groom, and special guests. The bridal room includes private preparation areas and comfortable seating."
  },
  {
    question: "What are your business hours?",
    answer: "We are open Monday to Sunday from 9:00 AM to 11:00 PM. For booked events, we provide 24/7 support and coordination services."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            {"Find answers to common questions about Marbella Cave Wedding Hall and our services."}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-serif text-foreground mb-4">{"Still Have Questions?"}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {
                "Our team is here to help! Contact us directly for personalized assistance and detailed information about our services and packages."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open("tel:+923339190724")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Call Now
              </button>
              <button
                onClick={() => window.open("https://wa.me/923339190724")}
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors bg-transparent"
              >
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
