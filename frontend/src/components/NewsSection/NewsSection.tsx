import { Col, Container, Row } from 'react-bootstrap'
import { NewsCard } from '@/components/NewsCard/NewsCard'
import { ARTICLES } from '@/data/articles'
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

interface NewsSectionProps {
  articles?: NewsArticle[]
}

export function NewsSection({ articles = ARTICLES }: NewsSectionProps) {
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
