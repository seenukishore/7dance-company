import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Award, ArrowUpRight } from 'lucide-react'

import sevenImg from '../assets/seven.png'
import shreyaImg from '../assets/shreya.png'

const INSTRUCTORS_DATA = [
  {
    id: 1,
    name: 'SEVEN',
    fullName: 'Seven',
    role: 'FOUNDER & LEAD CHOREOGRAPHER',
    tagline: 'Licensed Zumba Instructor since 2017',
    clients: 'Honda · Yamaha · Taj Hotels · FC Madras',
    studios: 'Slam Adyar · Slam Perungudi · 7DC Fitness',
    bio: 'Founder of 7 Dance Company. Specializes in high-energy Zumba, stage choreography, and corporate wellness with a focus on discipline and expressive movement.',
    email: 'elumalaiselvaraj0716@gmail.com',
    phone: '+91 90928 64202',
    instagram: 'i_seven_07',
    image: sevenImg,
    glowColor: 'rgba(229,9,20,0.4)',
  },
  {
    id: 2,
    name: 'SHREYA',
    fullName: 'Shreya',
    role: 'CO-FOUNDER & LEAD INSTRUCTOR',
    tagline: 'Licensed Zumba Instructor & Movement Specialist',
    clients: 'Honda · Taj Coromandel · Corporate Fitness',
    studios: 'Slam Adyar · Slam Perungudi · 7DC Fitness',
    bio: 'Pioneering dance wellness and performance choreography. Renowned for creating energetic, inclusive spaces where fitness meets dynamic artistic expression.',
    email: 'shreyakumari2945@gmail.com',
    phone: '+91 91762 74847',
    instagram: 'maddi_shreya',
    image: shreyaImg,
    glowColor: 'rgba(230,120,40,0.35)',
  },
]

function Instructors() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const count = INSTRUCTORS_DATA.length
  const activeItem = INSTRUCTORS_DATA[activeIndex]

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navigate = useCallback(
    (dir) => {
      setActiveIndex((prev) => {
        if (dir === 'next') return (prev + 1) % count
        return (prev - 1 + count) % count
      })
    },
    [count]
  )

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') navigate('prev')
      if (e.key === 'ArrowRight') navigate('next')
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [navigate])

  const [touchStart, setTouchStart] = useState(null)
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX)
  const handleTouchEnd = (e) => {
    if (!touchStart) return
    const touchEnd = e.changedTouches[0].clientX
    if (touchStart - touchEnd > 50) navigate('next')
    if (touchStart - touchEnd < -50) navigate('prev')
    setTouchStart(null)
  }

  const getStyleForIndex = (index) => {
    const isCenter = index === activeIndex
    if (isCenter) {
      return {
        zIndex: 25,
        left: '50%',
        bottom: isMobile ? '38%' : '3%',
        height: isMobile ? '46%' : '85%',
        transform: 'translateX(-50%) scale(1)',
        filter: 'none',
        opacity: 1,
      }
    } else {
      const isNext = (activeIndex + 1) % count === index
      return {
        zIndex: 15,
        left: isNext ? (isMobile ? '92%' : '78%') : (isMobile ? '8%' : '22%'),
        bottom: isMobile ? '44%' : '12%',
        height: isMobile ? '32%' : '55%',
        transform: 'translateX(-50%) scale(0.85)',
        filter: 'blur(3px) brightness(0.5)',
        opacity: isMobile ? 0.3 : 0.65,
      }
    }
  }

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[calc(100vh-73px)] min-h-[640px] bg-[#030303] overflow-hidden select-none flex flex-col justify-between"
    >
      {/* Dynamic Aura Glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-colors duration-700 z-[1]"
        style={{
          background: `radial-gradient(circle 500px at 50% ${isMobile ? '35%' : '50%'}, ${
            activeItem?.glowColor
          } 0%, transparent 80%)`,
        }}
      />

      {/* Ghost Typography */}
      <div className="absolute inset-0 flex items-center justify-center -translate-y-[18%] sm:-translate-y-[10%] pointer-events-none z-[2] overflow-hidden">
        <h1 className="font-display font-black text-white text-[20vw] sm:text-[14vw] leading-none whitespace-nowrap tracking-tight uppercase opacity-10 transition-all duration-500">
          {activeItem?.name}
        </h1>
      </div>

      {/* Top Header Tag */}
      <div className="relative z-30 pt-5 px-6 sm:px-12 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 backdrop-blur-md">
          <Award className="w-3.5 h-3.5 text-crimson" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-off-white">
            Official Leadership
          </span>
        </div>
        <div className="font-mono text-xs tracking-widest text-off-white/40">
          0{activeIndex + 1} / 0{count}
        </div>
      </div>

      {/* 3D Toon Carousel Stage */}
      <div className="absolute inset-0 z-10">
        {INSTRUCTORS_DATA.map((inst, index) => {
          const style = getStyleForIndex(index)
          return (
            <div
              key={inst.id}
              onClick={() => setActiveIndex(index)}
              style={{
                position: 'absolute',
                aspectRatio: '0.65 / 1',
                transition: 'all 650ms cubic-bezier(0.4, 0, 0.2, 1)',
                willChange: 'transform, filter, opacity, left, height, bottom',
                ...style,
              }}
              className="cursor-pointer"
            >
              <img
                src={inst.image}
                alt={inst.name}
                draggable="false"
                className="w-full h-full object-contain object-bottom filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.95)]"
              />
            </div>
          )
        })}
      </div>

      {/* Bottom Panel */}
      <div className="relative z-30 pb-6 px-6 sm:px-12 pointer-events-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div className="max-w-md bg-black/50 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-4 md:p-0 rounded-xl md:rounded-none border border-white/10 md:border-none shadow-2xl md:shadow-none">
            <p className="text-crimson text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase mb-1">
              {activeItem?.role}
            </p>
            <h2 className="font-display text-2xl sm:text-4xl text-white tracking-wide mb-1">
              {activeItem?.fullName}
            </h2>
            <p className="text-xs text-white/80 font-medium mb-2">
              {activeItem?.tagline}
            </p>
            <p className="text-xs sm:text-sm text-off-white/70 line-clamp-2 sm:line-clamp-3 leading-relaxed mb-3">
              {activeItem?.bio}
            </p>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-[11px] text-off-white/60">
              <span className="text-crimson font-medium">Clients:</span>
              <span>{activeItem?.clients}</span>
            </div>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-4 sm:gap-6 pt-1">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('prev')}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/30 hover:border-crimson hover:bg-crimson/20 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
                aria-label="Previous Instructor"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={() => navigate('next')}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/30 hover:border-crimson hover:bg-crimson/20 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
                aria-label="Next Instructor"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 sm:gap-3 font-display text-base sm:text-2xl text-white hover:text-crimson uppercase tracking-wider transition-colors px-4 py-2 sm:p-0 bg-white/5 md:bg-transparent rounded-full md:rounded-none border border-white/10 md:border-none"
            >
              <span>Train With Us</span>
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full border border-white/30 group-hover:border-crimson group-hover:bg-crimson flex items-center justify-center transition-all">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Instructors