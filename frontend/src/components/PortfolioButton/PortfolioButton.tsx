import styles from './PortfolioButton.module.css'

export function PortfolioButton() {
  return (
    <a
      href="https://alexpedrozawd.github.io"
      className={styles.btn}
      aria-label="Back to Alexandre Pedroza's portfolio"
    >
      <span className={styles.arrow}>◀</span>
      <span className={styles.label}>Portfolio</span>
    </a>
  )
}
