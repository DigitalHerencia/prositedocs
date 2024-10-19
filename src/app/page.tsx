// H:\DigitalHerencia\.environments\Pro_Site_Docs\pro_site_docs\src\app\page.tsx
import React from "react"

export default function HomePage() {
    return (
        <div className="landing-container">
            <header className="hero-section">
                <h1>Streamline Your Construction Photo Documentation</h1>
                <p className="subtitle">
                    ProSite Docs makes it easy to offload, organize, and secure
                    job site photos.
                </p>
                <a href="#sign-up" className="cta-button">
                    Start Free Trial
                </a>
            </header>

            <section className="features-section">
                <h2>Why Choose ProSite Docs?</h2>
                <div className="features">
                    <div className="feature-item">
                        <h3>Photo Offloading</h3>
                        <p>
                            Automatically upload and categorize your job site
                            photos with ease.
                        </p>
                    </div>
                    <div className="feature-item">
                        <h3>Cloud Backup</h3>
                        <p>
                            Secure storage with daily AWS S3 backups and KMS
                            encryption.
                        </p>
                    </div>
                    <div className="feature-item">
                        <h3>Custom Reporting</h3>
                        <p>
                            Generate compliance, safety, and project reports
                            with a click.
                        </p>
                    </div>
                </div>
            </section>

            <section className="testimonial-section">
                <h2>What Our Users Say</h2>
                <div className="testimonials">
                    <blockquote>
                        <p>
                            “ProSite Docs saves us hours every week in
                            documentation and makes compliance reporting a
                            breeze.”
                        </p>
                        <cite>– John D., Site Supervisor</cite>
                    </blockquote>
                    <blockquote>
                        <p>
                            “With ProSite Docs, managing photos for multiple
                            projects has never been easier.”
                        </p>
                        <cite>– Sarah M., Project Manager</cite>
                    </blockquote>
                </div>
            </section>

            <section id="sign-up" className="cta-section">
                <h2>Get Started Today</h2>
                <p>
                    Start your free trial and see how ProSite Docs can
                    revolutionize your construction documentation process.
                </p>
                <a href="/signup" className="cta-button">
                    Start Free Trial
                </a>
            </section>
        </div>
    )
}
