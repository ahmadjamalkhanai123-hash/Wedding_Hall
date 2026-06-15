"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Crown, Gem } from "lucide-react"

const packages = [
  {
    name: "Basic Package",
    price: "PKR 206,500",
    icon: Star,
    popular: false,
    description: "Simple setup with essential services for intimate celebrations",
    features: [
      "Hall rental for 6 hours",
      "Simple decoration setup",
      "Basic sound system",
      "Seating for up to 300 guests",
      "Basic lighting",
      "Valet parking",
      "Event coordination",
      "Catering with basic menu",
    ],
    includes: "Includes: Simple setup + Catering",
  },
  {
    name: "Standard Package",
    price: "PKR 350,000",
    icon: Crown,
    popular: true,
    description: "Most popular choice with decoration, sound system, and catering",
    features: [
      "Hall rental for 8 hours",
      "Elegant decoration",
      "Professional sound system",
      "Seating for up to 600 guests",
      "Stage decoration",
      "Valet parking & security",
      "Dedicated event coordinator",
      "Catering with customized menu",
      "Bridal room access",
      "Modern lighting system",
    ],
    includes: "Includes: Decoration + Sound System + Catering",
  },
  {
    name: "Premium Package",
    price: "PKR 500,000",
    icon: Gem,
    popular: false,
    description: "Luxury décor, lighting, full menu, and photography option",
    features: [
      "Hall rental for 12 hours",
      "Luxury cave-style decoration",
      "Premium sound & lighting system",
      "Seating for up to 1200 guests",
      "Grand stage with premium backdrop",
      "Full valet & 24/7 security",
      "Personal wedding coordinator",
      "Full catering with premium menu",
      "Luxury bridal room & VIP lounge",
      "Photography option included",
      "Special lighting effects",
      "Welcome drinks & appetizers",
    ],
    includes: "Includes: Luxury décor + Lighting + Full Menu + Photography",
  },
]

export function Packages() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
            Wedding <span className="text-primary">Packages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            {"Choose from our carefully crafted wedding packages designed to suit every budget and celebration style."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon
            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  pkg.popular ? "border-primary shadow-lg scale-105" : "border-border hover:border-primary/50"
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">Most Popular</Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-4 rounded-full w-fit ${pkg.popular ? "bg-primary/20" : "bg-muted"}`}>
                    <IconComponent className={`h-8 w-8 ${pkg.popular ? "text-primary" : "text-muted-foreground"}`} />
                  </div>

                  <CardTitle className="text-2xl font-bold font-serif text-foreground mb-2">{pkg.name}</CardTitle>

                  <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>

                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="mb-6">
                    <p className="text-sm font-medium text-primary mb-4">{pkg.includes}</p>

                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={scrollToBooking}
                    className={`w-full ${
                      pkg.popular
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-accent hover:bg-accent/90 text-accent-foreground"
                    }`}
                  >
                    Choose {pkg.name}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-serif text-foreground mb-4">{"Custom Package Available"}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {
                "Need something different? We offer custom packages tailored as per your requirements. Our team will work with you to create the perfect celebration that reflects your unique style and preferences in our cave-style venue."
              }
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Customizable</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Planning Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">0%</div>
                <div className="text-sm text-muted-foreground">Hidden Charges</div>
              </div>
            </div>
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
              className="mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
