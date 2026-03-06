"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = (e: React.FormEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-area bg-dark text-white">
      <div className="container py-5">
        {/* 1. BRANDING & CTA SECTION */}
        <div className="row gy-4 align-items-center">
          <div className="col-12 mb-4">
            <Link href="/" className="d-inline-block">
              <Image
                src="/images/logo-tymor.png"
                alt="Tymor AI"
                width={160}
                height={60}
                style={{ height: "auto", width: "160px" }}
              />
            </Link>
          </div>
          <div className="col-lg-8">
            <h2 className="footer-big-title anton-font text-uppercase m-0">
              ONE DEMO<br />CHANGES EVERYTHING
            </h2>
          </div>
          <div className="col-lg-4 text-lg-end">
            <Link href="/contact" className="btn cta-orange-capsule">
              LAUNCH YOUR HOLOGRAM EXPERIENCE
            </Link>
          </div>
        </div>

        {/* 2. NEWSLETTER & CONTACT ROW */}
        <div className="row gy-5 align-items-center mt-2">
          {/* Newsletter */}
          <div className="col-lg-4 col-md-6">
            <h6 className="footer-title-sm text-uppercase mb-4">Our Newsletter</h6>
            <div className="newsletter-box-refined">
              <input type="email" placeholder="Your email address" />
              <button type="submit">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div className="col-lg-8">
            <div className="row gy-4">
              <div className="col-md-4">
                <span className="opacity-50 small text-uppercase d-block mb-2">Call us</span>
                <a href="tel:+2135558573" className="footer-contact-link">+(213) 555-8573</a>
              </div>
              <div className="col-md-4">
                <span className="opacity-50 small text-uppercase d-block mb-2">Drop us a line</span>
                <a href="mailto:inquiry@tymor.com" className="footer-contact-link">inquiry@tymor.com</a>
              </div>
              <div className="col-md-4">
                <span className="opacity-50 small text-uppercase d-block mb-2">Teams</span>
                <a href="#" className="footer-contact-link">tymor.team</a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. LINKS GRID SECTION */}
        <div className="row gy-5 mt-5 pt-5 border-top border-secondary border-opacity-25">
          <div className="col-lg-4">
            <p className="opacity-50 small" style={{ maxWidth: '320px' }}>
              Pioneering the future of holographic human interaction. Experience the next generation of AI-driven virtual presence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-6">
            <h6 className="footer-title-sm text-uppercase mb-4">Quick Links</h6>
            <ul className="list-unstyled footer-nav-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>

          {/* Experience */}
          <div className="col-lg-2 col-6">
            <h6 className="footer-title-sm text-uppercase mb-4">Experience</h6>
            <ul className="list-unstyled footer-nav-list">
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/solutions">Solutions</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div className="col-lg-2 col-6">
            <h6 className="footer-title-sm text-uppercase mb-4">Locations</h6>
            <ul className="list-unstyled footer-nav-list opacity-50 small">
              <li>New York, USA</li>
              <li>London, UK</li>
              <li>Dubai, UAE</li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-lg-2 col-6">
            <h6 className="footer-title-sm text-uppercase mb-4">Support</h6>
            <ul className="list-unstyled footer-nav-list">
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/demo">Request Demo</Link></li>
            </ul>
          </div>
        </div>

        {/* 4. COPYRIGHT & BACK TOP */}
        <div className="row pt-5 mt-5 border-top border-secondary border-opacity-25 align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="opacity-50 small mb-0">© 2026 Tymor, All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" onClick={scrollToTop} className="footer-back-link small text-uppercase opacity-50">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
