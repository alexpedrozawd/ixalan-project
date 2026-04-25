import { useState } from 'react'
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { ContactModal } from '@/components/ContactModal/ContactModal'
import styles from './Navbar.module.css'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

interface NavbarProps {
  activePage?: string
}

export function Navbar({ activePage = 'home' }: NavbarProps) {
  const { t, i18n } = useTranslation()
  const [showContact, setShowContact] = useState(false)

  const currentLang = i18n.language

  const navLinks = [
    { key: 'home', href: `${BASE}/` },
    { key: 'articles', href: `${BASE}/articles` },
    { key: 'cardDatabase', href: `${BASE}/card-database` },
    { key: 'contact', href: '' },
  ]

  return (
    <>
      <BsNavbar expand="md" className={styles.navbar} data-testid="navbar">
        <Container fluid="xl">
          <BsNavbar.Brand href={`${BASE}/`} className={styles.brand} aria-label="Ixalan News Home">
            <span className={styles.brandIxalan}>IXALAN</span>
            <span className={styles.brandNews}>NEWS</span>
          </BsNavbar.Brand>

          <BsNavbar.Toggle
            aria-controls="main-nav"
            className={styles.toggler}
            aria-label="Toggle navigation"
          />

          <BsNavbar.Collapse id="main-nav">
            <Nav className={`ms-auto ${styles.navLinks}`}>
              {navLinks.map((link) =>
                link.key === 'contact' ? (
                  <Nav.Link
                    key={link.key}
                    as="button"
                    className={`${styles.navLink} ${styles.navLinkBtn}`}
                    onClick={() => setShowContact(true)}
                    aria-haspopup="dialog"
                  >
                    {t('navbar.contact')}
                  </Nav.Link>
                ) : (
                  <Nav.Link
                    key={link.key}
                    href={link.href}
                    className={`${styles.navLink} ${activePage === link.key ? styles.active : ''}`}
                    aria-current={activePage === link.key ? 'page' : undefined}
                  >
                    {t(`navbar.${link.key}`)}
                  </Nav.Link>
                )
              )}

              <div className={styles.languageFlags} role="group" aria-label="Language selector">
                <button
                  className={`${styles.flagBtn} ${currentLang === 'en' ? styles.flagActive : ''}`}
                  onClick={() => i18n.changeLanguage('en')}
                  aria-label="Switch to English"
                  aria-pressed={currentLang === 'en'}
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
                  className={`${styles.flagBtn} ${currentLang === 'pt' ? styles.flagActive : ''}`}
                  onClick={() => i18n.changeLanguage('pt')}
                  aria-label="Switch to Portuguese"
                  aria-pressed={currentLang === 'pt'}
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

      <ContactModal show={showContact} onHide={() => setShowContact(false)} />
    </>
  )
}
