import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NewsSection } from '@/components/NewsSection/NewsSection'
import type { NewsArticle } from '@/types'

const mockArticles: NewsArticle[] = [
  {
    id: 1,
    title: 'Test Article One',
    description: 'Description for article one.',
    imageUrl: 'https://api.scryfall.com/cards/xln/154?format=image&version=normal',
    date: '2018-01-15',
    slug: 'test-article-one',
  },
  {
    id: 2,
    title: 'Test Article Two',
    description: 'Description for article two.',
    imageUrl: 'https://api.scryfall.com/cards/xln/203?format=image&version=normal',
    date: '2018-01-10',
    slug: 'test-article-two',
  },
]

describe('NewsSection', () => {
  it('renders the section with correct aria-label', () => {
    render(<NewsSection />)
    expect(screen.getByRole('region', { name: /ixalan news/i })).toBeInTheDocument()
  })

  it('renders default articles when no prop is provided', () => {
    render(<NewsSection />)
    expect(screen.getAllByTestId('news-card').length).toBeGreaterThan(0)
  })

  it('renders the correct number of provided articles', () => {
    render(<NewsSection articles={mockArticles} />)
    expect(screen.getAllByTestId('news-card')).toHaveLength(2)
  })

  it('renders article titles', () => {
    render(<NewsSection articles={mockArticles} />)
    expect(screen.getByText('Test Article One')).toBeInTheDocument()
    expect(screen.getByText('Test Article Two')).toBeInTheDocument()
  })

  it('renders the sidebar with IXALAN NEWS heading', () => {
    render(<NewsSection />)
    expect(screen.getByRole('heading', { name: /ixalan news/i, level: 2 })).toBeInTheDocument()
  })

  it('renders all sidebar sections', () => {
    render(<NewsSection />)
    expect(screen.getByText(/what's new about ixalan/i)).toBeInTheDocument()
    expect(screen.getByText(/tribes and decks to play/i)).toBeInTheDocument()
    expect(screen.getByText(/card database/i)).toBeInTheDocument()
  })

  it('renders the View More link pointing to /articles', () => {
    render(<NewsSection />)
    expect(screen.getByRole('link', { name: /view more articles/i })).toHaveAttribute('href', '/articles')
  })

  it('has data-testid attribute', () => {
    render(<NewsSection />)
    expect(screen.getByTestId('news-section')).toBeInTheDocument()
  })

  it('sidebar has accessible landmark', () => {
    render(<NewsSection />)
    expect(screen.getByRole('complementary', { name: /ixalan news sidebar/i })).toBeInTheDocument()
  })
})
