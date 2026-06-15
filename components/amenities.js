"use client"

import { useEffect, useRef, useState } from "react"

const amenities = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: "Prime Location",
        description: "Easy Access from All Over Peshawar. Centrally located on the prestigious Warsak Road.",
        emoji: "📍",
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
        ),
        title: "Valet Parking",
        description: "Spacious Parking Facility on Warsak Road with professional valet service for all guests.",
        emoji: "🚗",
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Power Backup",
        description: "Uninterrupted Generator Supply ensures your event runs seamlessly, rain or shine.",
        emoji: "⚡",
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
        ),
        title: "Premium Catering",
        description: "Executive Chefs for Both Venues serving exquisite Pakistani, Continental & Chinese cuisines.",
        emoji: "🍽️",
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: "Photo Studio",
        description: "Dedicated photography zones with professional lighting setups in both venues.",
        emoji: "📸",
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
        ),
        title: "Sound & Lighting",
        description: "State-of-the-art sound systems and customizable LED lighting for the perfect atmosphere.",
        emoji: "🎵",
    },
]

export function Amenities() {
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
            id="amenities"
            className="section-padding bg-white relative overflow-hidden"
        >
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                        <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">Shared Excellence</span>
                        <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
                    </div>
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-4">
                        Features & <span className="gold-gradient-text">Amenities</span>
                    </h2>
                    <p className="text-[#6B6B6B] text-lg max-w-2xl mx-auto leading-relaxed">
                        Both venues on Warsak Road share world-class facilities designed to make your celebration flawless.
                    </p>
                </div>

                {/* Amenities Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {amenities.map((amenity, i) => (
                        <div
                            key={amenity.title}
                            id={`amenity-${amenity.title.toLowerCase().replace(/\s+/g, "-")}`}
                            className={`group relative bg-white rounded-xl p-8 border border-[#E8E0D0] hover:border-[#D4AF37] transition-all duration-500 hover:shadow-xl hover:shadow-[#D4AF37]/10 hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                }`}
                            style={{ transitionDelay: `${200 + i * 100}ms` }}
                        >
                            {/* Gold Corner Accent */}
                            <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                                <div className="absolute top-0 right-0 w-0 h-0 border-t-[48px] border-t-[#D4AF37]/10 border-l-[48px] border-l-transparent group-hover:border-t-[#D4AF37]/30 transition-colors duration-500"></div>
                            </div>

                            {/* Icon */}
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:bg-gradient-to-br group-hover:from-[#D4AF37] group-hover:to-[#B8962E] group-hover:text-white transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[#D4AF37]/25">
                                {amenity.icon}
                            </div>

                            {/* Content */}
                            <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                                {amenity.title}
                            </h3>
                            <p className="text-[#6B6B6B] leading-relaxed text-sm">
                                {amenity.description}
                            </p>

                            {/* Bottom Accent Line */}
                            <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
