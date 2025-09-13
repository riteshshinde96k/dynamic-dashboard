import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Category from './Category'
import SearchBar from './SearchBar'
import AddWidgetModal from './AddWidgetModal'
import { addCategory } from '../features/dashboardSlice'

export default function Dashboard() {
  const categories = useSelector(s => s.dashboard.categories)
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [targetCategory, setTargetCategory] = useState(null)

  const openModalFor = (categoryId) => { setTargetCategory(categoryId); setShowModal(true) }

  const handleAddCategory = () => {
    const name = prompt('Category name')
    if (name) dispatch(addCategory({ name }))
  }

  const allWidgets = categories.flatMap(c => c.widgets.map(w => ({ ...w, categoryName: c.name, categoryId: c.id })))
  const results = allWidgets.filter(w => w.name.toLowerCase().includes(search.toLowerCase()) || w.text.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="dashboard">
      <div className="dashboard-controls">
        <SearchBar value={search} onChange={setSearch} />
        <button onClick={handleAddCategory}>+ Add Category</button>
      </div>

      {search ? (
        <section className="search-results">
          <h2>Search results ({results.length})</h2>
          <div className="results-grid">
            {results.map(w => (
              <div key={w.id} className="search-item">
                <h3>{w.name}</h3>
                <p>{w.text}</p>
                <small>{w.categoryName}</small>
              </div>
            ))}
          </div>
        </section>
      ) : (
        // <section className="categories">
        //   {categories.map(c => (
        //     <Category key={c.id} category={c} onAddWidget={() => openModalFor(c.id)} />
        //   ))}
        // </section>
        <section className={`categories ${showModal ? "blurred" : ""}`}>
  {categories.map(c => (
    <Category
      key={c.id}
      category={c}
      onAddWidget={() => openModalFor(c.id)}
    />
  ))}
</section>
      )}

      <AddWidgetModal open={showModal} categoryId={targetCategory} onClose={() => setShowModal(false)} />
    </div>
  )
}