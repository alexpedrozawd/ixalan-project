import heroImage from '@/assets/images/hero-rivals-ixalan.jpg'
import styles from './HeroSection.module.css'

export function HeroSection() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
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
