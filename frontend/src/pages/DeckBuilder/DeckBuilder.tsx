import { useTranslation } from 'react-i18next'
import { Navbar } from '@/components/Navbar/Navbar'
import { Footer } from '@/components/Footer/Footer'
import pageBg from '@/assets/images/deck-builder-bg.jpg'
import logoManutencao from '@/assets/images/logo-manutencao.webp'
import styles from './DeckBuilder.module.css'

export function DeckBuilder() {
  const { t } = useTranslation()

  return (
    <>
      <Navbar activePage="cardDatabase" />
      <div
        className={styles.page}
        style={{ backgroundImage: `url(${pageBg})` }}
      >
        <div className={styles.overlay} aria-hidden="true" />
        <main className={styles.content}>
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <span className={styles.terminalDot} />
              <span className={styles.terminalDot} />
              <span className={styles.terminalDot} />
              <span className={styles.terminalTitle}>{t('deckBuilder.systemStatus')}</span>
            </div>
            <div className={styles.scanArea}>
              <div className={styles.scanlines} aria-hidden="true" />
              <div className={styles.scanBeam} aria-hidden="true" />
              <img
                src={logoManutencao}
                alt=""
                className={styles.logo}
                aria-hidden="true"
              />
            </div>
            <div className={styles.textBlock}>
              <p className={styles.maintenanceText}>{t('deckBuilder.maintenance')}</p>
              <p className={styles.comingSoonText}>
                <span className={styles.cursor} aria-hidden="true">▶</span>
                {t('deckBuilder.comingSoon')}
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
