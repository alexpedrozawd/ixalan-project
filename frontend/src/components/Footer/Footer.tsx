import styles from './Footer.module.css'

export function Footer() {
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
            © Alexandre Pedroza. Web Developer
          </p>
          <p className={styles.linksLine}>
            Magic: The Gathering is a Wizards property{' '}
            <a
              href="https://magic.wizards.com/en/products/ixalan"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.blockLink}
              aria-label="Ixalan — Magic: The Gathering official page"
            >
              Ixalan
            </a>
            {' | '}
            <a
              href="https://magic.wizards.com/en/products/rivals-of-ixalan"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.blockLink}
              aria-label="Rivals of Ixalan — Magic: The Gathering official page"
            >
              Rivals of Ixalan
            </a>
          </p>
        </div>

        <div className={styles.brandLogo}>
          <span className={styles.ixalanLogo} aria-label="Ixalan">IXALAN</span>
        </div>
      </div>
    </footer>
  )
}
