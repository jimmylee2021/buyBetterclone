const brands = [
  { name: 'SHEGLAM', style: 'sheglam' },
  { name: 'CeraVe', style: 'cerave' },
  { name: 'The Ordinary', style: 'ordinary' },
  { name: 'COSRX', style: 'cosrx' },
  { name: 'GARNIER', style: 'garnier' },
  { name: 'Neutrogena', style: 'neutrogena' },
  { name: 'La Roche-Posay', style: 'laroche' },
]

const BrandSet = ({ duplicate = false }) => (
  <div className="brand-logo-set" aria-hidden={duplicate || undefined}>
    {brands.map((brand) => (
      <span className={`brand-wordmark brand-wordmark--${brand.style}`} key={brand.name}>
        {brand.name}
      </span>
    ))}
  </div>
)

export const BrandLogoTicker = () => (
  <section className="brand-section" aria-label="Beauty brands">
    <h2 className="visually-hidden">Beauty brands</h2>
    <div className="brand-marquee">
      <div className="brand-marquee-track">
        <BrandSet />
        <BrandSet duplicate />
      </div>
    </div>
  </section>
)
