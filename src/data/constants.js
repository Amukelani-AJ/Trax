export const CATEGORIES = [
  { id: 'food',          label: 'Food & Drink',   icon: '🍜', color: '#FF6B6B' },
  { id: 'transport',     label: 'Transport',       icon: '🚗', color: '#4ECDC4' },
  { id: 'housing',       label: 'Housing',         icon: '🏠', color: '#45B7D1' },
  { id: 'health',        label: 'Health',          icon: '💊', color: '#96CEB4' },
  { id: 'entertainment', label: 'Entertainment',   icon: '🎬', color: '#FFEAA7' },
  { id: 'shopping',      label: 'Shopping',        icon: '🛍️', color: '#DDA0DD' },
  { id: 'education',     label: 'Education',       icon: '📚', color: '#98D8C8' },
  { id: 'other',         label: 'Other',           icon: '📌', color: '#F0A500' },
]

export const INITIAL_EXPENSES = [
  { id: 1, description: 'Woolworths grocery run', amount: 842.50, category: 'food',          date: '2026-03-17', note: 'Weekly groceries' },
  { id: 2, description: 'Uber to airport',         amount: 215.00, category: 'transport',    date: '2026-03-15', note: '' },
  { id: 3, description: 'Netflix subscription',    amount: 199.00, category: 'entertainment',date: '2026-03-14', note: 'Monthly plan' },
  { id: 4, description: 'Gym membership',          amount: 450.00, category: 'health',       date: '2026-03-01', note: '' },
  { id: 5, description: 'Takealot order',          amount: 675.00, category: 'shopping',     date: '2026-03-10', note: 'Books + charging cable' },
]

export const EMPTY_FORM = {
  description: '',
  amount: '',
  category: 'food',
  date: new Date().toISOString().slice(0, 10),
  note: '',
}
