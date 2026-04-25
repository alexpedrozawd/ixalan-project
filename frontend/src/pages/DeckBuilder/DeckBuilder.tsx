import { useTranslation } from 'react-i18next'
import { Navbar } from '@/components/Navbar/Navbar'
import { Footer } from '@/components/Footer/Footer'
import pageBg from '@/assets/images/deck-builder-bg.jpg'
import styles from './DeckBuilder.module.css'

function RegisaurFossil() {
  return (
    <svg
      className={styles.fossil}
      viewBox="0 0 300 170"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* === Solid filled body parts === */}

      {/* Tail — tapered slab pointing left */}
      <polygon points="10,95 10,103 118,97 118,82" fill="currentColor" />

      {/* Main torso */}
      <ellipse cx="158" cy="91" rx="46" ry="25" fill="currentColor" />

      {/* Neck connecting torso to head */}
      <polygon points="184,71 202,64 234,37 224,28 193,57 180,67" fill="currentColor" />

      {/* Upper skull — large angular block */}
      <polygon points="218,24 250,15 282,36 284,53 265,65 238,68 216,59 210,44" fill="currentColor" />

      {/* Lower jaw */}
      <polygon points="228,63 272,57 276,71 262,77 228,74 219,67" fill="currentColor" />

      {/* Rear hind leg — thigh */}
      <polygon points="148,101 164,101 161,134 147,132" fill="currentColor" />
      {/* Rear hind leg — shin */}
      <polygon points="147,132 162,134 157,161 141,161" fill="currentColor" />
      {/* Rear foot */}
      <polygon points="130,159 162,159 166,167 127,167" fill="currentColor" />
      {/* Rear foot — toe claw forward */}
      <polygon points="127,164 135,160 129,170" fill="currentColor" />
      {/* Rear foot — toe claw back */}
      <polygon points="162,160 168,164 162,170" fill="currentColor" />

      {/* Front hind leg — thigh */}
      <polygon points="132,103 149,101 146,135 131,133" fill="currentColor" />
      {/* Front hind leg — shin */}
      <polygon points="131,133 147,135 142,162 125,162" fill="currentColor" />
      {/* Front foot */}
      <polygon points="114,160 145,160 149,168 111,168" fill="currentColor" />
      {/* Front foot — toe claw forward */}
      <polygon points="111,165 119,161 113,171" fill="currentColor" />
      {/* Front foot — toe claw back */}
      <polygon points="145,161 151,165 145,171" fill="currentColor" />

      {/* Front arm — upper (tiny) */}
      <polygon points="193,84 202,82 207,105 197,104" fill="currentColor" />
      {/* Front arm — forearm */}
      <polygon points="197,103 207,103 202,116 193,115" fill="currentColor" />
      {/* Front arm — claw */}
      <polygon points="193,113 202,115 196,122" fill="currentColor" />

      {/* === White skeletal detail overlays === */}

      {/* Eye socket */}
      <circle cx="256" cy="38" r="8" fill="white" opacity="0.88" />

      {/* Nostril */}
      <ellipse cx="280" cy="42" rx="3" ry="2.5" fill="white" opacity="0.6" />

      {/* Upper jaw tooth gaps (white triangles cut up into jaw) */}
      <polygon points="234,65 236.5,60 239,65" fill="white" opacity="0.82" />
      <polygon points="241,67 243.5,61 246,67" fill="white" opacity="0.82" />
      <polygon points="248,67 250.5,62 253,67" fill="white" opacity="0.82" />
      <polygon points="255,67 257.5,62 260,67" fill="white" opacity="0.82" />
      <polygon points="262,66 264.5,61 267,66" fill="white" opacity="0.82" />
      <polygon points="268,64 270.5,59 273,64" fill="white" opacity="0.82" />

      {/* Lower jaw tooth gaps (white triangles cut down into jaw) */}
      <polygon points="233,70 235.5,75 238,70" fill="white" opacity="0.72" />
      <polygon points="242,72 244.5,77 247,72" fill="white" opacity="0.72" />
      <polygon points="251,72 253.5,77 256,72" fill="white" opacity="0.72" />
      <polygon points="260,71 262.5,76 265,71" fill="white" opacity="0.72" />

      {/* Vertebral dots along tail */}
      <circle cx="28" cy="98" r="3" fill="white" opacity="0.52" />
      <circle cx="48" cy="96" r="3" fill="white" opacity="0.52" />
      <circle cx="68" cy="93" r="3" fill="white" opacity="0.52" />
      <circle cx="88" cy="91" r="3" fill="white" opacity="0.52" />
      <circle cx="108" cy="89" r="3" fill="white" opacity="0.52" />

      {/* Vertebral dots along back */}
      <circle cx="128" cy="84" r="2.8" fill="white" opacity="0.52" />
      <circle cx="148" cy="79" r="2.8" fill="white" opacity="0.52" />
      <circle cx="165" cy="76" r="2.8" fill="white" opacity="0.52" />
      <circle cx="182" cy="75" r="2.8" fill="white" opacity="0.52" />

      {/* Vertebral dots along neck */}
      <circle cx="201" cy="67" r="2.5" fill="white" opacity="0.52" />
      <circle cx="215" cy="57" r="2.5" fill="white" opacity="0.52" />
      <circle cx="226" cy="45" r="2.5" fill="white" opacity="0.52" />

      {/* Rib lines */}
      <line x1="148" y1="81" x2="141" y2="98" stroke="white" strokeWidth="2" opacity="0.36" strokeLinecap="round" />
      <line x1="158" y1="78" x2="153" y2="96" stroke="white" strokeWidth="2" opacity="0.36" strokeLinecap="round" />
      <line x1="168" y1="77" x2="166" y2="96" stroke="white" strokeWidth="2" opacity="0.36" strokeLinecap="round" />
      <line x1="178" y1="77" x2="179" y2="96" stroke="white" strokeWidth="2" opacity="0.36" strokeLinecap="round" />
      <line x1="188" y1="79" x2="191" y2="95" stroke="white" strokeWidth="2" opacity="0.36" strokeLinecap="round" />

      {/* Hip joint */}
      <circle cx="140" cy="102" r="5.5" fill="white" opacity="0.32" />

      {/* Knee joints */}
      <circle cx="132" cy="133" r="5" fill="white" opacity="0.32" />
      <circle cx="154" cy="133" r="4.5" fill="white" opacity="0.26" />
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
