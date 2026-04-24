import { useState } from 'react'
import { Navbar as BsNavbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import type { Language, NavLink } from '@/types'
import styles from './Navbar.module.css'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: `${BASE}/` },
  { label: 'Articles', href: `${BASE}/articles` },
  {
    label: 'Card Database',
    href: `${BASE}/card-database`,
    hasDropdown: true,
    dropdownItems: [
      { label: 'Ixalan', href: `${BASE}/card-database/ixalan` },
      { label: 'Rivals of Ixalan', href: `${BASE}/card-database/rivals` },
    ],
  },
  { label: 'Contact', href: `${BASE}/contact` },
]

interface NavbarProps {
  activePage?: string
}

export function Navbar({ activePage = 'home' }: NavbarProps) {
  const [language, setLanguage] = useState<Language>('en')

  const toggleLanguage = (lang: Language) => setLanguage(lang)

  return (
    <BsNavbar
      expand="md"
      className={styles.navbar}
      data-testid="navbar"
    >
      <Container fluid="xl">
        <BsNavbar.Brand href={`${BASE}/`} className={styles.brand} aria-label="Ixalan News Home">
          <span className={styles.brandIxalan}>IXALAN</span>
          <span className={styles.brandNews}>NEWS</span>
        </BsNavbar.Brand>

        <BsNavbar.Toggle
          aria-controls="main-nav"
          className={styles.toggler}
          aria-label="Toggle navigation menu"
        />

        <BsNavbar.Collapse id="main-nav">
          <Nav className={`ms-auto ${styles.navLinks}`}>
            {NAV_LINKS.map((link) =>
              link.hasDropdown ? (
                <NavDropdown
                  key={link.label}
                  title={link.label}
                  id={`dropdown-${link.label.toLowerCase().replace(' ', '-')}`}
                  className={styles.navDropdown}
                  menuVariant="dark"
                >
                  {link.dropdownItems?.map((item) => (
                    <NavDropdown.Item
                      key={item.label}
                      href={item.href}
                      className={styles.dropdownItem}
                    >
                      {item.label}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link
                  key={link.label}
                  href={link.href}
                  className={`${styles.navLink} ${
                    activePage === link.label.toLowerCase() ? styles.active : ''
                  }`}
                  aria-current={activePage === link.label.toLowerCase() ? 'page' : undefined}
                >
                  {link.label}
                </Nav.Link>
              )
            )}

            <div className={styles.languageFlags} role="group" aria-label="Language selector">
              <button
                className={`${styles.flagBtn} ${language === 'en' ? styles.flagActive : ''}`}
                onClick={() => toggleLanguage('en')}
                aria-label="Switch to English"
                aria-pressed={language === 'en'}
              >
                <img
                  src="https://flagcdn.com/w20/gb.png"
                  srcSet="https://flagcdn.com/w40/gb.png 2x"
                  width="20"
                  height="15"
                  alt="English"
                />
              </button>
              <button
                className={`${styles.flagBtn} ${language === 'pt' ? styles.flagActive : ''}`}
                onClick={() => toggleLanguage('pt')}
                aria-label="Switch to Portuguese"
                aria-pressed={language === 'pt'}
              >
                <img
                  src="https://flagcdn.com/w20/br.png"
                  srcSet="https://flagcdn.com/w40/br.png 2x"
                  width="20"
                  height="15"
                  alt="Português"
                />
              </button>
            </div>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  )
}
