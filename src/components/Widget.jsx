import React from 'react'
import { useDispatch } from 'react-redux'
import { removeWidget } from '../features/dashboardSlice'

export default function Widget({ widget, categoryId }) {
  const dispatch = useDispatch()
  return (
    <div className="widget-card">
      <button className="remove-btn" title="Remove" onClick={() => dispatch(removeWidget({ categoryId, widgetId: widget.id }))}>×</button>
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
    </div>
  )
}