"use client"

import { useState, useEffect } from "react"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#venues", label: "Our Venues" },
        { href: "#amenities", label: "Amenities" },
        { href: "#gallery", label: "Gallery" },
        { href: "#booking", label: "Book Now" },
        { href: "#contact", label: "Contact" },
    ]

    return (
        <header
            id="main-header"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-[#D4AF37]/20"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="w-12 h-12 rounded-full gold-gradient-bg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                <span className="text-white font-serif font-bold text-lg">G&M</span>
                            </div>
                            <div className="absolute -inset-1 rounded-full border border-[#D4AF37]/30 group-hover:border-[#D4AF37]/60 transition-colors duration-300"></div>
                        </div>
                        <div className="hidden sm:block">
                            <p className={`font-serif text-lg font-bold tracking-wide ${isScrolled ? "text-[#1A1A1A]" : "text-white"} transition-colors duration-300`}>
                                Grandeur & Marbella
                            </p>
                            <p className={`text-xs tracking-[0.2em] uppercase ${isScrolled ? "text-[#D4AF37]" : "text-[#E8D48B]"} transition-colors duration-300`}>
                                Warsak Road, Peshawar
                            </p>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-md hover:bg-[#D4AF37]/10 ${isScrolled
                                    ? "text-[#1A1A1A] hover:text-[#D4AF37]"
                                    : "text-white/90 hover:text-[#D4AF37]"
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#booking"
                            className="ml-4 btn-gold text-sm uppercase tracking-wider !py-2.5 !px-6 rounded-full"
                        >
                            Reserve Now
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        id="mobile-menu-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`lg:hidden p-2 rounded-md transition-colors ${isScrolled ? "text-[#1A1A1A]" : "text-white"
                            }`}
                        aria-label="Toggle navigation menu"
                    >
                        <svg
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {mobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-[#D4AF37]/20 animate-slide-down">
                    <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="px-4 py-3 text-[#1A1A1A] font-medium tracking-wide uppercase text-sm hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] rounded-md transition-all duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#booking"
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-4 btn-gold text-center text-sm uppercase tracking-wider rounded-full"
                        >
                            Reserve Now
                        </a>
                    </nav>
                </div>
            )}
        </header>
    )
}
