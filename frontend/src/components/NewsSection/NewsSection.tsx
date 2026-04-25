import { useTranslation } from 'react-i18next'
import { Col, Container, Row } from 'react-bootstrap'
import { NewsCard } from '@/components/NewsCard/NewsCard'
import { ARTICLES } from '@/data/articles'
import type { NewsArticle } from '@/types'
import styles from './NewsSection.module.css'

interface NewsSectionProps {
  articles?: NewsArticle[]
}

export function NewsSection({ articles = ARTICLES }: NewsSectionProps) {
  const { t } = useTranslation()

  const sidebarKeys = ['0', '1', '2'] as const

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
              <a
                href="https://alexpedrozawd.github.io/ixalan-project/articles/"
                className={styles.viewMoreLink}
                aria-label="View more articles"
              >
                {t('news.viewMore')}
              </a>
            </div>
          </Col>

          <Col xs={12} lg={4} className={styles.sidebarColumn}>
            <aside aria-label="Ixalan News Sidebar">
              <h2 className={styles.sidebarHeading}>{t('news.heading')}</h2>
              {sidebarKeys.map((key) => (
                <div key={key} className={styles.sidebarBlock}>
                  <h3 className={styles.sidebarSubheading}>{t(`news.sidebar.${key}.heading`)}</h3>
                  <p className={styles.sidebarText}>{t(`news.sidebar.${key}.content`)}</p>
                </div>
              ))}
            </aside>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
