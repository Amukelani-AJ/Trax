import { formatZAR } from '../utils/helpers'
import { getCat } from '../utils/helpers'
import styles from './StatsRow.module.css'

/**
 * StatsRow — three summary cards: total spent, top category, avg per transaction.
 */
export default function StatsRow({ grandTotal, topCategory, avgTransaction, count }) {
  const topCat = topCategory ? getCat(topCategory[0]) : null

  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <div className="label">Total Spent</div>
        <div className={styles.value} style={{ color: 'var(--accent)' }}>
          {formatZAR(grandTotal)}
        </div>
        <div className={styles.sub}>{count} transaction{count !== 1 ? 's' : ''}</div>
      </div>

      <div className={styles.card}>
        <div className="label">Top Category</div>
        {topCat ? (
          <>
            <div className={styles.catValue}>
              <span>{topCat.icon}</span>
              <span>{topCat.label}</span>
            </div>
            <div className={styles.sub}>{formatZAR(topCategory[1])}</div>
          </>
        ) : (
          <div className={styles.empty}>No data yet</div>
        )}
      </div>

      <div className={styles.card}>
        <div className="label">Avg per Transaction</div>
        <div className={styles.value} style={{ color: 'var(--teal)' }}>
          {formatZAR(avgTransaction)}
        </div>
        <div className={styles.sub}>across all categories</div>
      </div>
    </div>
  )
}
