import Home from './pages/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start-now" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
