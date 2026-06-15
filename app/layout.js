import { Playfair_Display, Lato } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-heading",
    display: "swap",
    weight: ["400", "500", "600", "700", "800", "900"],
})

const lato = Lato({
    subsets: ["latin"],
    weight: ["300", "400", "700", "900"],
    variable: "--font-body",
    display: "swap",
})

export const metadata = {
    title: "Grandeur Lounge & Marbella Cave | Premium Wedding Halls on Warsak Road, Peshawar",
    description:
        "Discover the crown jewels of Warsak Road — Grandeur Lounge for royal Barat & Walima events (800-1200 guests) and Marbella Cave for thematic weddings & corporate dinners (300-500 guests). Best Shadi Hall in Peshawar with valet parking, premium catering, and power backup.",
    keywords:
        "Wedding Halls on Warsak Road, Best Shadi Hall Peshawar, Marbella Cave Booking, Grandeur Lounge Rates, wedding hall Peshawar, Warsak Road wedding venue, Peshawar marriage hall, Barat venue Peshawar, Walima hall Peshawar, cave style wedding hall, grand wedding hall, premium wedding venue Peshawar, event hall Warsak Road, banquet hall Peshawar",
    authors: [{ name: "Grandeur Lounge & Marbella Cave" }],
    openGraph: {
        title: "Grandeur Lounge & Marbella Cave | Premium Wedding Halls, Warsak Road Peshawar",
        description: "Two Iconic Venues. One Premium Address. The finest wedding experience on Warsak Road, Peshawar.",
        type: "website",
        locale: "en_US",
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className="font-sans antialiased">
                <Suspense fallback={null}>{children}</Suspense>
            </body>
        </html>
    )
}
