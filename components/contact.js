"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, MessageSquare, Navigation } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            {"Visit us, call us, or reach out online. We're here to help make your wedding dreams come true."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-foreground">{"Contact Information"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Address</div>
                    <div className="text-muted-foreground leading-relaxed">
                      Marbella Cave Wedding Hall
                      <br />
                      Canal Road, Sher Ali Town
                      <br />
                      Peshawar (Near Kabul River)
                      <br />
                      Khyber Pakhtunkhwa, Pakistan
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Phone Numbers</div>
                    <div className="text-muted-foreground space-y-1">
                      <div>+92 333 9190724</div>
                      <div>+92 332 9103990</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Email Addresses</div>
                    <div className="text-muted-foreground space-y-1">
                      <div>muhammadfarazmarbella@gmail.com</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">WhatsApp</div>
                    <div className="text-muted-foreground">
                      +92 333 9190724
                      <div className="text-sm text-primary">Available 24/7 for instant support</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Business Hours</div>
                    <div className="text-muted-foreground space-y-1">
                      <div>Monday - Sunday: 9:00 AM - 11:00 PM</div>
                      <div className="text-sm text-primary">24/7 support for booked events</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-primary/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">{"Quick Actions"}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => window.open("tel:+923339190724")}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    onClick={() => window.open("https://wa.me/923339190724")}
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                    onClick={() => window.open("mailto:muhammadfarazmarbella@gmail.com")}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email Us
                  </Button>
                  <Button
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                    onClick={() => window.open("https://maps.google.com")}
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map and Visit Information */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-foreground">{"Visit Our Venue"}</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Google Maps Placeholder */}
                <div className="w-full h-64 bg-muted rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2 text-primary" />
                    <div className="font-medium">Interactive Map</div>
                    <div className="text-sm">Marbella Cave Wedding Hall Location</div>
                    <div className="text-xs mt-2">Canal Road, Sher Ali Town, Peshawar</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">{"How to Reach Us"}</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {"Located on Canal Road, Sher Ali Town, easily accessible from all parts of Peshawar"}
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {"Near Kabul River, providing a beautiful and convenient location"}
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {"Spacious parking area with valet service available"}
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {"Public transport and taxi services readily available"}
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-foreground">{"Schedule a Visit"}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {
                    "Experience the Marbella Cave difference in person. Schedule a private tour of our unique cave-style facilities and meet with our wedding planning team to discuss your special day."
                  }
                </p>

                <div className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">{"What to Expect During Your Visit:"}</h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Complete venue tour with our event coordinator</li>
                      <li>• Package consultation and customization options</li>
                      <li>• Sample menu tasting (by appointment)</li>
                      <li>• Photography of the venue for your planning</li>
                      <li>• Detailed pricing and availability discussion</li>
                    </ul>
                  </div>

                  <Button
                    onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Schedule Your Visit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
