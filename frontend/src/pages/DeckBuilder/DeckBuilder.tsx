import { useTranslation } from 'react-i18next'
import { Navbar } from '@/components/Navbar/Navbar'
import { Footer } from '@/components/Footer/Footer'
import pageBg from '@/assets/images/deck-builder-bg.jpg'
import styles from './DeckBuilder.module.css'

function RegisaurFossil() {
  return (
    <svg
      className={styles.fossil}
      viewBox="0 0 320 240"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Tail */}
      <polyline points="20,160 45,148 68,140 90,136" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="38" y1="148" x2="34" y2="157" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="58" y1="141" x2="55" y2="151" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="76" y1="137" x2="74" y2="147" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Spine */}
      <polyline points="90,136 120,128 155,124 188,122 210,120" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="110" y1="128" x2="108" y2="138" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="135" y1="125" x2="133" y2="135" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="160" y1="123" x2="158" y2="133" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="183" y1="122" x2="181" y2="132" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Pelvis */}
      <ellipse cx="100" cy="140" rx="14" ry="10" fill="none" stroke="currentColor" strokeWidth="2.5" />

      {/* Hind leg — upper */}
      <line x1="95" y1="148" x2="85" y2="175" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="107" y1="150" x2="115" y2="175" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      {/* Hind leg — lower */}
      <line x1="85" y1="175" x2="72" y2="200" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="115" y1="175" x2="125" y2="200" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* Feet */}
      <polyline points="63,200 72,200 78,210" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <polyline points="72,200 80,205" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <polyline points="118,200 125,200 130,210" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <polyline points="125,200 132,205" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

      {/* Rib cage */}
      <ellipse cx="155" cy="138" rx="22" ry="16" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <line x1="140" y1="128" x2="135" y2="148" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="148" y1="125" x2="144" y2="150" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="158" y1="124" x2="156" y2="151" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="167" y1="126" x2="167" y2="150" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="174" y1="130" x2="175" y2="148" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

      {/* Shoulder / forelimb */}
      <line x1="188" y1="122" x2="200" y2="138" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="200" y1="138" x2="210" y2="155" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Small claws */}
      <polyline points="205,155 210,155 215,162" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <polyline points="210,155 214,158" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Neck */}
      <polyline points="210,120 228,108 242,94" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="222" y1="112" x2="218" y2="122" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="234" y1="101" x2="230" y2="111" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Skull */}
      <ellipse cx="258" cy="82" rx="22" ry="14" fill="none" stroke="currentColor" strokeWidth="2.5" />
      {/* Eye socket */}
      <circle cx="265" cy="78" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* Jaw */}
      <polyline points="242,88 248,95 265,98 278,95 285,88" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Teeth */}
      <line x1="252" y1="88" x2="251" y2="95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="260" y1="90" x2="260" y2="97" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="268" y1="90" x2="269" y2="97" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="276" y1="88" x2="277" y2="94" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Cranial crest/horn */}
      <polyline points="248,72 244,60 250,68" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

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
              <RegisaurFossil />
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
