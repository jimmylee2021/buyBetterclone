import { useState } from 'react'

export const Footer = () => {
  const [newsletterMessage, setNewsletterMessage] = useState('')

  const handleNewsletterSubmit = (event) => {
    event.preventDefault()
    setNewsletterMessage('Newsletter sign-up is not connected yet.')
  }

  return (
    <footer className="site-footer">
      <div className="footer-newsletter">
        <div className="footer-newsletter-copy">
          <h2>Subscribe to Our Newsletter</h2>
          <p>All the latest product drops, limited offers, in-store event info—straight to your inbox.</p>
        </div>
        <div className="footer-newsletter-form">
          <label htmlFor="footer-email">Stay up to date</label>
          <form onSubmit={handleNewsletterSubmit}>
            <input
              id="footer-email"
              type="email"
              placeholder="Enter email address"
              autoComplete="email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          <p>By signing, you agreed to our privacy and policy</p>
          <p className="footer-newsletter-message" role="status" aria-live="polite">
            {newsletterMessage}
          </p>
        </div>
      </div>

      <div className="footer-information">
        <div className="footer-stores">
          <section>
            <h3><a href="https://maps.google.com/?q=16a+Aliu+Animashaun+Avenue+Lekki+Lagos">Lekki Store</a></h3>
            <p>16a Aliu Animashaun Avenue,<br />Lekki Phase 1 Lagos, Nigeria.</p>
          </section>
          <section>
            <h3><a href="https://maps.google.com/?q=43+Bode+Thomas+Street+Surulere+Lagos">Surulere Store</a></h3>
            <p>43, Bode Thomas street,<br />Surulere, Lagos, Nigeria.</p>
          </section>
        </div>

        <div className="footer-hours">
          <section>
            <h3>Monday - Saturday</h3>
            <p>09:00am - 6:00pm</p>
          </section>
          <section>
            <h3>Sunday</h3>
            <p>11:00am - 5:00pm</p>
          </section>
        </div>

        <div className="footer-contact">
          <section>
            <h3>Call line</h3>
            <a href="tel:02014143072">02014143072</a>
            <a href="tel:08177774308">08177774308</a>
          </section>
          <section>
            <h3><a href="https://wa.me/2347042995900">Whatsapp</a></h3>
            <a href="https://wa.me/2347042995900">07042995900</a>
          </section>
        </div>
      </div>

      <div className="footer-bottom">
        <nav className="footer-socials" aria-label="Social media">
          <a className="footer-facebook-social" href="https://www.facebook.com/" aria-label="Facebook">f</a>
          <a className="footer-x-social" href="https://x.com/" aria-label="X">X</a>
          <a href="https://www.instagram.com/" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="18" cy="6" r="1" fill="currentColor" />
            </svg>
          </a>
        </nav>
        <a className="footer-email" href="mailto:partnerships@buybetter.ng">partnerships@buybetter.ng</a>
      </div>
    </footer>
  )
}
