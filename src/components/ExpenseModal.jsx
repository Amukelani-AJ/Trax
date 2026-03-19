import { CATEGORIES } from '../data/constants'
import styles from './ExpenseModal.module.css'

/**
 * ExpenseModal — modal form for adding or editing an expense.
 * Props:
 *   form      — current form values
 *   editId    — null if adding, number if editing
 *   onChange  — (field, value) => void
 *   onSubmit  — () => void
 *   onClose   — () => void
 */
export default function ExpenseModal({ form, editId, onChange, onSubmit, onClose }) {
  const isEditing = editId !== null

  function handleKey(e) {
    if (e.key === 'Escape') onClose()
  }

  function handleSubmit() {
    if (!form.description.trim()) return alert('Please enter a description.')
    if (!form.amount || isNaN(Number(form.amount)) || Number(form.amount) <= 0)
      return alert('Please enter a valid amount.')
    onSubmit()
  }

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      onKeyDown={handleKey}
      role="dialog"
      aria-modal="true"
      aria-label={isEditing ? 'Edit expense' : 'Add expense'}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.title}>{isEditing ? 'Edit Expense' : 'New Expense'}</div>

        <div className={styles.fields}>
          {/* Description */}
          <div className={styles.field}>
            <label className="label">Description *</label>
            <input
              className="input"
              placeholder="What did you spend on?"
              value={form.description}
              onChange={(e) => onChange('description', e.target.value)}
              autoFocus
            />
          </div>

          {/* Amount + Date */}
          <div className={styles.row2}>
            <div className={styles.field}>
              <label className="label">Amount (ZAR) *</label>
              <input
                className="input"
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                value={form.amount}
                onChange={(e) => onChange('amount', e.target.value)}
              />
            </div>
            <div className={styles.field}>
              <label className="label">Date</label>
              <input
                className="input"
                type="date"
                value={form.date}
                onChange={(e) => onChange('date', e.target.value)}
              />
            </div>
          </div>

          {/* Category */}
          <div className={styles.field}>
            <label className="label">Category</label>
            <select
              className="input"
              value={form.category}
              onChange={(e) => onChange('category', e.target.value)}
            >
              {CATEGORIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.icon}  {c.label}
                </option>
              ))}
            </select>
          </div>

          {/* Note */}
          <div className={styles.field}>
            <label className="label">Note (optional)</label>
            <input
              className="input"
              placeholder="Any extra details…"
              value={form.note}
              onChange={(e) => onChange('note', e.target.value)}
            />
          </div>
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <button className="btn btn-primary" style={{ flex: 1 }} onClick={handleSubmit}>
            {isEditing ? 'Save Changes' : 'Add Expense'}
          </button>
          <button className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
