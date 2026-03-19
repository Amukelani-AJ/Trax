import styles from './Toast.module.css'

/**
 * Toast — bottom-right notification popup.
 * Props:
 *   message — string to display
 *   type    — 'success' | 'error'
 */
export default function Toast({ message, type = 'success' }) {
  if (!message) return null

  return (
    <div
      className={styles.toast}
      style={{
        borderColor: type === 'error' ? 'var(--red)' : 'var(--accent)',
        color:       type === 'error' ? 'var(--red)' : 'var(--accent)',
      }}
      role="status"
      aria-live="polite"
    >
      {type === 'success' ? '✓' : '✕'} {message}
    </div>
  )
}
