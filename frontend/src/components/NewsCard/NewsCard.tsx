import type { NewsArticle } from '@/types'
import styles from './NewsCard.module.css'

interface NewsCardProps {
  article: NewsArticle
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <article className={styles.card} data-testid="news-card">
      <a href={`/articles/${article.slug}`} className={styles.imageLink} tabIndex={-1} aria-hidden="true">
        <div className={styles.imageWrapper}>
          <img
            src={article.imageUrl}
            alt={article.title}
            className={styles.image}
            loading="lazy"
          />
        </div>
      </a>
      <div className={styles.body}>
        <a href={`/articles/${article.slug}`} className={styles.titleLink}>
          <h3 className={styles.title}>{article.title}</h3>
        </a>
        <p className={styles.description}>{article.description}</p>
      </div>
    </article>
  )
}
