import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import AboutPage from './pages/AboutPage/AboutPage'
import Servicespage from './pages/Servicespage/Servicespage'
import ContactPage from './pages/ContactPage/ContactPage'
import AcademyPage from './pages/AcademyPage/AcademyPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/services' element={<Servicespage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
