import { useState, useMemo } from 'react'
import { INITIAL_EXPENSES, EMPTY_FORM } from '../data/constants'
import { genId, sumExpenses, groupByCategory } from '../utils/helpers'

/**
 * useExpenses — central state hook for the expense tracker.
 * Encapsulates all CRUD logic so App.jsx stays lean.
 */
export function useExpenses() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)
  const [form, setForm]         = useState(EMPTY_FORM)
  const [editId, setEditId]     = useState(null)   // null = adding, number = editing
  const [showForm, setShowForm] = useState(false)
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [filterCat, setFilterCat] = useState('all')
  const [sortBy, setSortBy]       = useState('date')
  const [search, setSearch]       = useState('')

  // ── Derived data ────────────────────────────────────
  const filtered = useMemo(() => {
    let list = [...expenses]
    if (filterCat !== 'all') list = list.filter((e) => e.category === filterCat)
    if (search.trim())
      list = list.filter((e) =>
        e.description.toLowerCase().includes(search.toLowerCase()),
      )
    list.sort((a, b) => {
      if (sortBy === 'date')   return new Date(b.date) - new Date(a.date)
      if (sortBy === 'amount') return b.amount - a.amount
      if (sortBy === 'name')   return a.description.localeCompare(b.description)
      return 0
    })
    return list
  }, [expenses, filterCat, search, sortBy])

  const filteredTotal  = useMemo(() => sumExpenses(filtered),  [filtered])
  const grandTotal     = useMemo(() => sumExpenses(expenses),  [expenses])
  const byCategory     = useMemo(() => groupByCategory(expenses), [expenses])
  const avgTransaction = expenses.length ? grandTotal / expenses.length : 0
  const topCategory    = Object.entries(byCategory).sort((a, b) => b[1] - a[1])[0] ?? null

  // ── Form helpers ─────────────────────────────────────
  function openAdd() {
    setForm(EMPTY_FORM)
    setEditId(null)
    setShowForm(true)
  }

  function openEdit(expense) {
    setForm({
      description: expense.description,
      amount: expense.amount,
      category: expense.category,
      date: expense.date,
      note: expense.note,
    })
    setEditId(expense.id)
    setShowForm(true)
  }

  function closeForm() {
    setShowForm(false)
    setEditId(null)
  }

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  // ── CRUD ─────────────────────────────────────────────
  function saveExpense() {
    const payload = { ...form, amount: Number(form.amount) }

    if (editId !== null) {
      setExpenses((prev) =>
        prev.map((e) => (e.id === editId ? { ...e, ...payload } : e)),
      )
    } else {
      setExpenses((prev) => [...prev, { id: genId(), ...payload }])
    }

    closeForm()
    return editId !== null ? 'updated' : 'added'
  }

  function deleteExpense() {
    setExpenses((prev) => prev.filter((e) => e.id !== deleteTarget))
    setDeleteTarget(null)
  }

  return {
    // state
    expenses,
    form,
    editId,
    showForm,
    deleteTarget,
    filterCat,
    sortBy,
    search,
    // derived
    filtered,
    filteredTotal,
    grandTotal,
    byCategory,
    avgTransaction,
    topCategory,
    // actions
    openAdd,
    openEdit,
    closeForm,
    updateField,
    saveExpense,
    setDeleteTarget,
    deleteExpense,
    setFilterCat,
    setSortBy,
    setSearch,
  }
}
