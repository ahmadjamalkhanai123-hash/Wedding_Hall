"use client"

import { useEffect, useRef, useState } from "react"

export function Footer() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <footer ref={sectionRef} id="contact" className="bg-[#0A0A0A] relative overflow-hidden">
            <div className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            <div className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">Find Us</span>
                            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
                        </div>
                        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Visit Us <span className="gold-gradient-text">Today</span></h2>
                        <p className="text-white/50 text-lg max-w-xl mx-auto">Experience the luxury in person. Schedule a visit to our venues on Warsak Road.</p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
                        <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div><h4 className="text-white font-semibold mb-1">Address</h4><p className="text-white/60 text-sm leading-relaxed">Main Warsak Road, Near Gulbahar<br />Peshawar, Khyber Pakhtunkhwa<br />Pakistan</p></div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div><h4 className="text-white font-semibold mb-1">Phone</h4><p className="text-white/60 text-sm"><a href="tel:+923001234567" className="hover:text-[#D4AF37] transition-colors">+92 300 123 4567</a><br /><a href="tel:+923001234568" className="hover:text-[#D4AF37] transition-colors">+92 300 123 4568</a></p></div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div><h4 className="text-white font-semibold mb-1">Email</h4><p className="text-white/60 text-sm"><a href="mailto:info@grandeurmarbella.com" className="hover:text-[#D4AF37] transition-colors">info@grandeurmarbella.com</a></p></div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div><h4 className="text-white font-semibold mb-1">Office Hours</h4><p className="text-white/60 text-sm">Mon - Sat: 10:00 AM - 10:00 PM<br />Sunday: By Appointment Only</p></div>
                            </div>
                        </div>
                        <div className={`lg:col-span-2 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
                            <div className="rounded-2xl overflow-hidden border-2 border-[#D4AF37]/20 shadow-2xl shadow-[#D4AF37]/5 h-full min-h-[400px]">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13208.775574776816!2d71.63!3d34.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917e7e5a10f3d%3A0x6e8e7e1c0e09b43!2sWarsak%20Road%2C%20Peshawar!5e0!3m2!1sen!2spk!4v1698000000000!5m2!1sen!2spk" width="100%" height="100%" style={{ border: 0, minHeight: "400px" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location Map"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className={`border-t border-white/10 pt-8 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        <div className="text-center pt-8 border-t border-white/5">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center shadow-lg"><span className="text-white font-serif font-bold text-xs">G&M</span></div>
                            </div>
                            <p className="text-white/40 text-sm mb-2">&copy; {new Date().getFullYear()} Grandeur Lounge & Marbella Cave. All rights reserved.</p>
                            <p className="text-white/30 text-xs">Premium Wedding Halls on Warsak Road, Peshawar | Best Shadi Hall in Peshawar</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
