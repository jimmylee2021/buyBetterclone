import { ArrowRight, BadgeCheck, HeartHandshake, PackageCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import Group from '../assets/Group-10.png'

const promises = [
  {
    icon: BadgeCheck,
    title: 'Original products',
    description: 'Shop with confidence. Our promise is 100% original products, sourced directly.',
  },
  {
    icon: PackageCheck,
    title: 'Wholesale made easier',
    description: 'Buying 6 units? Get wholesale pricing and stock up for your beauty business.',
  },
  {
    icon: HeartHandshake,
    title: 'Real help, when you need it',
    description: 'Talk to a real skin advisor on WhatsApp for friendly, personal guidance.',
  },
]

export const About = () => (
  <main className="about-page">
    <section className="about-hero">
      <div className="about-hero-content">
        <p className="about-eyebrow">WELCOME TO BUYBETTER</p>
        <h1>Better beauty buying, made for you.</h1>
        <p className="about-hero-description">
          Your go-to place for beauty and skincare favorites, whether you’re shopping for
          your routine or stocking up for your business.
        </p>
        <Link className="about-primary-link" to="/products">
          Explore products <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </div>
      <div className="about-hero-image">
        <img src={Group} alt="A selection of skincare and beauty products" />
        <span className="about-image-note">A little better in every basket.</span>
      </div>
    </section>

    <section className="about-story" aria-labelledby="about-story-title">
      <p className="about-eyebrow">WHO WE ARE</p>
      <h2 id="about-story-title">Good beauty finds should feel good to buy.</h2>
      <p>
        BuyBetter brings beauty and skincare shopping together with the things that matter:
        original products, useful advice, and options for buying at wholesale prices.
        From everyday skincare picks to products for your shelves, we’re here to help you
        find what works for you.
      </p>
    </section>

    <section className="about-promises" aria-labelledby="about-promises-title">
      <div className="about-section-heading">
        <p className="about-eyebrow">THE BUYBETTER PROMISE</p>
        <h2 id="about-promises-title">A better way to stock up</h2>
      </div>
      <div className="about-promise-grid">
        {promises.map(({ icon: Icon, title, description }) => (
          <article className="about-promise-card" key={title}>
            <span className="about-promise-icon">
              <Icon aria-hidden="true" size={24} />
            </span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="about-visit">
      <div>
        <p className="about-eyebrow">LET’S FIND YOUR NEXT FAVORITE</p>
        <h2>Beauty shopping that works for your business and your routine.</h2>
      </div>
      <div className="about-visit-actions">
        <Link className="about-primary-link" to="/products">
          Shop all products <ArrowRight aria-hidden="true" size={18} />
        </Link>
        <a
          className="about-contact-link"
          href="https://wa.me/2347042995900"
          target="_blank"
          rel="noreferrer"
        >
          Chat with a skin advisor
        </a>
      </div>
    </section>
  </main>
)
