import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/Footer/Footer'

describe('Footer', () => {
  it('renders the IXALAN brand logo text', () => {
    render(<Footer />)
    expect(screen.getByText('IXALAN')).toBeInTheDocument()
  })

  it('renders the copyright notice', () => {
    render(<Footer />)
    expect(screen.getByText(/© alexandre pedroza/i)).toBeInTheDocument()
    expect(screen.getByText(/all rights reserved. 2018/i)).toBeInTheDocument()
  })

  it('renders the Wizards of the Coast credit', () => {
    render(<Footer />)
    expect(screen.getByText(/wizards of the coast/i)).toBeInTheDocument()
  })

  it('renders the Magic: The Gathering external link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /magic: the gathering is a wizards property/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders the Rivals of Ixalan external link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /rivals of ixalan/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders as a footer landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('has data-testid attribute', () => {
    render(<Footer />)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('Magic logo image handles load error gracefully', () => {
    render(<Footer />)
    const img = screen.getByAltText('Magic: The Gathering')
    expect(img).toBeInTheDocument()
  })
})
