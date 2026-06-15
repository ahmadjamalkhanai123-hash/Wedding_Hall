"use client"

import { useEffect, useRef, useState } from "react"

const galleryImages = [
    {
        src: "/luxurious-wedding-hall-interior-with-golden-chande.jpg",
        alt: "Marbella Cave Interior - Chandeliers and artistic cave lighting",
        venue: "Marbella Cave",
        category: "marbella",
    },
    {
        src: "/elegant-wedding-hall-exterior-with-beautiful-archi.jpg",
        alt: "Grandeur Lounge Exterior - Beautiful architectural design",
        venue: "Grandeur Lounge",
        category: "grandeur",
    },
    {
        src: "/wedding-stage-decoration-with-flowers-and-lighting.jpg",
        alt: "Premium stage decoration with flowers and elegant lighting",
        venue: "Stage Design",
        category: "both",
    },
    {
        src: "/luxurious-wedding-reception-hall-with-round-tables.jpg",
        alt: "Luxurious reception setup with round tables and fine dining",
        venue: "Reception Setup",
        category: "grandeur",
    },
    {
        src: "/elegant-wedding-ceremony-setup-with-golden-decorat.jpg",
        alt: "Golden decoration wedding ceremony setup",
        venue: "Ceremony Setup",
        category: "marbella",
    },
    {
        src: "/wedding-catering-buffet-with-elegant-food-presenta.jpg",
        alt: "Premium catering buffet with elegant food presentation",
        venue: "Premium Catering",
        category: "both",
    },
    {
        src: "/wedding-dance-floor-with-special-lighting-and-deco.jpg",
        alt: "Dance floor with special lighting and artistic decorations",
        venue: "Dance Floor",
        category: "marbella",
    },
    {
        src: "/wedding-entrance-lobby-with-grand-decorations.jpg",
        alt: "Grand entrance lobby with premium decorations",
        venue: "Grand Entrance",
        category: "grandeur",
    },
]

export function Gallery() {
    const [isVisible, setIsVisible] = useState(false)
    const [activeFilter, setActiveFilter] = useState("all")
    const [lightboxImage, setLightboxImage] = useState(null)
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

    const filters = [
        { key: "all", label: "All Venues" },
        { key: "marbella", label: "Marbella Cave" },
        { key: "grandeur", label: "Grandeur Lounge" },
        { key: "both", label: "Shared" },
    ]

    const filteredImages = activeFilter === "all"
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeFilter)

    return (
        <section
            ref={sectionRef}
            id="gallery"
            className="section-padding bg-[#0F1B4C] relative overflow-hidden"
        >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                        <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">Visual Journey</span>
                        <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
                    </div>
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                        Our <span className="gold-gradient-text">Gallery</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
                        Glimpses of timeless moments created at our venues on Warsak Road.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className={`flex flex-wrap items-center justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    {filters.map((filter) => (
                        <button
                            key={filter.key}
                            id={`gallery-filter-${filter.key}`}
                            onClick={() => setActiveFilter(filter.key)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 border ${activeFilter === filter.key
                                ? "bg-[#D4AF37] text-[#0F1B4C] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/25"
                                : "bg-transparent text-white/70 border-white/20 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filteredImages.map((img, i) => (
                        <div
                            key={img.src}
                            onClick={() => setLightboxImage(img.src)}
                            className={`group relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3] transition-all duration-700 hover:shadow-2xl hover:shadow-[#D4AF37]/20 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                                } ${i === 0 || i === 5 ? "sm:col-span-2 sm:row-span-2 sm:aspect-square" : ""}`}
                            style={{ transitionDelay: `${300 + i * 100}ms` }}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Hover Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-1">{img.venue}</p>
                                <p className="text-white text-sm">{img.alt}</p>
                            </div>

                            {/* Gold Border on Hover */}
                            <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Zoom Icon */}
                            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                                <svg className="w-5 h-5 text-[#0F1B4C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setLightboxImage(null)}
                >
                    <button
                        onClick={() => setLightboxImage(null)}
                        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#D4AF37] transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <img
                        src={lightboxImage}
                        alt="Gallery full view"
                        className="max-w-full max-h-[85vh] object-contain rounded-lg border-2 border-[#D4AF37]/30 shadow-2xl animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    )
}
