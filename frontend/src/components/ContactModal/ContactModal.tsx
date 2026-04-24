import { useState } from 'react'
import { Modal, Form, Button, Spinner } from 'react-bootstrap'
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

    if (!name.trim()) return setErrorMsg('Name is required.')
    if (!email.trim()) return setErrorMsg('E-mail is required.')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return setErrorMsg('Invalid e-mail address.')
    if (!message.trim()) return setErrorMsg('Message is required.')

    if (!FORMSPREE_URL) {
      setErrorMsg('Form not configured yet. Please try again later.')
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
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send message.')
      setStatus('error')
    }
  }

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      contentClassName={styles.modalContent}
    >
      <Modal.Header closeButton closeVariant="white" className={styles.modalHeader}>
        <Modal.Title className={styles.modalTitle}>Contact</Modal.Title>
      </Modal.Header>

      <Modal.Body className={styles.modalBody}>
        {status === 'success' ? (
          <div className={styles.successMsg} role="alert">
            <span className={styles.successIcon}>✓</span>
            <p>Message sent successfully! I'll get back to you soon.</p>
          </div>
        ) : (
          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className={styles.formGroup}>
              <Form.Label className={styles.label}>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => { setErrorMsg(''); setName(sanitize(e.target.value)) }}
                placeholder="Your name"
                className={styles.input}
                disabled={status === 'submitting'}
              />
            </Form.Group>

            <Form.Group className={styles.formGroup}>
              <Form.Label className={styles.label}>E-mail</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => { setErrorMsg(''); setEmail(sanitize(e.target.value)) }}
                placeholder="your@email.com"
                className={styles.input}
                disabled={status === 'submitting'}
              />
            </Form.Group>

            <Form.Group className={styles.formGroup}>
              <Form.Label className={styles.label}>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={message}
                onChange={(e) => { setErrorMsg(''); setMessage(sanitize(e.target.value)) }}
                placeholder="Write your message..."
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
                  ? <><Spinner as="span" animation="border" size="sm" className="me-2" />Sending…</>
                  : 'Send'}
              </Button>
              <Button
                type="button"
                className={styles.btnCancel}
                onClick={handleClose}
                disabled={status === 'submitting'}
              >
                Cancel
              </Button>
            </div>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  )
}
