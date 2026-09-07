import { useState } from 'react'
import { Link } from 'react-router-dom'
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

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-jet-black border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 group">
        <img
          src={logo}
          alt="7 Dance Company"
          className="h-10 w-10 sm:h-11 sm:w-11 object-contain shrink-0 group-hover:scale-105 transition-transform"
        />

        <span className="text-sm font-semibold tracking-[0.28em] uppercase text-off-white hidden sm:block">
          7 DANCE CO.
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-7 text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-off-white/80 hover:text-crimson transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Book Trial CTA */}
      <Link
        to="/contact"
        className="hidden lg:block bg-crimson text-white px-5 py-2.5 text-sm font-medium hover:bg-crimson-light transition-colors"
      >
        Book Trial
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-off-white"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-jet-black border-b border-white/10 flex flex-col lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="px-6 py-4 border-b border-white/5 text-off-white/80 hover:text-crimson hover:bg-white/5"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="m-4 bg-crimson text-white text-center py-3 font-medium"
          >
            Book Trial
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar