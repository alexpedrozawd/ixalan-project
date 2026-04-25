import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Navbar } from '@/components/Navbar/Navbar'
import i18n from '../i18n'

afterEach(() => {
  i18n.changeLanguage('en')
})

describe('Navbar', () => {
  it('renders the IXALAN brand logo', () => {
    render(<Navbar />)
    expect(screen.getByText('IXALAN')).toBeInTheDocument()
    expect(screen.getByText('NEWS')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Articles' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders Card Database dropdown trigger', () => {
    render(<Navbar />)
    expect(screen.getByText('Card Database')).toBeInTheDocument()
  })

  it('renders language selector buttons', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /switch to english/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /switch to portuguese/i })).toBeInTheDocument()
  })

  it('marks English flag as active by default', () => {
    render(<Navbar />)
    const enBtn = screen.getByRole('button', { name: /switch to english/i })
    expect(enBtn).toHaveAttribute('aria-pressed', 'true')
  })

  it('switches active language when flag is clicked', () => {
    render(<Navbar />)
    const ptBtn = screen.getByRole('button', { name: /switch to portuguese/i })
    fireEvent.click(ptBtn)
    expect(ptBtn).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: /switch to english/i })).toHaveAttribute('aria-pressed', 'false')
  })

  it('marks active page link with aria-current', () => {
    render(<Navbar activePage="home" />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
  })

  it('does not mark inactive links with aria-current', () => {
    render(<Navbar activePage="home" />)
    expect(screen.getByRole('link', { name: 'Articles' })).not.toHaveAttribute('aria-current')
  })

  it('brand logo links to home page', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /ixalan news home/i })).toHaveAttribute('href', '/')
  })

  it('has accessible aria-label on language group', () => {
    render(<Navbar />)
    expect(screen.getByRole('group', { name: /language selector/i })).toBeInTheDocument()
  })

  it('renders toggle button for mobile', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /toggle navigation/i })).toBeInTheDocument()
  })

  it('has data-testid attribute', () => {
    render(<Navbar />)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })
})
