import { CATEGORIES } from '../data/constants'
import { formatZAR } from '../utils/helpers'
import styles from './CategoryBreakdown.module.css'

/**
 * CategoryBreakdown — horizontal bar chart per category.
 */
export default function CategoryBreakdown({ byCategory, grandTotal }) {
  const active = CATEGORIES.filter((c) => byCategory[c.id])

  return (
    <div className={`card ${styles.wrapper}`}>
      <div className="label" style={{ marginBottom: 18 }}>Breakdown by Category</div>

      {active.length === 0 ? (
        <div className={styles.empty}>No expenses to break down yet.</div>
      ) : (
        <div className={styles.grid}>
          {active.map((cat) => {
            const pct = grandTotal ? ((byCategory[cat.id] || 0) / grandTotal) * 100 : 0
            return (
              <div key={cat.id} className={styles.item}>
                <div className={styles.row}>
                  <span className={styles.catLabel}>
                    {cat.icon} {cat.label}
                  </span>
                  <span className={styles.amount} style={{ color: cat.color }}>
                    {formatZAR(byCategory[cat.id] || 0)}
                  </span>
                </div>
                <div className={styles.bar}>
                  <div
                    className={styles.fill}
                    style={{
                      width: `${pct}%`,
                      background: cat.color,
                      '--bar-width': `${pct}%`,
                    }}
                  />
                </div>
                <div className={styles.pct}>{pct.toFixed(1)}%</div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
