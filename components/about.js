"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true)
            },
            { threshold: 0.15 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="section-padding bg-white relative overflow-hidden"
        >
            {/* Decorative Elements */}
            <div className="absolute top-20 right-0 w-72 h-72 bg-[#D4AF37]/5 rounded-full translate-x-1/2"></div>
            <div className="absolute bottom-20 left-0 w-48 h-48 bg-[#0F1B4C]/5 rounded-full -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left - Image Collage */}
                    <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
                        <div className="relative">
                            {/* Main Image */}
                            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/20">
                                <img
                                    src="/wedding-stage-decoration-with-flowers-and-lighting.jpg"
                                    alt="Premium stage decoration at Grandeur & Marbella Wedding Halls"
                                    className="w-full h-80 sm:h-96 object-cover"
                                />
                            </div>
                            {/* Floating Small Image */}
                            <div className="absolute -bottom-8 -right-4 sm:-right-8 w-40 sm:w-52 rounded-xl overflow-hidden shadow-xl border-2 border-[#D4AF37] animate-float">
                                <img
                                    src="/wedding-entrance-lobby-with-grand-decorations.jpg"
                                    alt="Grand entrance lobby decorations"
                                    className="w-full h-32 sm:h-40 object-cover"
                                />
                            </div>
                            {/* Experience Badge */}
                            <div className="absolute -top-4 -left-4 sm:-left-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full gold-gradient-bg flex flex-col items-center justify-center shadow-xl text-white">
                                <span className="text-2xl sm:text-3xl font-bold font-serif">5+</span>
                                <span className="text-[10px] sm:text-xs uppercase tracking-wider">Years</span>
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">Our Legacy</span>
                        </div>
                        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                            A Heritage of <span className="gold-gradient-text">Elegance</span>
                        </h2>
                        <p className="text-[#6B6B6B] text-base leading-relaxed mb-6">
                            Nestled on the prestigious Warsak Road in Peshawar, <strong>Grandeur Lounge</strong> and
                            <strong> Marbella Cave</strong> stand as twin symbols of luxury hospitality. Together, they
                            offer something truly unique — two distinct worlds under one brand.
                        </p>
                        <p className="text-[#6B6B6B] text-base leading-relaxed mb-8">
                            Whether you envision a <em>classic royal celebration</em> in our spacious Grandeur Lounge, or an
                            <em> intimate artistic affair</em> in the mesmerizing cave ambiance of Marbella —
                            we bring your dream to life with impeccable service, world-class catering, and décor
                            that leaves a lasting impression.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {[
                                { number: "2000+", label: "Events Hosted" },
                                { number: "1200", label: "Max Capacity" },
                                { number: "100%", label: "Satisfaction" },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center p-4 bg-[#FDFBF7] rounded-xl border border-[#E8E0D0]">
                                    <p className="font-serif text-2xl sm:text-3xl font-bold gold-gradient-text">{stat.number}</p>
                                    <p className="text-[#6B6B6B] text-xs sm:text-sm mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <a href="#venues" className="btn-gold inline-flex items-center gap-3 rounded-full text-sm uppercase tracking-widest">
                            Discover Our Venues
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
