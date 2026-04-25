import { useTranslation } from 'react-i18next'
import styles from './Footer.module.css'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer} data-testid="footer">
      <div className={styles.inner}>
        <div className={styles.logos}>
          <img
            src="https://media.wizards.com/images/magic/utility/MagicLogo_Stacked_Black.png"
            alt="Magic: The Gathering"
            className={styles.magicLogo}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none'
            }}
          />
        </div>

        <div className={styles.credits}>
          <p className={styles.copyright}>
            {t('footer.copyright')}
          </p>
          <p className={styles.linksLine}>
            {t('footer.wizardsText')}{' '}
            <a
              href="https://magic.wizards.com/en/news/card-image-gallery/ixalan"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.blockLink}
              aria-label="Ixalan — Magic: The Gathering official page"
            >
              {t('navbar.ixalan')}
            </a>
            {' | '}
            <a
              href="https://magic.wizards.com/en/news/card-image-gallery/rivals-of-ixalan"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.blockLink}
              aria-label="Rivals of Ixalan — Magic: The Gathering official page"
            >
              {t('navbar.rivalsOfIxalan')}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
