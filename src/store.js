import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from './features/dashboardSlice'

const store = configureStore({
  reducer: { dashboard: dashboardReducer },
})

// Persist on every change
store.subscribe(() => {
  try {
    const state = store.getState().dashboard
    localStorage.setItem('dashboard', JSON.stringify(state))
  } catch (err) {
    console.warn('Failed to save state', err)
  }
})

export default store