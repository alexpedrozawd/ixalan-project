import { Col, Container, Row } from 'react-bootstrap'
import styles from './AboutSection.module.css'

const ABOUT_ART = 'https://api.scryfall.com/cards/xln/217?format=image&version=art_crop'
const CARD_1 = 'https://api.scryfall.com/cards/xln/200?format=image&version=normal'
const CARD_2 = 'https://api.scryfall.com/cards/rix/162?format=image&version=normal'

const ABOUT_TEXT = `Ixalan is a plane consisting of Ixalan and Rivals of Ixalan. It's an adventure-themed setting emphasizing the discovery of a lost city. Ixalan features a tropical world where four powerful factions — the Sun Empire, the River Heralds, the Legion of Dusk, and the Brazen Coalition — battle for dominance, each with its own distinct tribe: Dinosaurs, Merfolk, Vampires, and Pirates. Be aware of all the news about the latest Magic expansion and join the hunt for the Immortal Sun.`

export function AboutSection() {
  return (
    <section className={styles.section} aria-label="About Ixalan" data-testid="about-section">
      <Container>
        <h2 className={styles.heading}>About Ixalan</h2>
        <Row className="align-items-start">
          <Col xs={12} md={7} lg={8} className={styles.artColumn}>
            <div className={styles.artWrapper}>
              <img
                src={ABOUT_ART}
                alt="Admiral Beckett Brass leads the Brazen Coalition pirates across the seas of Ixalan"
                className={styles.artImage}
                loading="lazy"
              />
            </div>
          </Col>

          <Col xs={12} md={5} lg={4} className={styles.cardsColumn}>
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
            <p className={styles.text}>{ABOUT_TEXT}</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
