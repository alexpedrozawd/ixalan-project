import { useTranslation } from 'react-i18next'
import { Col, Container, Row } from 'react-bootstrap'
import aboutBg from '@/assets/images/about-ixalan.jpg'
import styles from './AboutSection.module.css'

const CARD_1 = 'https://api.scryfall.com/cards/xln/200?format=image&version=normal'
const CARD_2 = 'https://api.scryfall.com/cards/rix/162?format=image&version=normal'
const CARD_3 = 'https://api.scryfall.com/cards/xln/222?format=image&version=normal'
const CARD_4 = 'https://api.scryfall.com/cards/rix/180?format=image&version=normal'

export function AboutSection() {
  const { t } = useTranslation()

  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${aboutBg})` }}
      aria-label={t('about.heading')}
      data-testid="about-section"
    >
      <div className={styles.overlay} aria-hidden="true" />
      <Container className={styles.container}>
        <Row className="align-items-center">
          <Col xs={12} md={7} className={styles.textColumn}>
            <h2 className={styles.heading}>{t('about.heading')}</h2>
            <p className={styles.text}>{t('about.text')}</p>
          </Col>

          <Col xs={12} md={5} className={styles.cardsColumn}>
            <div className={styles.stackedCards}>
              <div className={styles.cardWrapper}>
                <img
                  src={CARD_1}
                  alt="Huatli, Warrior Poet — Planeswalker card from Ixalan"
                  className={styles.cardImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardWrapper}>
                <img
                  src={CARD_2}
                  alt="Kumena, Tyrant of Orazca — Legendary Merfolk from Rivals of Ixalan"
                  className={styles.cardImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardWrapper}>
                <img
                  src={CARD_3}
                  alt="Gishath, Sun's Avatar — Legendary Dinosaur from Ixalan"
                  className={styles.cardImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardWrapper}>
                <img
                  src={CARD_4}
                  alt="The Immortal Sun — Legendary Artifact from Rivals of Ixalan"
                  className={styles.cardImage}
                  loading="lazy"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
