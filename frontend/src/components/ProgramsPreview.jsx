import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Clock, Star } from 'lucide-react'
import { getCourses } from '../api/courses'
import { images } from '../data/images'

// ✅ LOCAL ASSET IMPORTS
import lockingImg from '../assets/locking.png'
import breakingImg from '../assets/breaking.jpg'
import bharatanatyamImg from '../assets/bharatanatyam.png'

const previewImagesMap = {
  'Western Dance': images?.programWestern || 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&q=80&auto=format&fit=crop',
  'Hip Hop': images?.programHipHop || 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&q=80&auto=format&fit=crop',
  
  // Exact local assets
  'Locking & Popping': lockingImg,
  'Breaking': breakingImg,
  'Bharatanatyam': bharatanatyamImg,

  'Bollywood': images?.programBollywood || 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=800&q=80&auto=format&fit=crop',
  'Freestyle': images?.programFreestyle || 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80&auto=format&fit=crop',

  // Original images
  'Zumba': 'https://images.unsplash.com/photo-1527933053326-89d1746b76b9?w=800&q=80&auto=format&fit=crop',
  'Yoga': 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80&auto=format&fit=crop',
  'Competition Training': 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80&auto=format&fit=crop',
  'Performance & Choreography': 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80&auto=format&fit=crop',
}

export default function ProgramsPreview() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    getCourses()
      .then((data) => setCourses(data || []))
      .catch((err) => console.error(err))
  }, [])

  return (
    <section className="bg-[#050505] py-24 px-6 sm:px-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-crimson text-xs font-semibold tracking-[0.3em] uppercase mb-2">
              Curriculum Preview
            </p>
            <h2 className="text-3xl sm:text-5xl font-display uppercase tracking-wide text-white">
              Featured <span className="text-crimson">Disciplines</span>
            </h2>
          </div>
          <Link
            to="/courses"
            className="text-xs uppercase font-semibold tracking-widest text-off-white/80 hover:text-crimson transition-colors flex items-center gap-1.5"
          >
            Explore All 11 Courses →
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.slice(0, 8).map((course, idx) => {
            const isWestern = course.name === 'Western Dance'
            const resolvedImg = previewImagesMap[course.name] || images?.programWestern

            return (
              <motion.div
                key={course.id || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-charcoal border border-white/10 hover:border-crimson/70 transition-colors group flex flex-col justify-between overflow-hidden relative shadow-lg"
              >
                <div className="relative h-60 overflow-hidden bg-black">
                  <img
                    src={resolvedImg}
                    alt={course.name}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      isWestern ? 'mix-blend-screen bg-black filter contrast-125' : ''
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30 pointer-events-none" />

                  {course.tag && (
                    <span className="absolute top-3 left-3 bg-crimson text-white text-[10px] tracking-widest uppercase px-3 py-1 font-semibold z-10 shadow-md">
                      {course.tag}
                    </span>
                  )}

                  <Link
                    to="/courses"
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white group-hover:bg-crimson group-hover:border-crimson transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-display text-xl text-white tracking-wide leading-tight group-hover:text-crimson transition-colors">
                      {course.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-1">
                  <div className="flex items-center justify-between text-xs text-off-white/70 mb-3 pb-3 border-b border-white/5">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-crimson" /> {course.duration}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-crimson font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-crimson" /> {course.level || 'All Levels'}
                    </span>
                  </div>

                  <p className="text-xs text-off-white/60 line-clamp-2 leading-relaxed mb-4">
                    {course.description}
                  </p>

                  <Link
                    to="/courses"
                    className="text-xs font-semibold text-white group-hover:text-crimson transition-colors inline-block text-right"
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}