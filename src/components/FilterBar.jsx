import { CATEGORIES } from '../data/constants'
import styles from './FilterBar.module.css'

/**
 * FilterBar — search input, sort selector, and category filter pills.
 */
export default function FilterBar({ search, sortBy, filterCat, onSearch, onSort, onFilter }) {
  return (
    <div className={styles.wrapper}>
      {/* Controls row */}
      <div className={styles.controls}>
        <input
          className={`input ${styles.searchInput}`}
          placeholder="Search expenses…"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />
        <select
          className={`input ${styles.sortSelect}`}
          value={sortBy}
          onChange={(e) => onSort(e.target.value)}
        >
          <option value="date">Sort: Date</option>
          <option value="amount">Sort: Amount</option>
          <option value="name">Sort: Name A–Z</option>
        </select>
      </div>

      {/* Category pills */}
      <div className={styles.pills}>
        <button
          className={`${styles.pill} ${filterCat === 'all' ? styles.active : ''}`}
          onClick={() => onFilter('all')}
        >
          All
        </button>
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            className={`${styles.pill} ${filterCat === c.id ? styles.active : ''}`}
            onClick={() => onFilter(c.id)}
            style={filterCat === c.id ? { background: c.color + '33', color: c.color, borderColor: c.color + '66' } : {}}
          >
            {c.icon} {c.label}
          </button>
        ))}
      </div>
    </div>
  )
}
