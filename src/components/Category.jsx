import React from 'react'
import Widget from './Widget'

export default function Category({ category, onAddWidget }) {
  return (
    <div className="category-card">
      <div className="category-header">
        <h2>{category.name}</h2>
        <button onClick={onAddWidget}>+ Add Widget</button>
      </div>
      <div className="widgets-list">
        {category.widgets.map(w => (
          <Widget key={w.id} widget={w} categoryId={category.id} />
        ))}
        {category.widgets.length === 0 && <p className="empty">No widgets yet. Add one!</p>}
      </div>
    </div>
  )
}