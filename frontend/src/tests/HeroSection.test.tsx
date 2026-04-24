import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroSection } from '@/components/HeroSection/HeroSection'

describe('HeroSection', () => {
  it('renders the section with correct aria-label', () => {
    render(<HeroSection />)
    expect(screen.getByRole('region', { name: /rivals of ixalan/i })).toBeInTheDocument()
  })

  it('renders the main hero title', () => {
    render(<HeroSection />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Rivals of Ixalan:')
  })

  it('renders the CTA button linking to articles', () => {
    render(<HeroSection />)
    const cta = screen.getByRole('link', { name: /see rivals of ixalan articles/i })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '/articles')
  })

  it('applies background-image style from local asset', () => {
    render(<HeroSection />)
    const section = screen.getByTestId('hero-section')
    expect(section.style.backgroundImage).toContain('hero-rivals-ixalan')
  })

  it('has data-testid attribute', () => {
    render(<HeroSection />)
    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
  })

  it('overlay element is aria-hidden', () => {
    render(<HeroSection />)
    const section = screen.getByTestId('hero-section')
    const overlay = section.querySelector('[aria-hidden="true"]')
    expect(overlay).toBeInTheDocument()
  })
})
