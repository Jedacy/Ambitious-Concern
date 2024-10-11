import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'


const App = () => {
  return (
    <div>
      <Navbar />

        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />}></Route>
            <Route path="/home" element={<Homepage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
          </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App