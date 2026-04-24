import { useParams, Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Navbar } from '@/components/Navbar/Navbar'
import { Footer } from '@/components/Footer/Footer'
import { ARTICLES } from '@/data/articles'
import type { ArticleBodySection } from '@/types'
import pageBg from '@/assets/images/about-ixalan.jpg'
import styles from './ArticleDetail.module.css'

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function BodySection({ section }: { section: ArticleBodySection }) {
  if (section.type === 'paragraph') {
    return <p className={styles.bodyParagraph}>{section.content}</p>
  }
  if (section.type === 'list') {
    return (
      <ul className={styles.bodyList}>
        {section.items?.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    )
  }
  if (section.type === 'card-image') {
    return (
      <div className={styles.cardImageWrapper}>
        <img
          src={section.cardUrl}
          alt={section.cardAlt}
          className={styles.cardImage}
          loading="lazy"
        />
      </div>
    )
  }
  return null
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar activePage="articles" />
      <div
        className={styles.page}
        style={{ backgroundImage: `url(${pageBg})` }}
      >
        <div className={styles.overlay} aria-hidden="true" />
        <main className={styles.content}>
          <Container>
            {children}
          </Container>
        </main>
      </div>
      <Footer />
    </>
  )
}

export function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>()
  const article = ARTICLES.find((a) => a.slug === slug)

  if (!article) {
    return (
      <PageShell>
        <div className={styles.panel} data-testid="article-not-found">
          <Link to="/articles" className={styles.backLink}>← Back to Articles</Link>
          <h1 className={styles.title}>Article not found</h1>
        </div>
      </PageShell>
    )
  }

  return (
    <PageShell>
      <article className={styles.panel} data-testid="article-detail">
        <Link to="/articles" className={styles.backLink}>← Back to Articles</Link>

        <header className={styles.articleHeader}>
          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles.subtitle}>{article.description}</p>
          <time className={styles.dateLine} dateTime={article.date}>
            {formatDate(article.date)}
          </time>
        </header>

        <img
          src={article.imageUrl}
          alt={article.title}
          className={styles.heroImage}
          loading="eager"
        />

        <div className={styles.body}>
          {article.body?.map((section, i) => (
            <BodySection key={i} section={section} />
          ))}
        </div>
      </article>
    </PageShell>
  )
}
