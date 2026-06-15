"use client"

import { useEffect, useRef, useState } from "react"

export function VenueSelector() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.15 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="venues"
            className="section-padding bg-[#FDFBF7] relative overflow-hidden"
        >
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                        <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">Experience the Difference</span>
                        <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
                    </div>
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-4">
                        Choose Your <span className="gold-gradient-text">Ambiance</span>
                    </h2>
                    <p className="text-[#6B6B6B] text-lg max-w-2xl mx-auto leading-relaxed">
                        Two distinct experiences crafted for your most unforgettable moments.
                        Select the venue that speaks to your vision.
                    </p>
                </div>

                {/* Venue Cards */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Marbella Cave Card */}
                    <div
                        id="marbella"
                        className={`group relative rounded-2xl overflow-hidden transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                            }`}
                    >
                        <div className="marbella-card rounded-2xl p-1">
                            <div className="rounded-xl overflow-hidden">
                                {/* Image */}
                                <div className="relative h-64 sm:h-80 overflow-hidden">
                                    <img
                                        src="/luxurious-wedding-hall-interior-with-golden-chande.jpg"
                                        alt="Marbella Cave Interior - Artistic Cave-Style Wedding Venue Peshawar"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B4C] via-[#0F1B4C]/40 to-transparent"></div>
                                    {/* Capacity Badge */}
                                    <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#0F1B4C] text-xs font-bold px-4 py-2 rounded-full tracking-wider uppercase shadow-lg">
                                        300 – 500 Guests
                                    </div>
                                    {/* Venue Name on Image */}
                                    <div className="absolute bottom-4 left-6">
                                        <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                                            Marbella <span className="gold-gradient-text">Cave</span>
                                        </h3>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="bg-gradient-to-b from-[#0F1B4C] to-[#0A1233] p-6 sm:p-8">
                                    <p className="text-white/70 text-sm tracking-[0.2em] uppercase mb-3">The Artistic Experience</p>
                                    <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6">
                                        For Thematic Weddings & Corporate Dinners. An intimate, cave-styled masterpiece
                                        with dramatic lighting, stone textures, and an ambiance that whispers luxury.
                                    </p>

                                    {/* Features Mini List */}
                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        {[
                                            "Cave-Style Decor",
                                            "Mood Lighting",
                                            "Intimate Setting",
                                            "Photo Corners",
                                        ].map((feat) => (
                                            <div key={feat} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                                                <span className="text-white/70 text-sm">{feat}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href="#booking"
                                        className="btn-gold w-full text-center block rounded-lg text-sm uppercase tracking-widest"
                                    >
                                        Book Marbella Cave
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 to-[#0F1B4C]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    </div>

                    {/* Grandeur Lounge Card */}
                    <div
                        id="grandeur"
                        className={`group relative rounded-2xl overflow-hidden transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                            }`}
                    >
                        <div className="grandeur-card rounded-2xl p-1">
                            <div className="rounded-xl overflow-hidden">
                                {/* Image */}
                                <div className="relative h-64 sm:h-80 overflow-hidden">
                                    <img
                                        src="/elegant-wedding-hall-exterior-with-beautiful-archi.jpg"
                                        alt="Grandeur Lounge Exterior - Classic Royal Wedding Venue Peshawar"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#4B3621] via-[#4B3621]/40 to-transparent"></div>
                                    {/* Capacity Badge */}
                                    <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#4B3621] text-xs font-bold px-4 py-2 rounded-full tracking-wider uppercase shadow-lg">
                                        800 – 1200 Guests
                                    </div>
                                    {/* Venue Name on Image */}
                                    <div className="absolute bottom-4 left-6">
                                        <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                                            Grandeur <span className="gold-gradient-text">Lounge</span>
                                        </h3>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="bg-gradient-to-b from-[#4B3621] to-[#3A2A19] p-6 sm:p-8">
                                    <p className="text-white/70 text-sm tracking-[0.2em] uppercase mb-3">The Royal Experience</p>
                                    <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6">
                                        For Royal Barat & Walima Events. A grand, spacious hall with crystal chandeliers,
                                        classical architecture, and an atmosphere befitting royalty.
                                    </p>

                                    {/* Features Mini List */}
                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        {[
                                            "Crystal Chandeliers",
                                            "Grand Stage",
                                            "Spacious Layout",
                                            "Royal Décor",
                                        ].map((feat) => (
                                            <div key={feat} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                                                <span className="text-white/70 text-sm">{feat}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href="#booking"
                                        className="btn-gold w-full text-center block rounded-lg text-sm uppercase tracking-widest"
                                    >
                                        Book Grandeur Lounge
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 to-[#4B3621]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
