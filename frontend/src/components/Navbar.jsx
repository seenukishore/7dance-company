import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Courses', path: '/courses' },
  { name: 'Instructors', path: '/instructors' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Events', path: '/events' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      // 10px scroll aana udaney activate aagum
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <nav
      className={`sticky -top-[1px] z-50 px-6 sm:px-12 py-3.5 flex items-center justify-between transition-colors duration-200 ${
        scrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-[#050505] border-b border-transparent'
      }`}
    >
      {/* Brand Logo & Name */}
      <Link to="/" className="flex items-center gap-3.5 group">
        <img
          src={logo}
          alt="7 Dance Company"
          className="h-12 w-12 object-contain group-hover:scale-105 transition-transform"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
        <span className="text-sm font-black tracking-[0.24em] uppercase text-white leading-none">
          7 DANCE CO.
        </span>
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors py-1 ${
                isActive ? 'text-crimson' : 'text-off-white/70 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          )
        })}
      </div>

      {/* Book Trial CTA */}
      <Link
        to="/contact"
        className="hidden lg:inline-block bg-crimson hover:bg-crimson-light text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-[0_0_20px_rgba(229,9,20,0.35)] hover:scale-105"
      >
        Book Trial
      </Link>

      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden text-white p-1"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle Navigation"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0A0A0A] border-b border-white/10 flex flex-col p-6 shadow-2xl lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="py-3 border-b border-white/5 text-off-white/80 font-semibold tracking-wider uppercase text-sm hover:text-crimson transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-5 bg-crimson text-white text-center py-3 rounded-sm text-xs font-bold uppercase tracking-widest shadow-md"
          >
            Book Trial
          </Link>
        </div>
      )}
    </nav>
  )
}