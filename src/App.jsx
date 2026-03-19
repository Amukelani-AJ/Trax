import { useExpenses } from './hooks/useExpenses'
import { useToast }    from './hooks/useToast'

import Header             from './components/Header'
import StatsRow           from './components/StatsRow'
import CategoryBreakdown  from './components/CategoryBreakdown'
import FilterBar          from './components/FilterBar'
import ExpenseList        from './components/ExpenseList'
import ExpenseModal       from './components/ExpenseModal'
import DeleteConfirmModal from './components/DeleteConfirmModal'
import Toast              from './components/Toast'

import styles from './App.module.css'

export default function App() {
  const {
    form, editId,
    showForm, deleteTarget,
    filterCat, sortBy, search,
    filtered, filteredTotal,
    grandTotal, byCategory, avgTransaction, topCategory,
    openAdd, openEdit, closeForm,
    updateField, saveExpense,
    setDeleteTarget, deleteExpense,
    setFilterCat, setSortBy, setSearch,
    expenses,
  } = useExpenses()

  const { toast, showToast } = useToast()

  function handleSave() {
    const result = saveExpense()
    showToast(result === 'updated' ? 'Expense updated ✓' : 'Expense added ✓', 'success')
  }

  function handleDelete() {
    deleteExpense()
    showToast('Expense deleted', 'error')
  }

  return (
    <>
      <Header onAddClick={openAdd} />

      <main className={styles.main}>
        <StatsRow
          grandTotal={grandTotal}
          topCategory={topCategory}
          avgTransaction={avgTransaction}
          count={expenses.length}
        />

        <CategoryBreakdown byCategory={byCategory} grandTotal={grandTotal} />

        <FilterBar
          search={search}
          sortBy={sortBy}
          filterCat={filterCat}
          onSearch={setSearch}
          onSort={setSortBy}
          onFilter={setFilterCat}
        />

        <ExpenseList
          expenses={filtered}
          total={filteredTotal}
          onEdit={openEdit}
          onDelete={setDeleteTarget}
        />
      </main>

      {showForm && (
        <ExpenseModal
          form={form}
          editId={editId}
          onChange={updateField}
          onSubmit={handleSave}
          onClose={closeForm}
        />
      )}

      {deleteTarget !== null && (
        <DeleteConfirmModal
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}

      <Toast message={toast?.message} type={toast?.type} />
    </>
  )
}
