import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutSection } from '@/components/AboutSection/AboutSection'

describe('AboutSection', () => {
  it('renders the About Ixalan heading', () => {
    render(<AboutSection />)
    expect(screen.getByRole('heading', { name: /about ixalan/i, level: 2 })).toBeInTheDocument()
  })

  it('applies background-image from local asset', () => {
    render(<AboutSection />)
    const section = screen.getByTestId('about-section')
    expect(section.style.backgroundImage).toContain('about-ixalan')
  })

  it('renders the overlay element as aria-hidden', () => {
    render(<AboutSection />)
    const section = screen.getByTestId('about-section')
    expect(section.querySelector('[aria-hidden="true"]')).toBeInTheDocument()
  })

  it('renders the descriptive text about Ixalan', () => {
    render(<AboutSection />)
    expect(screen.getByText(/ixalan is a plane/i)).toBeInTheDocument()
  })

  it('renders the first card with descriptive alt text', () => {
    render(<AboutSection />)
    expect(screen.getByAltText(/huatli, warrior poet/i)).toBeInTheDocument()
  })

  it('renders the second card with descriptive alt text', () => {
    render(<AboutSection />)
    expect(screen.getByAltText(/kumena, tyrant of orazca/i)).toBeInTheDocument()
  })

  it('card images have lazy loading', () => {
    render(<AboutSection />)
    screen.getAllByRole('img').forEach((img) => {
      expect(img).toHaveAttribute('loading', 'lazy')
    })
  })

  it('renders the section with correct aria-label', () => {
    render(<AboutSection />)
    expect(screen.getByRole('region', { name: /about ixalan/i })).toBeInTheDocument()
  })

  it('has data-testid attribute', () => {
    render(<AboutSection />)
    expect(screen.getByTestId('about-section')).toBeInTheDocument()
  })
})
