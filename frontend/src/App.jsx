import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SplashScreen from './components/SplashScreen'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Instructors from './pages/Instructors'
import Gallery from './pages/Gallery'
import Events from './pages/Events'
import Contact from './pages/Contact'

function App() {
  return (
    <SplashScreen>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SplashScreen>
  )
}

export default App