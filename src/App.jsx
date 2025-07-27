import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/client/Home'
import Tour from './pages/client/Tour'
import About from './pages/client/About'
import Error404 from './pages/client/Error404'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tour />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
