import { UserRound } from 'lucide-react'

const testimonials = [
  {
    quote: 'The customer service at this store is amazing, even though I got there a few minutes after closing hours, I was attended to in the kindest manner. The person I met at the store was quite friendly, will be shopping again pretty soon.',
    name: 'Daluchi Okeke',
  },
  {
    quote: "I’m loving BUY BETTER! Their products offer amazing quality at prices that won't break the bank. I’ve been impressed with the value for money and the effectiveness of their items. Whether you’re looking for everyday essentials or something special, BUY BETTER is definitely worth checking out. Highly recommend!",
    name: 'Chidinma Ekuma',
  },
  {
    quote: 'I love the idea of free skincare consultation and the products that were recommended have been working and people are giving compliments.',
    name: 'Oyebode Ameedat',
  },
]

const TestimonialCard = ({ quote, name }) => (
  <article className="testimonial-card">
    <blockquote>{quote}</blockquote>
    <div className="testimonial-author">
      <div className="testimonial-avatar" aria-hidden="true">
        <UserRound />
      </div>
      <div>
        <h3>{name}</h3>
        <div className="testimonial-stars" aria-label="5 out of 5 stars">
          <span aria-hidden="true">★★★★★</span>
        </div>
      </div>
    </div>
  </article>
)

export const Testimonials = () => (
  <section className="testimonials-section" aria-labelledby="testimonials-title">
    <div className="testimonials-content">
      <header className="testimonials-heading">
        <h2 id="testimonials-title">Testimonials</h2>
        <p>Hear first-hand from our incredible community of customers.</p>
      </header>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
      <div className="testimonials-indicator" aria-hidden="true">
        <span />
      </div>
    </div>
  </section>
)
