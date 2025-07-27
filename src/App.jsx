import { Route, Routes } from 'react-router-dom'
import './styles/main.scss'
import Home from './client/pages/Home'
import Tour from './client/pages/Tour'
import About from './client/pages/About'
import Error404 from './client/pages/Error404'
import LayoutDefault from './client/layout/LayoutDefault'
import Hotel from './client/pages/Hotel'
import Blog from './client/pages/Blog'
import Contact from './client/pages/Contact'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotel />} />
          <Route path="/tours" element={<Tour />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
