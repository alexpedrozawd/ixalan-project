import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Home } from '@/pages/Home/Home'

function renderHome() {
  return render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )
}

describe('Home page', () => {
  it('renders Navbar', () => {
    renderHome()
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })

  it('renders HeroSection', () => {
    renderHome()
    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
  })

  it('renders NewsSection', () => {
    renderHome()
    expect(screen.getByTestId('news-section')).toBeInTheDocument()
  })

  it('renders AboutSection', () => {
    renderHome()
    expect(screen.getByTestId('about-section')).toBeInTheDocument()
  })

  it('renders Footer', () => {
    renderHome()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders a main landmark', () => {
    renderHome()
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('page title area contains IXALAN', () => {
    renderHome()
    expect(screen.getAllByText(/ixalan/i).length).toBeGreaterThan(0)
  })

  it('sections render in correct document order', () => {
    renderHome()
    const navbar = screen.getByTestId('navbar')
    const hero = screen.getByTestId('hero-section')
    const news = screen.getByTestId('news-section')
    const about = screen.getByTestId('about-section')
    const footer = screen.getByTestId('footer')

    const all = document.body.querySelectorAll('[data-testid]')
    const ids = Array.from(all).map((el) => el.getAttribute('data-testid'))

    expect(ids.indexOf('navbar')).toBeLessThan(ids.indexOf('hero-section'))
    expect(ids.indexOf('hero-section')).toBeLessThan(ids.indexOf('news-section'))
    expect(ids.indexOf('news-section')).toBeLessThan(ids.indexOf('about-section'))
    expect(ids.indexOf('about-section')).toBeLessThan(ids.indexOf('footer'))

    // ensure all are found
    ;[navbar, hero, news, about, footer].forEach((el) => expect(el).toBeInTheDocument())
  })
})
