import ExpenseRow from './ExpenseRow'
import { formatZAR } from '../utils/helpers'
import styles from './ExpenseList.module.css'

/**
 * ExpenseList — scrollable list of expense rows with a totals footer.
 */
export default function ExpenseList({ expenses, total, onEdit, onDelete }) {
  return (
    <div className={`card ${styles.wrapper}`}>
      {/* List header */}
      <div className={styles.listHeader}>
        <span className={styles.count}>
          {expenses.length} expense{expenses.length !== 1 ? 's' : ''}
        </span>
        <span className={styles.total}>{formatZAR(total)}</span>
      </div>

      {/* Rows */}
      {expenses.length === 0 ? (
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>🪙</span>
          <span>No expenses found. Try a different filter.</span>
        </div>
      ) : (
        <ul className={styles.list}>
          {expenses.map((exp) => (
            <ExpenseRow
              key={exp.id}
              expense={exp}
              onEdit={() => onEdit(exp)}
              onDelete={() => onDelete(exp.id)}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
