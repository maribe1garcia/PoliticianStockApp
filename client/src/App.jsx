import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Politicians from './pages/Politicians'
import PoliticianDetail from './pages/PoliticianDetail'
import Trades from './pages/Trades'
import Analytics from './pages/Analytics'
import About from './pages/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="politicians" element={<Politicians />} />
        <Route path="politicians/:id" element={<PoliticianDetail />} />
        <Route path="trades" element={<Trades />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
