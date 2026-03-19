import { getCat, formatZAR, formatDate } from '../utils/helpers'
import styles from './ExpenseRow.module.css'

/**
 * ExpenseRow — a single expense list item with edit/delete actions.
 */
export default function ExpenseRow({ expense, onEdit, onDelete }) {
  const cat = getCat(expense.category)

  return (
    <li className={styles.row}>
      {/* Category icon badge */}
      <div
        className={styles.badge}
        style={{ background: cat.color + '22' }}
        aria-label={cat.label}
      >
        {cat.icon}
      </div>

      {/* Description + meta */}
      <div className={styles.info}>
        <div className={styles.description}>{expense.description}</div>
        <div className={styles.meta}>
          <span className={styles.date}>{formatDate(expense.date)}</span>
          <span
            className={styles.tag}
            style={{ background: cat.color + '22', color: cat.color }}
          >
            {cat.label}
          </span>
          {expense.note && (
            <span className={styles.note}>{expense.note}</span>
          )}
        </div>
      </div>

      {/* Amount + actions */}
      <div className={styles.right}>
        <div className={styles.amount}>{formatZAR(expense.amount)}</div>
        <div className={styles.actions}>
          <button className="btn btn-icon" onClick={onEdit} aria-label="Edit expense">
            Edit
          </button>
          <button
            className="btn btn-icon"
            onClick={onDelete}
            aria-label="Delete expense"
            style={{ color: 'var(--red)' }}
          >
            Del
          </button>
        </div>
      </div>
    </li>
  )
}
