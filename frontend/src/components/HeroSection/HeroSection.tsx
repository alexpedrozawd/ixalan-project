import { useTranslation } from 'react-i18next'
import heroImage from '@/assets/images/hero-rivals-ixalan.jpg'
import styles from './HeroSection.module.css'

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
      aria-label="Rivals of Ixalan — Available now"
      data-testid="hero-section"
    >
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <h1 className={styles.title}>
          {t('hero.title')}
          <br />
          {t('hero.subtitle')}
        </h1>
        <a
          href="https://magic.wizards.com/en/news/card-image-gallery/rivals-of-ixalan"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
          aria-label="See Rivals of Ixalan card gallery"
        >
          {t('hero.cta')} <span aria-hidden="true">&#9658;</span>
        </a>
      </div>
    </section>
  )
}
