"use client"

import { useEffect, useRef, useState } from "react"

export function BookingForm() {
    const [isVisible, setIsVisible] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        venue: "",
        eventType: "",
        eventDate: "",
        guests: "",
        message: "",
    })
    const [isSubmitted, setIsSubmitted] = useState(false)
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

    const handleSubmit = (e) => {
        e.preventDefault()

        // Build WhatsApp message
        const message = `🕌 *New Booking Inquiry*%0A%0A` +
            `👤 *Name:* ${formData.name}%0A` +
            `📞 *Phone:* ${formData.phone}%0A` +
            `📧 *Email:* ${formData.email}%0A` +
            `🏛️ *Venue:* ${formData.venue}%0A` +
            `💍 *Event Type:* ${formData.eventType}%0A` +
            `📅 *Date:* ${formData.eventDate}%0A` +
            `👥 *Guests:* ${formData.guests}%0A` +
            `💬 *Message:* ${formData.message}`

        const whatsappNumber = "923001234567" // Replace with actual number
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 5000)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const inputClasses = "w-full px-5 py-4 bg-white border border-[#E8E0D0] rounded-lg text-[#1A1A1A] placeholder:text-[#9B9B9B] focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 text-sm"
    const labelClasses = "block text-sm font-medium text-[#4A4A4A] mb-2 tracking-wide"

    return (
        <section
            ref={sectionRef}
            id="booking"
            className="section-padding bg-white relative overflow-hidden"
        >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0F1B4C]/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
                    {/* Left Content */}
                    <div className={`lg:col-span-2 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">Reserve Your Date</span>
                        </div>
                        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                            Book Your <span className="gold-gradient-text">Dream Event</span>
                        </h2>
                        <p className="text-[#6B6B6B] text-base leading-relaxed mb-8">
                            Whether it&apos;s a royal Barat at Grandeur Lounge or an intimate Walima at Marbella Cave,
                            our event coordinators will ensure every detail is perfect.
                        </p>

                        {/* Feature Cards */}
                        <div className="space-y-4">
                            {[
                                { icon: "🎪", text: "Customizable Décor Packages" },
                                { icon: "👨‍🍳", text: "Personalized Menu Selection" },
                                { icon: "🎯", text: "Dedicated Event Coordinator" },
                                { icon: "📋", text: "Flexible Payment Plans" },
                            ].map((item) => (
                                <div key={item.text} className="flex items-center gap-4 p-4 bg-[#FDFBF7] rounded-lg border border-[#E8E0D0] hover:border-[#D4AF37]/50 transition-colors duration-300">
                                    <span className="text-2xl">{item.icon}</span>
                                    <span className="text-[#4A4A4A] font-medium text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className={`lg:col-span-3 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
                        <div className="bg-[#FDFBF7] rounded-2xl p-8 sm:p-10 border border-[#E8E0D0] shadow-xl shadow-[#D4AF37]/5">
                            <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-2">Inquiry Form</h3>
                            <p className="text-[#6B6B6B] text-sm mb-8">Fill in the details and we&apos;ll get back to you within 24 hours.</p>

                            {isSubmitted ? (
                                <div className="text-center py-12 animate-scale-in">
                                    <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h4 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-2">Thank You!</h4>
                                    <p className="text-[#6B6B6B]">Your inquiry has been sent. We&apos;ll contact you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="booking-name" className={labelClasses}>Full Name *</label>
                                            <input type="text" id="booking-name" name="name" required placeholder="Your full name" value={formData.name} onChange={handleChange} className={inputClasses} />
                                        </div>
                                        <div>
                                            <label htmlFor="booking-phone" className={labelClasses}>Phone Number *</label>
                                            <input type="tel" id="booking-phone" name="phone" required placeholder="+92 300 1234567" value={formData.phone} onChange={handleChange} className={inputClasses} />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="booking-email" className={labelClasses}>Email Address</label>
                                        <input type="email" id="booking-email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} className={inputClasses} />
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="booking-venue" className={labelClasses}>Which Venue? *</label>
                                            <select id="booking-venue" name="venue" required value={formData.venue} onChange={handleChange} className={inputClasses}>
                                                <option value="">Select Venue</option>
                                                <option value="Marbella Cave">🏔️ Marbella Cave</option>
                                                <option value="Grandeur Lounge">🏛️ Grandeur Lounge</option>
                                                <option value="Both Venues">🏛️🏔️ Both Venues</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="booking-event-type" className={labelClasses}>Event Type *</label>
                                            <select id="booking-event-type" name="eventType" required value={formData.eventType} onChange={handleChange} className={inputClasses}>
                                                <option value="">Select Event</option>
                                                <option value="Barat">Barat</option>
                                                <option value="Walima">Walima</option>
                                                <option value="Engagement">Engagement</option>
                                                <option value="Mehndi">Mehndi</option>
                                                <option value="Corporate">Corporate Event</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="booking-date" className={labelClasses}>Event Date *</label>
                                            <input type="date" id="booking-date" name="eventDate" required value={formData.eventDate} onChange={handleChange} className={inputClasses} />
                                        </div>
                                        <div>
                                            <label htmlFor="booking-guests" className={labelClasses}>Expected Guests *</label>
                                            <select id="booking-guests" name="guests" required value={formData.guests} onChange={handleChange} className={inputClasses}>
                                                <option value="">Number of Guests</option>
                                                <option value="100-300">100 – 300</option>
                                                <option value="300-500">300 – 500</option>
                                                <option value="500-800">500 – 800</option>
                                                <option value="800-1200">800 – 1200</option>
                                                <option value="1200+">1200+</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="booking-message" className={labelClasses}>Additional Message</label>
                                        <textarea id="booking-message" name="message" rows={4} placeholder="Tell us about your event..." value={formData.message} onChange={handleChange} className={`${inputClasses} resize-none`} />
                                    </div>

                                    <button type="submit" id="booking-submit-btn" className="btn-gold w-full !py-4 text-base uppercase tracking-widest rounded-lg font-bold">
                                        Submit Inquiry
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
