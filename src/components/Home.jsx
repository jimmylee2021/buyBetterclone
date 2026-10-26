import { useState } from 'react'
import { ProductSection } from './ProductSection.jsx'
import { BrandLogoTicker } from './BrandLogoTicker.jsx'
import { BrandSpotlight } from './BrandSpotlight.jsx'
import { Testimonials } from './Testimonials.jsx'
import { ChevronLeft, ChevronRight, ArrowRight, UserShield, Truck } from 'lucide-react'
import whatsApp from '../assets/whatsapp.svg'
import vitamin from '../assets/vitamin.png'
import eye from '../assets/eye.png'
import sheglam from '../assets/sheglam.png'
import Group from '../assets/Group-10.png'

const slides = [
  {
    theme: 'rose',
    title: <>Buy 6 Units and<br />Pay Wholesale Price</>,
    description: 'Stock up for your business as a skincare reseller',
    image: eye,
  },
  {
    theme: 'sage',
    title: <>Wholesale Skincare<br />for Resellers</>,
    description: 'Find the products you need to keep your shelves stocked',
    image: vitamin,
  },
  {
    theme: 'blue',
    title: <>Build Your Business<br />One Order at a Time</>,
    description: 'Shop skincare in quantities that work for your business',
    image: sheglam,
  },
]

export const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const showSlide = (index) => {
    setActiveSlide((index + slides.length) % slides.length)
  }

  return (
    <>
    <div className="hero-wrapper" aria-roledescription="carousel" aria-label="BuyBetter highlights">
      <div className="hero-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <section
            className={`hero-page hero-page--${slide.theme}`}
            key={index}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
            aria-hidden={activeSlide !== index}
          >
            <div className="row">
              <div className="hero-txt">
                <p className="hero-eyebrow">BETTER BUYING FOR YOUR BUSINESS</p>
                <h1>{slide.title}</h1>
                <small>{slide.description}</small> <br />
                <button>Book Now <ArrowRight className="arrow-icon" /></button>
              </div>
              <div className="hero-img">
                <img src={slide.image} alt="Layered geometric BuyBetter illustration" />
              </div>
            </div>
          </section>
        ))}
      </div>
      <div className="hero-controls">
        <button type="button" className="hero-arrow" onClick={() => showSlide(activeSlide - 1)} aria-label="Previous slide">
          <ChevronLeft aria-hidden="true" />
        </button>
        <div className="hero-dots" aria-label="Choose a slide">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.description}
              className={`hero-dot${activeSlide === index ? ' is-active' : ''}`}
              onClick={() => showSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeSlide === index ? 'true' : undefined}
            />
          ))}
        </div>
        <button type="button" className="hero-arrow" onClick={() => showSlide(activeSlide + 1)} aria-label="Next slide">
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
    </div>
    <section>
         <div className="section-row">
             <div className="content-bx">
               <UserShield />
               <h1>Authenticity Guaranteed — 100% original, sourced directly</h1>
             </div>
             <div className="content-bx">
                <Truck />
               <h1>Same-Day Delivery Lagos — order before 11am</h1>
             </div>
             <div className="content-bx">
                  <img src={whatsApp} alt="Layered geometric BuyBetter illustration" />
               <h1>Skin Advisor on WhatsApp — real human, real advice</h1>
             </div>
         </div>
    </section>
     <ProductSection/>
     <BrandLogoTicker />
    <section className="cta-section">
      <div className="cta-content">
        <div className="cta-copy">
          <h2>Buy 6 units and pay wholesale prices</h2>
          <p>Stock up for your business as a skincare reseller.</p>
          <button type="button">Book Now</button>
        </div>
        <div className="cta-image">
          <img src={Group} alt="Skincare products available for wholesale" />
        </div>
      </div>
    </section>
    <BrandSpotlight />
    <Testimonials />
    </>
  )
}