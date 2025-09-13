import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialData = {
  categories: [
    {
      id: 'cspm',
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: 'w1', name: 'Widget A', text: 'Random text A' },
        { id: 'w2', name: 'Widget B', text: 'Random text B' }
      ]
    },
    {
      id: 'security',
      name: 'Security Overview',
      widgets: [
        { id: 'w3', name: 'Risk Summary', text: 'Random risk text' }
      ]
    }
  ]
}

const persisted = typeof localStorage !== 'undefined' && localStorage.getItem('dashboard')
const initialState = persisted ? JSON.parse(persisted) : initialData

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: {
      reducer(state, action) {
        const { categoryId, widget } = action.payload
        const c = state.categories.find(ct => ct.id === categoryId)
        if (c) c.widgets.push(widget)
      },
      prepare(categoryId, name, text) {
        return { payload: { categoryId, widget: { id: nanoid(), name, text } } }
      }
    },
    removeWidget(state, action) {
      const { categoryId, widgetId } = action.payload
      const c = state.categories.find(ct => ct.id === categoryId)
      if (c) c.widgets = c.widgets.filter(w => w.id !== widgetId)
    },
    addCategory(state, action) {
      const { name } = action.payload
      state.categories.push({ id: nanoid(), name, widgets: [] })
    }
  }
})

export const { addWidget, removeWidget, addCategory } = dashboardSlice.actions
export default dashboardSlice.reducer

