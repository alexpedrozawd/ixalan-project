import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutSection } from '@/components/AboutSection/AboutSection'

describe('AboutSection', () => {
  it('renders the About Ixalan heading', () => {
    render(<AboutSection />)
    expect(screen.getByRole('heading', { name: /about ixalan/i, level: 2 })).toBeInTheDocument()
  })

  it('renders the pirate artwork with descriptive alt text', () => {
    render(<AboutSection />)
    expect(screen.getByAltText(/admiral beckett brass/i)).toBeInTheDocument()
  })

  it('renders the first stacked card', () => {
    render(<AboutSection />)
    expect(screen.getByAltText(/huatli, warrior poet/i)).toBeInTheDocument()
  })

  it('renders the second stacked card', () => {
    render(<AboutSection />)
    expect(screen.getByAltText(/kumena, tyrant of orazca/i)).toBeInTheDocument()
  })

  it('renders the descriptive text about Ixalan', () => {
    render(<AboutSection />)
    expect(screen.getByText(/ixalan is a plane/i)).toBeInTheDocument()
  })

  it('all images have lazy loading', () => {
    render(<AboutSection />)
    const images = screen.getAllByRole('img')
    images.forEach((img) => {
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
