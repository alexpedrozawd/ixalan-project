import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Articles } from '@/pages/Articles/Articles'

function renderArticles() {
  return render(
    <MemoryRouter>
      <Articles />
    </MemoryRouter>
  )
}

describe('Articles page', () => {
  it('renders the All Articles heading', () => {
    renderArticles()
    expect(screen.getByRole('heading', { name: /all articles/i, level: 1 })).toBeInTheDocument()
  })

  it('renders article cards', () => {
    renderArticles()
    expect(screen.getAllByTestId('news-card').length).toBeGreaterThanOrEqual(1)
  })

  it('renders all four articles', () => {
    renderArticles()
    expect(screen.getAllByTestId('news-card')).toHaveLength(4)
  })

  it('renders Rampaging Ferocidon article', () => {
    renderArticles()
    expect(screen.getByText(/rampaging ferocidon banned/i)).toBeInTheDocument()
  })

  it('renders Be Prepared for RIX Release article', () => {
    renderArticles()
    expect(screen.getByText(/be prepared for rix release/i)).toBeInTheDocument()
  })

  it('renders Welcome to Ixalan News article', () => {
    renderArticles()
    expect(screen.getByText(/welcome to ixalan news/i)).toBeInTheDocument()
  })

  it('renders the page container', () => {
    renderArticles()
    expect(screen.getByTestId('articles-page')).toBeInTheDocument()
  })

  it('renders the footer landmark', () => {
    renderArticles()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
