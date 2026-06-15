"use client"

import { useEffect, useState } from "react"

export function Hero() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Split */}
            <div className="absolute inset-0 flex flex-col md:flex-row">
                {/* Marbella Cave Side */}
                <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden group">
                    <img
                        src="/luxurious-wedding-hall-interior-with-golden-chande.jpg"
                        alt="Marbella Cave Wedding Hall Interior - Artistic Cave-Style Venue"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 marbella-overlay"></div>
                    {/* Decorative Gold Corner */}
                    <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37] opacity-50"></div>
                </div>

                {/* Grandeur Lounge Side */}
                <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden group">
                    <img
                        src="/elegant-wedding-hall-exterior-with-beautiful-archi.jpg"
                        alt="Grandeur Lounge Wedding Hall Exterior - Classic Royal Venue"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 grandeur-overlay"></div>
                    {/* Decorative Gold Corner */}
                    <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#D4AF37] opacity-50"></div>
                </div>

                {/* Center Gold Divider Line */}
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent z-10"></div>
                <div className="md:hidden absolute left-0 right-0 top-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent z-10"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 md:pt-0">
                {/* Decorative Top */}
                <div
                    className={`flex items-center justify-center gap-4 mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                    <div className="w-3 h-3 rotate-45 border border-[#D4AF37]"></div>
                    <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
                </div>

                {/* Headline */}
                <h1
                    className={`font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    The <span className="gold-gradient-text">Crown Jewels</span>
                    <br />
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">of Warsak Road</span>
                </h1>

                {/* Sub-headline */}
                <p
                    className={`text-lg sm:text-xl md:text-2xl text-white/80 font-light tracking-wider mb-4 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    Two Iconic Venues. One Premium Address in Peshawar.
                </p>

                {/* Tagline */}
                <p
                    className={`text-sm sm:text-base text-[#E8D48B] tracking-[0.25em] uppercase mb-12 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    Grandeur Lounge &bull; Marbella Cave
                </p>

                {/* CTA Buttons */}
                <div
                    className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <a
                        href="#marbella"
                        id="explore-cave-btn"
                        className="btn-marbella text-base sm:text-lg tracking-wider flex items-center gap-3 !px-8 !py-4 rounded-full w-full sm:w-auto justify-center group"
                    >
                        <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        Explore The Cave
                    </a>
                    <a
                        href="#grandeur"
                        id="explore-grandeur-btn"
                        className="btn-grandeur text-base sm:text-lg tracking-wider flex items-center gap-3 !px-8 !py-4 rounded-full w-full sm:w-auto justify-center group"
                    >
                        Explore The Grandeur
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>

                {/* Decorative Bottom */}
                <div
                    className={`flex items-center justify-center gap-4 mt-12 transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#D4AF37]/50"></div>
                    <span className="text-[#D4AF37]/60 text-xs tracking-[0.3em] uppercase">Since 2020</span>
                    <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#D4AF37]/50"></div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-float">
                <a href="#venues" className="flex flex-col items-center gap-2 text-white/60 hover:text-[#D4AF37] transition-colors">
                    <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </a>
            </div>
        </section>
    )
}
