import { CATEGORIES } from '../data/constants'

/**
 * Format a number as South African Rand currency.
 * @param {number} amount
 * @returns {string}
 */
export function formatZAR(amount) {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 2,
  }).format(amount)
}

/**
 * Format a date string (YYYY-MM-DD) to a readable label.
 * @param {string} dateStr
 * @returns {string}
 */
export function formatDate(dateStr) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-ZA', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

/**
 * Find a category object by id. Falls back to 'other'.
 * @param {string} id
 * @returns {object}
 */
export function getCat(id) {
  return CATEGORIES.find((c) => c.id === id) || CATEGORIES[CATEGORIES.length - 1]
}

/**
 * Generate a simple incrementing ID (not UUID — fine for local state).
 */
let _nextId = 100
export function genId() {
  return ++_nextId
}

/**
 * Calculate total amount from an array of expense objects.
 * @param {Array} expenses
 * @returns {number}
 */
export function sumExpenses(expenses) {
  return expenses.reduce((acc, e) => acc + e.amount, 0)
}

/**
 * Group expenses by category and return a map { categoryId: totalAmount }.
 * @param {Array} expenses
 * @returns {Object}
 */
export function groupByCategory(expenses) {
  return expenses.reduce((map, e) => {
    map[e.category] = (map[e.category] || 0) + e.amount
    return map
  }, {})
}
