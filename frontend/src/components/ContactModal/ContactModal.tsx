import { useState } from 'react'
import { Modal, Form, Button, Spinner } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import styles from './ContactModal.module.css'

interface ContactModalProps {
  show: boolean
  onHide: () => void
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL ?? ''

function sanitize(value: string): string {
  return value.replace(/[<>"'`;\\]/g, '').trimStart()
}

export function ContactModal({ show, onHide }: ContactModalProps) {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const reset = () => {
    setName('')
    setEmail('')
    setMessage('')
    setStatus('idle')
    setErrorMsg('')
  }

  const handleClose = () => {
    reset()
    onHide()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim()) return setErrorMsg(t('contact.errors.nameRequired'))
    if (!email.trim()) return setErrorMsg(t('contact.errors.emailRequired'))
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return setErrorMsg(t('contact.errors.invalidEmail'))
    if (!message.trim()) return setErrorMsg(t('contact.errors.messageRequired'))

    if (!FORMSPREE_URL) {
      setErrorMsg(t('contact.errors.notConfigured'))
      setStatus('error')
      return
    }

    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message, _replyto: email }),
      })
      if (!res.ok) throw new Error(`Error ${res.status}`)
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : t('contact.errors.failed'))
      setStatus('error')
    }
  }

  return (
    <Modal show={show} onHide={handleClose} centered contentClassName={styles.modalContent}>
      <Modal.Header closeButton closeVariant="white" className={styles.modalHeader}>
        <Modal.Title className={styles.modalTitle}>{t('contact.title')}</Modal.Title>
      </Modal.Header>

      <Modal.Body className={styles.modalBody}>
        {status === 'success' ? (
          <div className={styles.successMsg} role="alert">
            <span className={styles.successIcon}>✓</span>
            <p>{t('contact.success')}</p>
          </div>
        ) : (
          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className={styles.formGroup}>
              <Form.Label className={styles.label}>{t('contact.name')}</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => { setErrorMsg(''); setName(sanitize(e.target.value)) }}
                placeholder={t('contact.namePlaceholder')}
                className={styles.input}
                disabled={status === 'submitting'}
              />
            </Form.Group>

            <Form.Group className={styles.formGroup}>
              <Form.Label className={styles.label}>{t('contact.email')}</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => { setErrorMsg(''); setEmail(sanitize(e.target.value)) }}
                placeholder={t('contact.emailPlaceholder')}
                className={styles.input}
                disabled={status === 'submitting'}
              />
            </Form.Group>

            <Form.Group className={styles.formGroup}>
              <Form.Label className={styles.label}>{t('contact.message')}</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={message}
                onChange={(e) => { setErrorMsg(''); setMessage(sanitize(e.target.value)) }}
                placeholder={t('contact.messagePlaceholder')}
                className={styles.textarea}
                disabled={status === 'submitting'}
              />
            </Form.Group>

            {errorMsg && (
              <p className={styles.errorMsg} role="alert">{errorMsg}</p>
            )}

            <div className={styles.actions}>
              <Button
                type="submit"
                className={styles.btnSend}
                disabled={status === 'submitting'}
              >
                {status === 'submitting'
                  ? <><Spinner as="span" animation="border" size="sm" className="me-2" />{t('contact.sending')}</>
                  : t('contact.send')}
              </Button>
              <Button
                type="button"
                className={styles.btnCancel}
                onClick={handleClose}
                disabled={status === 'submitting'}
              >
                {t('contact.cancel')}
              </Button>
            </div>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  )
}
