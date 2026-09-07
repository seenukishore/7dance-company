import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logo}
              alt="7 Dance Company"
              className="h-10 w-10 object-contain shrink-0"
            />
            <span className="text-sm font-semibold tracking-[0.28em] uppercase text-off-white">
              7 DANCE CO.
            </span>
          </div>

          <p className="text-sm text-off-white/60 leading-relaxed mb-4">
            Nurturing talent, elevating performance, and inspiring passion since 2016.
          </p>

          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/__7dc__?igsi=MXB6bHp6aWd6amg2MQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/5 flex items-center justify-center hover:bg-crimson transition-colors"
              title="Instagram"
            >
              <svg
                className="w-4 h-4 fill-none stroke-current"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/5 flex items-center justify-center hover:bg-crimson transition-colors"
              title="Facebook"
            >
              <svg
                className="w-4 h-4 fill-none stroke-current"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/5 flex items-center justify-center hover:bg-crimson transition-colors"
              title="YouTube"
            >
              <svg
                className="w-4 h-4 fill-none stroke-current"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <polygon
                  points="10 15 15 12 10 9 10 15"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xs tracking-widest text-crimson mb-4 uppercase">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-off-white/70">
            <li>
              <Link to="/" className="hover:text-crimson">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-crimson">
                About
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-crimson">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/instructors" className="hover:text-crimson">
                Instructors
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-crimson">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-crimson">
                Events
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-crimson">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-xs tracking-widest text-crimson mb-4 uppercase">
            Programs
          </h3>

          <ul className="space-y-3 text-sm text-off-white/70">
            <li>Western Dance</li>
            <li>Freestyle</li>
            <li>Bollywood</li>
            <li>Hip Hop</li>
            <li>Locking & Popping</li>
            <li>Zumba</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs tracking-widest text-crimson mb-4 uppercase">
            Contact
          </h3>

          <div className="space-y-3 text-sm text-off-white/70">
            <p>3/165, 2nd floor, ECR, Neelankarai, Chennai - 600115</p>

            <p>
              +91 90928 64202
              <br />
              +91 91762 74847
            </p>

            <p>Elumalai7dc@gmail.com</p>
          </div>

          <Link
            to="/contact"
            className="inline-block mt-4 bg-crimson text-white px-5 py-2.5 text-sm font-medium hover:bg-crimson-light transition-colors"
          >
            Book Free Trial
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 px-8 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-off-white/50 gap-2">
        <p>© 2026 7 Dance Company. All rights reserved.</p>
        <p>Established 2016 · Neelankarai, Chennai</p>
      </div>
    </footer>
  )
}

export default Footer