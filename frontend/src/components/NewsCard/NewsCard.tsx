import { useTranslation } from 'react-i18next'
import type { NewsArticle } from '@/types'
import styles from './NewsCard.module.css'

interface NewsCardProps {
  article: NewsArticle
}

export function NewsCard({ article }: NewsCardProps) {
  const { i18n } = useTranslation()
  const isPt = i18n.language === 'pt'
  const title = isPt && article.titlePt ? article.titlePt : article.title
  const description = isPt && article.descriptionPt ? article.descriptionPt : article.description

  return (
    <article className={styles.card} data-testid="news-card">
      <a href={`${import.meta.env.BASE_URL}articles/${article.slug}`} className={styles.imageLink} tabIndex={-1} aria-hidden="true">
        <div className={styles.imageWrapper}>
          <img
            src={article.imageUrl}
            alt={title}
            className={styles.image}
            loading="lazy"
          />
        </div>
      </a>
      <div className={styles.body}>
        <a href={`${import.meta.env.BASE_URL}articles/${article.slug}`} className={styles.titleLink}>
          <h3 className={styles.title}>{title}</h3>
        </a>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  )
}
