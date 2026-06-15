"use client"

import { useEffect, useRef, useState } from "react"

const testimonials = [
    {
        name: "Ahmed & Ayesha Khan",
        event: "Barat at Grandeur Lounge",
        text: "The Grandeur Lounge exceeded every expectation. The grand chandeliers, the royal stage — everything was absolutely perfect. Our guests are still talking about it!",
        rating: 5,
        venue: "grandeur",
    },
    {
        name: "Bilal & Sana Malik",
        event: "Walima at Marbella Cave",
        text: "Marbella Cave's unique cave-style ambiance made our Walima unforgettable. The lighting was magical and the food was outstanding. Best wedding hall on Warsak Road!",
        rating: 5,
        venue: "marbella",
    },
    {
        name: "Usman & Fatima Shah",
        event: "Engagement at Marbella Cave",
        text: "We booked Marbella Cave for our engagement and it was dreamy! The intimate setting with those dramatic cave lights created the most romantic atmosphere. Highly recommended!",
        rating: 5,
        venue: "marbella",
    },
    {
        name: "Raheel & Nida Afridi",
        event: "Barat at Grandeur Lounge",
        text: "With 1000+ guests, we needed a spacious venue. Grandeur Lounge delivered a flawless experience — spacious, elegant, and their catering team is simply the best in Peshawar.",
        rating: 5,
        venue: "grandeur",
    },
    {
        name: "Hamza & Maham Yousafzai",
        event: "Mehndi at Marbella Cave",
        text: "The artistic vibe of Marbella Cave was perfect for our colorful Mehndi. The staff went above and beyond. The best Shadi Hall in Peshawar without a doubt!",
        rating: 5,
        venue: "marbella",
    },
    {
        name: "Saad & Hira Durrani",
        event: "Walima at Grandeur Lounge",
        text: "Everything from the décor to the parking facility was premium class. Our families loved every moment. The Grandeur Lounge truly lives up to its name!",
        rating: 5,
        venue: "grandeur",
    },
]

export function Testimonials() {
    const [isVisible, setIsVisible] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true)
            },
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const renderStars = (count) => (
        <div className="flex gap-1">
            {Array.from({ length: count }).map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    )

    return (
        <section
            ref={sectionRef}
            id="testimonials"
            className="section-padding bg-gradient-to-b from-[#4B3621] to-[#3A2A19] relative overflow-hidden"
        >
            {/* Decorative */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            <div className="absolute top-1/2 left-0 w-40 h-40 bg-[#D4AF37]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-56 h-56 bg-[#D4AF37]/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                        <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">Love Stories</span>
                        <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
                    </div>
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                        What <span className="gold-gradient-text">Couples</span> Say
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Hear from the families who celebrated their most precious moments with us.
                    </p>
                </div>

                {/* Featured Testimonial */}
                <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-[#D4AF37]/20">
                            {/* Quote Icon */}
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg">
                                <svg className="w-5 h-5 text-[#4B3621]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                                </svg>
                            </div>

                            {renderStars(testimonials[currentIndex].rating)}

                            <p className="text-white/90 text-lg sm:text-xl leading-relaxed my-6 italic">
                                &ldquo;{testimonials[currentIndex].text}&rdquo;
                            </p>

                            <div className="flex items-center justify-center gap-3">
                                <div className="w-12 h-12 rounded-full gold-gradient-bg flex items-center justify-center text-[#1A1A1A] font-bold text-lg">
                                    {testimonials[currentIndex].name.charAt(0)}
                                </div>
                                <div className="text-left">
                                    <p className="text-white font-semibold">{testimonials[currentIndex].name}</p>
                                    <p className="text-[#D4AF37] text-sm">{testimonials[currentIndex].event}</p>
                                </div>
                            </div>
                        </div>

                        {/* Dots Navigation */}
                        <div className="flex items-center justify-center gap-2 mt-8">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentIndex
                                        ? "bg-[#D4AF37] w-8"
                                        : "bg-white/30 hover:bg-white/50"
                                        }`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Mini Cards Row */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {testimonials.slice(0, 3).map((t, i) => (
                            <div
                                key={t.name}
                                className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                    }`}
                                style={{ transitionDelay: `${500 + i * 150}ms` }}
                            >
                                {renderStars(t.rating)}
                                <p className="text-white/70 text-sm mt-3 mb-4 line-clamp-3">&ldquo;{t.text}&rdquo;</p>
                                <div className="flex items-center gap-2">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${t.venue === "marbella" ? "bg-[#0F1B4C] text-[#D4AF37]" : "bg-[#6B5038] text-[#D4AF37]"
                                        }`}>
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-white text-xs font-medium">{t.name}</p>
                                        <p className="text-[#D4AF37]/70 text-xs">{t.event}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
