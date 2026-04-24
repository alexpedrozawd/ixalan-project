import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NewsCard } from '@/components/NewsCard/NewsCard'
import type { NewsArticle } from '@/types'

const mockArticle: NewsArticle = {
  id: 1,
  title: 'Rampaging Ferocidon Banned',
  description: 'New banned and restricted update added Rampaging Ferocidon to the Standard format ban list.',
  imageUrl: 'https://api.scryfall.com/cards/xln/154?format=image&version=normal',
  date: '2018-01-15',
  slug: 'rampaging-ferocidon-banned',
}

describe('NewsCard', () => {
  it('renders the article title', () => {
    render(<NewsCard article={mockArticle} />)
    expect(screen.getByText('Rampaging Ferocidon Banned')).toBeInTheDocument()
  })

  it('renders the article description', () => {
    render(<NewsCard article={mockArticle} />)
    expect(screen.getByText(/new banned and restricted update/i)).toBeInTheDocument()
  })

  it('renders the article image with correct alt text', () => {
    render(<NewsCard article={mockArticle} />)
    const img = screen.getByAltText('Rampaging Ferocidon Banned')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', mockArticle.imageUrl)
  })

  it('image has loading="lazy"', () => {
    render(<NewsCard article={mockArticle} />)
    expect(screen.getByAltText('Rampaging Ferocidon Banned')).toHaveAttribute('loading', 'lazy')
  })

  it('title links to the correct article URL', () => {
    render(<NewsCard article={mockArticle} />)
    const links = screen.getAllByRole('link', { name: 'Rampaging Ferocidon Banned' })
    expect(links.length).toBeGreaterThan(0)
    expect(links[0]).toHaveAttribute('href', `/articles/${mockArticle.slug}`)
  })

  it('renders as an article element', () => {
    render(<NewsCard article={mockArticle} />)
    expect(screen.getByRole('article')).toBeInTheDocument()
  })

  it('has data-testid attribute', () => {
    render(<NewsCard article={mockArticle} />)
    expect(screen.getByTestId('news-card')).toBeInTheDocument()
  })
})
