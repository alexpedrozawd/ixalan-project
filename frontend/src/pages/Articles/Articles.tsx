import { useTranslation } from 'react-i18next'
import { Col, Container, Row } from 'react-bootstrap'
import { Navbar } from '@/components/Navbar/Navbar'
import { Footer } from '@/components/Footer/Footer'
import { NewsCard } from '@/components/NewsCard/NewsCard'
import { ARTICLES } from '@/data/articles'
import pageBg from '@/assets/images/about-ixalan.jpg'
import styles from './Articles.module.css'

export function Articles() {
  const { t } = useTranslation()

  return (
    <>
      <Navbar activePage="articles" />
      <div
        className={styles.page}
        style={{ backgroundImage: `url(${pageBg})` }}
        data-testid="articles-page"
      >
        <div className={styles.overlay} aria-hidden="true" />
        <main className={styles.content}>
          <Container>
            <div className={styles.panel}>
              <h1 className={styles.heading}>{t('articles.heading')}</h1>
              <Row xs={1} sm={2} lg={3} className="g-4">
                {ARTICLES.map((article) => (
                  <Col key={article.id}>
                    <NewsCard article={article} />
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </main>
      </div>
      <Footer />
    </>
  )
}
