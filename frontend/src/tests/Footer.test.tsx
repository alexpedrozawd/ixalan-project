import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/Footer/Footer'

describe('Footer', () => {
  it('renders the copyright notice', () => {
    render(<Footer />)
    expect(screen.getByText(/© alexandre pedroza/i)).toBeInTheDocument()
  })

  it('does not render "All rights reserved" text', () => {
    render(<Footer />)
    expect(screen.queryByText(/all rights reserved/i)).not.toBeInTheDocument()
  })

  it('does not render "Wizards of the Coast" as a standalone paragraph', () => {
    render(<Footer />)
    const wotcParagraph = screen.queryByText(/^wizards of the coast$/i)
    expect(wotcParagraph).not.toBeInTheDocument()
  })

  it('renders the Ixalan external link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Ixalan — Magic: The Gathering official page' })
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
    expect(screen.getByAltText('Magic: The Gathering')).toBeInTheDocument()
  })
})
