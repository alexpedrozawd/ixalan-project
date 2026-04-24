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
            © Alexandre Pedroza. Web Developer. All rights reserved. 2018
          </p>
          <p className={styles.wotc}>Wizards of the Coast</p>
        </div>

        <div className={styles.brandLogo}>
          <span className={styles.ixalanLogo} aria-label="Ixalan">IXALAN</span>
        </div>
      </div>

      <div className={styles.links}>
        <a
          href="https://magic.wizards.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          Magic: The Gathering is a Wizards property
        </a>
        <span className={styles.separator} aria-hidden="true">|</span>
        <a
          href="https://magic.wizards.com/en/products/rivals-of-ixalan"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          Rivals of Ixalan
        </a>
      </div>
    </footer>
  )
}
