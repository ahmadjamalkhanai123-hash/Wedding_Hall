<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 18" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS 4" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

<h1 align="center">✨ Grandeur Lounge & Marbella Cave ✨</h1>

<p align="center">
  <strong>Premium Wedding Halls on Warsak Road, Peshawar</strong><br/>
  <em>Two Iconic Venues. One Premium Address.</em>
</p>

<p align="center">
  <a href="#-live-demo">Live Demo</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-design-system">Design</a>
</p>

---

## 🌟 About

A luxury, high-end website for **Grandeur Lounge & Marbella Cave** — two premium wedding halls located on Warsak Road, Peshawar. The website presents a unified brand identity for both distinct venues:

| Venue | Vibe | Capacity | Best For |
|-------|------|----------|----------|
| **Grandeur Lounge** 🏛️ | Classic Royal | 800 – 1200 Guests | Royal Barat & Walima Events |
| **Marbella Cave** 🏔️ | Artistic Cave-Style | 300 – 500 Guests | Thematic Weddings & Corporate Dinners |

Both venues share world-class amenities including valet parking, premium catering, power backup, photo studios, and state-of-the-art sound & lighting systems.

---

## 🚀 Live Demo

> 🔗 **Deployed on Vercel** — _[Add your live URL here]_

---

## ✨ Features

### 🎨 Design & UI/UX
- **Split-Screen Hero Section** — Dual venue showcase with parallax hover effects and animated gold divider
- **Gold-Accent Design System** — Luxurious color palette with Gold (#D4AF37), Navy Blue (#0F1B4C), and Deep Bronze (#4B3621)
- **Glassmorphism Effects** — Modern glass morphism with blurred backgrounds
- **Custom Animations** — Fade-in, float, shimmer, scale-in, border-glow, and gold pulse effects
- **Premium Typography** — Playfair Display (headings) + Lato (body) from Google Fonts
- **Custom Gold Scrollbar** — Branded scrollbar styling
- **Mobile-First Responsive Design** — Fully optimized for all screen sizes

### 📄 Page Sections
| Section | Description |
|---------|-------------|
| **Header** | Sticky navigation with scroll-aware styling, mobile hamburger menu, and "Reserve Now" CTA |
| **Hero** | Full-screen split design with both venues, animated text, decorative gold accents, and dual CTA buttons |
| **About** | Brand story with image collage, floating elements, experience badge (5+ Years), and key stats (2000+ Events, 1200 Max Capacity, 100% Satisfaction) |
| **Venue Selector** | Side-by-side venue cards with images, capacity badges, feature lists, and booking CTAs |
| **Amenities** | 6 shared amenities displayed in an interactive grid with hover effects (Location, Parking, Power, Catering, Photo Studio, Sound & Lighting) |
| **Gallery** | Filterable image gallery (All / Marbella / Grandeur / Shared) with lightbox modal and masonry-style layout |
| **Booking Form** | Conversion-oriented inquiry form with WhatsApp integration — sends booking details directly via WhatsApp |
| **Testimonials** | Auto-rotating featured testimonial carousel with mini review cards and dot navigation |
| **Footer** | Contact info, Google Maps embed, social media links for both venues, and SEO-rich copyright section |

### 💬 WhatsApp Integration
- **Sticky WhatsApp Button** — Fixed floating button with gold pulse animation
- **Venue-Specific Chat** — Popup menu lets users choose which venue to contact
- **Pre-filled Messages** — Opens WhatsApp with a professional inquiry message
- **Booking Form → WhatsApp** — Form submissions are sent as formatted WhatsApp messages

### 🔍 SEO Optimization
- Comprehensive meta tags (title, description, keywords)
- OpenGraph social sharing tags
- Semantic HTML5 structure
- Location-specific keywords targeting Peshawar & Warsak Road
- Alt tags on all images
- Lazy loading for gallery images

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **React 18** | Component-based UI |
| **TypeScript 5** | Type-safe JavaScript |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **Radix UI** | Accessible UI primitives (Accordion, Dialog, Select, Toast, etc.) |
| **Lucide React** | Beautiful SVG icon library |
| **React Hook Form + Zod** | Form handling with schema validation |
| **Embla Carousel** | Lightweight carousel/slider |
| **next-themes** | Theme management |
| **Vercel Analytics** | Performance & traffic analytics |
| **Playfair Display + Lato** | Google Fonts for premium typography |

---

## 📁 Project Structure

```
Wedding-Hall-main/
├── app/
│   ├── globals.css          # Design system, animations, custom styles
│   ├── layout.tsx           # Root layout with fonts, metadata, SEO
│   └── page.tsx             # Main homepage assembling all sections
│
├── components/
│   ├── header.tsx           # Sticky navigation bar
│   ├── hero.tsx             # Split-screen hero with dual venue showcase
│   ├── about.tsx            # Brand story & stats section
│   ├── venue-selector.tsx   # Venue comparison cards
│   ├── amenities.tsx        # Shared amenities grid
│   ├── gallery.tsx          # Filterable photo gallery with lightbox
│   ├── booking-form.tsx     # Inquiry form with WhatsApp integration
│   ├── testimonials.tsx     # Auto-rotating reviews carousel
│   ├── footer.tsx           # Contact, map, social links, copyright
│   ├── whatsapp-button.tsx  # Floating WhatsApp with venue selector
│   ├── contact.tsx          # Detailed contact information component
│   ├── services.tsx         # Wedding services breakdown
│   ├── packages.tsx         # Pricing packages (Basic/Standard/Premium)
│   ├── faq.tsx              # Frequently asked questions accordion
│   ├── theme-provider.tsx   # Theme context provider
│   └── ui/                  # 50+ Radix-based UI components (shadcn/ui)
│
├── hooks/
│   ├── use-mobile.ts        # Mobile detection hook
│   └── use-toast.ts         # Toast notification hook
│
├── lib/
│   └── utils.ts             # Utility functions (cn class merger)
│
├── styles/
│   └── globals.css          # Additional global styles
│
├── public/                  # Static assets (wedding venue images)
│   ├── luxurious-wedding-hall-interior-*.jpg
│   ├── elegant-wedding-hall-exterior-*.jpg
│   ├── wedding-stage-decoration-*.jpg
│   ├── wedding-catering-buffet-*.jpg
│   ├── wedding-dance-floor-*.jpg
│   ├── wedding-entrance-lobby-*.jpg
│   ├── wedding-photography-session-*.jpg
│   ├── outdoor-wedding-garden-area-*.jpg
│   ├── beautiful-bridal-suite-*.jpg
│   ├── elegant-wedding-ceremony-setup-*.jpg
│   └── happy-couple-portrait.png
│
├── package.json
├── tsconfig.json
├── next.config.mjs
├── postcss.config.mjs
└── components.json          # shadcn/ui configuration
```

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| 🥇 **Gold** | `#D4AF37` | Primary accent, buttons, highlights, borders |
| 🥇 **Gold Light** | `#E8D48B` | Subtle gold accents, taglines |
| 🥇 **Gold Dark** | `#B8962E` | Hover states, deep accents |
| 🔵 **Navy** | `#0F1B4C` | Marbella Cave theme, gallery backgrounds |
| 🟤 **Bronze** | `#4B3621` | Grandeur Lounge theme, testimonials background |
| ⬜ **Background** | `#FFFFFF` | Page backgrounds |
| 🟡 **Card** | `#FDFBF7` | Card & form backgrounds |

### Typography
- **Headings:** Playfair Display (Serif) — Elegant & luxurious
- **Body:** Lato (Sans-serif) — Clean & readable

### Custom CSS Classes
| Class | Effect |
|-------|--------|
| `.gold-gradient-text` | Gold shimmer gradient on text |
| `.gold-gradient-bg` | Gold gradient background |
| `.btn-gold` | Premium gold call-to-action button |
| `.btn-marbella` | Navy blue venue-specific button |
| `.btn-grandeur` | Bronze venue-specific button |
| `.marbella-card` | Navy gradient card with gold border |
| `.grandeur-card` | Bronze gradient card with gold border |
| `.glass` | Glassmorphism effect (light) |
| `.glass-dark` | Glassmorphism effect (dark) |
| `.animate-float` | Gentle floating animation |
| `.animate-pulse-gold` | Gold pulsing glow effect |
| `.animate-shimmer` | Gold shimmer sweep animation |
| `.animate-scale-in` | Scale-up entrance animation |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ installed
- **npm** or **pnpm** package manager

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/saadmoin123/Wedding-Hall.git

# 2. Navigate to the project directory
cd Wedding-Hall

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be running at **http://localhost:3000** 🎉

### Build for Production

```bash
npm run build
npm start
```

---

## 📦 Wedding Packages

| Package | Price | Guests | Includes |
|---------|-------|--------|----------|
| **Basic** ⭐ | PKR 206,500 | Up to 300 | Simple setup + Catering |
| **Standard** 👑 | PKR 350,000 | Up to 600 | Decoration + Sound System + Catering |
| **Premium** 💎 | PKR 500,000 | Up to 1200 | Luxury décor + Lighting + Full Menu + Photography |

> 💡 **Custom packages** are also available — tailored to your specific requirements with 0% hidden charges!

---

## 📍 Location & Contact

| Detail | Info |
|--------|------|
| 📍 **Address** | Main Warsak Road, Near Gulbahar, Peshawar, KPK, Pakistan |
| 📞 **Phone** | +92 333 9190724 / +92 332 9103990 |
| 📧 **Email** | muhammadfarazmarbella@gmail.com |
| 💬 **WhatsApp** | +92 333 9190724 (24/7 Support) |
| 🕐 **Hours** | Mon - Sun: 9:00 AM – 11:00 PM |

---

## 🧑‍💻 Developer

<p align="center">
  Made with ❤️ by <strong>Saad Moin</strong>
</p>

<p align="center">
  <a href="https://github.com/saadmoin123">
    <img src="https://img.shields.io/badge/GitHub-saadmoin123-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</p>

---

## 📝 License

This project is built for **Grandeur Lounge & Marbella Cave** Wedding Halls, Peshawar.

---

<p align="center">
  <strong>✨ The Crown Jewels of Warsak Road ✨</strong><br/>
  <em>Grandeur Lounge • Marbella Cave</em><br/>
  <sub>Since 2020 | Premium Wedding Halls, Peshawar</sub>
</p>
