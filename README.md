# Dynamic Dashboard — React + Redux Toolkit + Vite

A **Dynamic Content Dashboard** built with React, Redux Toolkit, and Vite.  
The dashboard is JSON-driven and allows you to manage categories and widgets interactively.

---

## ✨ Features
- JSON-driven categories & widgets
- Add / remove widgets inside categories
- Add / remove categories
- Search across all widgets
- Redux Toolkit for state management
- Automatic persistence with `localStorage`
- Modal form for adding widgets
- Styled with a **light pastel theme** (blue, white, light grey, subtle pink, and yellow glow)

---

## 📂 Project Structure

```

dynamic-dashboard/
├─ package.json
├─ index.html
├─ README.md
├─ vite.config.js
└─ src/
├─ main.jsx
├─ App.jsx
├─ index.css
├─ store.js
├─ features/
│  └─ dashboardSlice.js
└─ components/
├─ Dashboard.jsx
├─ Category.jsx
├─ Widget.jsx
├─ AddWidgetModal.jsx
└─ SearchBar.jsx

````

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/riteshshinde96k/dynamic-dashboard.git
cd dynamic-dashboard
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Now open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production

```bash
npm run build
```

---

## ⚙️ Usage

* **Add Category** → Click **+ Add Category** and enter a name.
* **Add Widget** → Inside any category, click **+ Add Widget** → fill modal form → widget added.
* **Remove Widget** → Click the × button on any widget.
* **Remove Category** → Use Delete Category button inside category header.
* **Search** → Use search bar to filter widgets across all categories.
* **Reset to Default** → Run in browser console:

  ```js
  localStorage.removeItem('dashboard')
  ```

  Then refresh page.

---

## 🎨 Styling

* Background → **light pastel blue/grey**, with subtle **white & pink hexagon patterns** and a soft **yellow glow** in the bottom-right corner.
* Category & widget cards → white with soft shadows, rounded corners.
* Modal → clean design with blur background when open.

---

## 📦 Built With

* [React](https://react.dev/)
* [Redux Toolkit](https://redux-toolkit.js.org/)
* [Vite](https://vitejs.dev/)

---

## 👨‍💻 Author

* **Ritesh Shinde**
  GitHub: [riteshshinde96k](https://github.com/riteshshinde96k)
