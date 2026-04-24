import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { ArticleDetail } from '@/pages/ArticleDetail/ArticleDetail'

function renderDetail(slug: string) {
  const router = createMemoryRouter(
    [{ path: '/articles/:slug', element: <ArticleDetail /> }],
    { initialEntries: [`/articles/${slug}`] }
  )
  return render(<RouterProvider router={router} />)
}

describe('ArticleDetail page', () => {
  it('renders the article title for a known slug', () => {
    renderDetail('rampaging-ferocidon-banned')
    expect(screen.getByRole('heading', { name: /rampaging ferocidon banned/i })).toBeInTheDocument()
  })

  it('renders the article description as subtitle', () => {
    renderDetail('rampaging-ferocidon-banned')
    expect(screen.getByText(/new banned and restricted list from wizards/i)).toBeInTheDocument()
  })

  it('renders the hero image', () => {
    renderDetail('rampaging-ferocidon-banned')
    expect(screen.getByAltText('Rampaging Ferocidon Banned')).toBeInTheDocument()
  })

  it('renders body paragraph content', () => {
    renderDetail('rampaging-ferocidon-banned')
    expect(screen.getByText(/the star of extinction came earlier/i)).toBeInTheDocument()
  })

  it('renders the banned cards list', () => {
    renderDetail('rampaging-ferocidon-banned')
    expect(screen.getByText('Attune with Aether')).toBeInTheDocument()
    expect(screen.getByText('Rampaging Ferocidon')).toBeInTheDocument()
  })

  it('renders the back link', () => {
    renderDetail('rampaging-ferocidon-banned')
    expect(screen.getByRole('link', { name: /back to articles/i })).toBeInTheDocument()
  })

  it('renders the article detail container', () => {
    renderDetail('rampaging-ferocidon-banned')
    expect(screen.getByTestId('article-detail')).toBeInTheDocument()
  })

  it('renders 404 state for unknown slug', () => {
    renderDetail('this-does-not-exist')
    expect(screen.getByTestId('article-not-found')).toBeInTheDocument()
  })

  it('renders Welcome to Ixalan News article', () => {
    renderDetail('welcome-to-ixalan-news')
    expect(screen.getByRole('heading', { name: /welcome to ixalan news/i })).toBeInTheDocument()
  })

  it('renders Be Prepared for RIX Release article', () => {
    renderDetail('be-prepared-for-rix-release')
    expect(screen.getByRole('heading', { name: /be prepared for rix release/i })).toBeInTheDocument()
  })
})
