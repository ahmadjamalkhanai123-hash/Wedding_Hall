import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { VenueSelector } from "@/components/venue-selector"
import { Amenities } from "@/components/amenities"
import { Gallery } from "@/components/gallery"
import { BookingForm } from "@/components/booking-form"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <About />
            <VenueSelector />
            <Amenities />
            <Gallery />
            <BookingForm />
            <Testimonials />
            <Footer />
            <WhatsAppButton />
        </main>
    )
}
