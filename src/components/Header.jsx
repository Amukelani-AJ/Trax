import styles from './Header.module.css'

/**
 * Header — sticky top bar with branding and primary CTA.
 */
export default function Header({ onAddClick }) {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.logo}>₵</span>
        <div>
          <div className={styles.name}>Spendly</div>
          <div className={styles.tagline}>Personal Expense Tracker</div>
        </div>
      </div>

      <button className="btn btn-primary" onClick={onAddClick}>
        <span className={styles.plus}>+</span>
        Add Expense
      </button>
    </header>
  )
}
