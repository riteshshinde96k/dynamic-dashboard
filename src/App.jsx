import React from 'react'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <div className="app-root">
      <header>
        <h1>Dynamic Dashboard</h1>
      </header>
      <main>
        <Dashboard />
      </main>
    </div>
  )
}