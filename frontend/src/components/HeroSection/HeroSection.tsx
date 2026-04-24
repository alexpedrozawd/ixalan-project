import styles from './HeroSection.module.css'

const HERO_IMAGE = 'https://api.scryfall.com/cards/rix/159?format=image&version=art_crop'

export function HeroSection() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      aria-label="Rivals of Ixalan — Available in stores"
      data-testid="hero-section"
    >
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <h1 className={styles.title}>
          Rivals of Ixalan:
          <br />
          Available in stores!
        </h1>
        <a
          href="/articles"
          className={styles.ctaButton}
          aria-label="See Rivals of Ixalan articles"
        >
          SEE NOW <span aria-hidden="true">&#9658;</span>
        </a>
      </div>
    </section>
  )
}
