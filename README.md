# 💰 Spendly — Personal Expense Tracker

A clean, portfolio-ready CRUD expense tracker built with **React + Vite**.  
Dark theme, ZAR currency, category breakdowns, filter/search, and smooth animations.

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

---

## 🏗️ Project Structure

```
spendly/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx               # Root component — wires everything together
    ├── App.module.css
    ├── index.css             # Global styles, CSS variables, resets
    │
    ├── data/
    │   └── constants.js      # CATEGORIES list, INITIAL_EXPENSES, EMPTY_FORM
    │
    ├── utils/
    │   └── helpers.js        # formatZAR, formatDate, getCat, sumExpenses, groupByCategory
    │
    ├── hooks/
    │   ├── useExpenses.js    # All CRUD state + derived data (filtered, totals, etc.)
    │   └── useToast.js       # Lightweight toast notification hook
    │
    └── components/
        ├── Header.jsx / .module.css          — sticky top bar + "Add Expense" CTA
        ├── StatsRow.jsx / .module.css        — 3 summary stat cards
        ├── CategoryBreakdown.jsx / .module.css  — animated per-category bar chart
        ├── FilterBar.jsx / .module.css       — search input, sort selector, filter pills
        ├── ExpenseList.jsx / .module.css     — scrollable list with totals header
        ├── ExpenseRow.jsx / .module.css      — individual expense item with edit/delete
        ├── ExpenseModal.jsx / .module.css    — add / edit form modal
        ├── DeleteConfirmModal.jsx / .module.css — delete confirmation dialog
        └── Toast.jsx / .module.css           — bottom-right status notification
```

---

## ✨ Features

| Feature | Detail |
|---|---|
| **Create** | Add expenses with description, amount, date, category, note |
| **Read** | List view with stats dashboard and category breakdown |
| **Update** | Edit any expense via modal form |
| **Delete** | Delete with confirmation dialog |
| **Filter** | Filter by category pill buttons |
| **Search** | Real-time description search |
| **Sort** | Sort by date, amount, or name |
| **Stats** | Total spent, top category, avg per transaction |
| **Responsive** | Mobile-friendly layout |

---

## 🎨 Tech Stack

- **React 18** — functional components + hooks
- **Vite 5** — fast dev server and build tool
- **CSS Modules** — scoped styles per component, no CSS-in-JS dependency
- **Google Fonts** — Syne (headings) + DM Sans (body)
- No external UI libraries — pure React + CSS

---

## 📦 Build for Production

```bash
npm run build
# Output goes to /dist — ready to deploy on Vercel, Netlify, or GitHub Pages
```
