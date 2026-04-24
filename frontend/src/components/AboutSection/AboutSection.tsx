import { Col, Container, Row } from 'react-bootstrap'
import aboutBg from '@/assets/images/about-ixalan.jpg'
import styles from './AboutSection.module.css'

const CARD_1 = 'https://api.scryfall.com/cards/xln/200?format=image&version=normal'
const CARD_2 = 'https://api.scryfall.com/cards/rix/162?format=image&version=normal'

const ABOUT_TEXT = `Ixalan is a plane consisting of Ixalan and Rivals of Ixalan. It's an adventure-themed setting emphasizing the discovery of a lost city. Ixalan features a tropical world where four powerful factions — the Sun Empire, the River Heralds, the Legion of Dusk, and the Brazen Coalition — battle for dominance, each with its own distinct tribe: Dinosaurs, Merfolk, Vampires, and Pirates. Be aware of all the news about the latest Magic expansion and join the hunt for the Immortal Sun.`

export function AboutSection() {
  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${aboutBg})` }}
      aria-label="About Ixalan"
      data-testid="about-section"
    >
      <div className={styles.overlay} aria-hidden="true" />
      <Container className={styles.container}>
        <Row className="align-items-center">
          <Col xs={12} md={7} className={styles.textColumn}>
            <h2 className={styles.heading}>About Ixalan</h2>
            <p className={styles.text}>{ABOUT_TEXT}</p>
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
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
