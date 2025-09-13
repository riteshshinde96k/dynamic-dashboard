import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addWidget } from '../features/dashboardSlice'

export default function AddWidgetModal({ open, categoryId, onClose }) {
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (!open) {
      setName('')
      setText('')
    }
  }, [open])

  if (!open) return null

  const submit = (e) => {
    e.preventDefault()
    if (!categoryId) return alert('No category selected')
    if (!name.trim()) return alert('Widget name required')
    dispatch(addWidget(categoryId, name.trim(), text.trim() || 'Random text'))
    onClose()
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Add Widget</h3>
        <form onSubmit={submit}>
          <label>
            Widget name
            <input value={name} onChange={e => setName(e.target.value)} />
          </label>
          <label>
            Widget text
            <textarea value={text} onChange={e => setText(e.target.value)} />
          </label>
          <div className="modal-actions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  )
}