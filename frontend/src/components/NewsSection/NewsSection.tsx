import { Col, Container, Row } from 'react-bootstrap'
import { NewsCard } from '@/components/NewsCard/NewsCard'
import type { NewsArticle, SidebarSection } from '@/types'
import styles from './NewsSection.module.css'

const SIDEBAR_SECTIONS: SidebarSection[] = [
  {
    id: 1,
    heading: "What's new about Ixalan?",
    content: 'Be aware of all the news about the Ixalan blocks, including the latest cards, strategies, and lore from both Ixalan and Rivals of Ixalan.',
  },
  {
    id: 2,
    heading: 'Tribes and decks to play',
    content: 'Find all the four Tribes and decks indicated to play, exploring Dinosaurs, Pirates, Merfolk, and Vampires synergies.',
  },
  {
    id: 3,
    heading: 'Card database',
    content: 'A list of all cards in the block, including the sweetest items of Ixalan. Browse the full collection with search and filter tools.',
  },
]

const MOCK_ARTICLES: NewsArticle[] = [
  {
    id: 1,
    title: 'Rampaging Ferocidon Banned',
    description: 'New banned and restricted update added Rampaging Ferocidon to the banned things to Standard format.',
    imageUrl: 'https://api.scryfall.com/cards/xln/154?format=image&version=normal',
    date: '2018-01-15',
    slug: 'rampaging-ferocidon-banned',
  },
  {
    id: 2,
    title: 'River Sneak: Best Merfolk of Ixalan',
    description: 'Dive deep into the Merfolk tribe and discover why River Sneak is the backbone of every competitive Merfolk list.',
    imageUrl: 'https://api.scryfall.com/cards/xln/67?format=image&version=normal',
    date: '2018-01-10',
    slug: 'river-sneak-best-merfolk',
  },
  {
    id: 3,
    title: 'Rivals of Ixalan — Full Spoiler',
    description: 'The complete card gallery for Rivals of Ixalan is here. Explore all 196 cards from the newest set.',
    imageUrl: 'https://api.scryfall.com/cards/rix/90?format=image&version=normal',
    date: '2018-01-05',
    slug: 'rivals-of-ixalan-full-spoiler',
  },
  {
    id: 4,
    title: 'Top 5 Dinosaurs in Standard',
    description: 'From Ripjaw Raptor to Ghalta, Primal Hunger, find out which dinosaurs are dominating the Standard meta.',
    imageUrl: 'https://api.scryfall.com/cards/xln/203?format=image&version=normal',
    date: '2018-01-02',
    slug: 'top-5-dinosaurs-standard',
  },
]

interface NewsSectionProps {
  articles?: NewsArticle[]
}

export function NewsSection({ articles = MOCK_ARTICLES }: NewsSectionProps) {
  return (
    <section className={styles.section} aria-label="Ixalan News" data-testid="news-section">
      <Container>
        <Row>
          <Col xs={12} lg={8} className={styles.cardsColumn}>
            <Row xs={1} sm={2} className="g-3 g-lg-4">
              {articles.map((article) => (
                <Col key={article.id}>
                  <NewsCard article={article} />
                </Col>
              ))}
            </Row>
            <div className={styles.viewMore}>
              <a href="/articles" className={styles.viewMoreLink} aria-label="View more articles">
                View More
              </a>
            </div>
          </Col>

          <Col xs={12} lg={4} className={styles.sidebarColumn}>
            <aside aria-label="Ixalan News Sidebar">
              <h2 className={styles.sidebarHeading}>IXALAN NEWS</h2>
              {SIDEBAR_SECTIONS.map((section) => (
                <div key={section.id} className={styles.sidebarBlock}>
                  <h3 className={styles.sidebarSubheading}>{section.heading}</h3>
                  <p className={styles.sidebarText}>{section.content}</p>
                </div>
              ))}
            </aside>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
