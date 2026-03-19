import styles from './DeleteConfirmModal.module.css'

/**
 * DeleteConfirmModal — simple confirm/cancel dialog before deleting an expense.
 */
export default function DeleteConfirmModal({ onConfirm, onCancel }) {
  return (
    <div className={styles.backdrop} onClick={onCancel} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.icon}>🗑️</div>
        <div className={styles.title}>Delete Expense?</div>
        <div className={styles.body}>This action cannot be undone.</div>
        <div className={styles.actions}>
          <button className="btn btn-danger" onClick={onConfirm}>
            Yes, Delete
          </button>
          <button className="btn btn-ghost" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
