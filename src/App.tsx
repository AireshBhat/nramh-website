import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Departments from './pages/Departments'
import Diagnostics from './pages/Diagnostics'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
      <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
      <Route path="/departments" element={<PublicLayout><Departments /></PublicLayout>} />
      <Route path="/diagnostics" element={<PublicLayout><Diagnostics /></PublicLayout>} />
      <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
    </Routes>
  )
}
