import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Utensils, Camera, Flower, Car, Music, Sparkles, Users, Shield, Lightbulb, Wifi } from "lucide-react"

const services = [
  {
    icon: Flower,
    title: "Elegant Stage & Decoration",
    description:
      "Stunning cave-style stage setup with premium decorations that create a royal and elegant ambiance for your special day.",
    features: [
      "Royal cave-style stage setup",
      "Premium floral decorations",
      "Custom lighting design",
      "Elegant backdrop arrangements",
    ],
  },
  {
    icon: Utensils,
    title: "Catering with Customized Menu",
    description:
      "Exquisite Pakistani cuisine with customizable menu options prepared by professional chefs to satisfy every palate.",
    features: ["Customized menu options", "Traditional Pakistani dishes", "Live cooking stations", "Dietary accommodations"],
  },
  {
    icon: Music,
    title: "Sound & Lighting System",
    description: "Modern sound and lighting system to create the perfect atmosphere and ensure crystal-clear audio.",
    features: ["Professional sound system", "Modern lighting setup", "Microphone systems", "DJ services"],
  },
  {
    icon: Sparkles,
    title: "Bridal Room & VIP Lounge",
    description: "Exclusive bridal suite and VIP lounge for the bride, groom, and special guests with luxury amenities.",
    features: ["Exclusive bridal suite", "VIP lounge access", "Luxury amenities", "Private preparation area"],
  },
  {
    icon: Car,
    title: "Valet Parking & Security",
    description: "Professional valet parking service and 24/7 security to ensure convenience and safety for all guests.",
    features: ["Valet parking service", "24/7 event security", "Spacious parking area", "Professional security staff"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            {
              "Our comprehensive services are designed to make your wedding day absolutely perfect, from elegant decorations to professional catering and security."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-serif text-foreground mb-4">{"Complete Wedding Solutions"}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {
                "From intimate ceremonies to grand celebrations for up to 1200 guests, we provide end-to-end wedding services that take care of every detail. Our experienced team works closely with you to bring your vision to life in our unique cave-style venue."
              }
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">5</div>
                <div className="text-sm text-muted-foreground">Core Services</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
