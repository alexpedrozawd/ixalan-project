import { useParams, Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Navbar } from '@/components/Navbar/Navbar'
import { Footer } from '@/components/Footer/Footer'
import { ARTICLES } from '@/data/articles'
import type { ArticleBodySection } from '@/types'
import pageBg from '@/assets/images/about-ixalan.jpg'
import styles from './ArticleDetail.module.css'

function formatDate(dateStr: string, locale: string): string {
  return new Date(dateStr).toLocaleDateString(locale, {
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
      <div className={styles.page} style={{ backgroundImage: `url(${pageBg})` }}>
        <div className={styles.overlay} aria-hidden="true" />
        <main className={styles.content}>
          <Container>{children}</Container>
        </main>
      </div>
      <Footer />
    </>
  )
}

export function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { t, i18n } = useTranslation()
  const article = ARTICLES.find((a) => a.slug === slug)
  const isPt = i18n.language === 'pt'
  const locale = isPt ? 'pt-BR' : 'en-US'

  if (!article) {
    return (
      <PageShell>
        <div className={styles.panel} data-testid="article-not-found">
          <Link to="/articles" className={styles.backLink}>{t('articleDetail.backToArticles')}</Link>
          <h1 className={styles.title}>{t('articleDetail.notFound')}</h1>
        </div>
      </PageShell>
    )
  }

  return (
    <PageShell>
      <article className={styles.panel} data-testid="article-detail">
        <Link to="/articles" className={styles.backLink}>{t('articleDetail.backToArticles')}</Link>

        <header className={styles.articleHeader}>
          <h1 className={styles.title}>{isPt && article.titlePt ? article.titlePt : article.title}</h1>
          <p className={styles.subtitle}>{isPt && article.descriptionPt ? article.descriptionPt : article.description}</p>
          <time className={styles.dateLine} dateTime={article.date}>
            {formatDate(article.date, locale)}
          </time>
        </header>

        <img
          src={article.imageUrl}
          alt={article.title}
          className={styles.heroImage}
          loading="eager"
        />

        <div className={styles.body}>
          {(isPt && article.bodyPt ? article.bodyPt : article.body)?.map((section, i) => (
            <BodySection key={i} section={section} />
          ))}
        </div>
      </article>
    </PageShell>
  )
}
