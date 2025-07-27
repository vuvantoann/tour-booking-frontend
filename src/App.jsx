import { Route, Routes } from 'react-router-dom'
import './styles/main.scss'
import Home from './client/pages/Home'
import Tour from './client/pages/Tour'
import About from './client/pages/About'
import Error404 from './client/pages/Error404'
import LayoutDefault from './client/layout/LayoutDefault'
function App() {
  return (
    <>
      <LayoutDefault />
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
