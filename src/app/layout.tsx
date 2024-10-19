// H:\DigitalHerencia\.environments\Pro_Site_Docs\pro_site_docs\src\app\layout.tsx
import "./globals.css"
import { ReactNode } from "react"

export const metadata = {
    title: "ProSite Docs - Construction Documentation Made Simple",
    description:
        "ProSite Docs helps construction professionals easily offload, store, and manage job site photos securely in the cloud.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <nav className="navbar">
                    <div className="logo">
                        <a href="/">ProSite Docs</a>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <a href="#features">Features</a>
                        </li>
                        <li>
                            <a href="#testimonial">Testimonials</a>
                        </li>
                        <li>
                            <a href="#sign-up">Get Started</a>
                        </li>
                        <li>
                            <a href="/login">Login</a>
                        </li>
                    </ul>
                </nav>

                <main>{children}</main>

                <footer className="footer">
                    <p>
                        © 2024 ProSite Docs | Streamlining Job Site
                        Documentation for Construction Professionals
                    </p>
                    <ul className="footer-links">
                        <li>
                            <a href="/privacy">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/terms">Terms of Service</a>
                        </li>
                        <li>
                            <a href="/contact">Contact Us</a>
                        </li>
                    </ul>
                </footer>
            </body>
        </html>
    )
}
