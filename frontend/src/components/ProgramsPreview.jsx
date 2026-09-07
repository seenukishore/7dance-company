import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Star, Clock } from 'lucide-react'
import { getCourses } from '../api/courses'
import { images } from '../data/images'

const courseImages = {
  'Western Dance': images.programWestern,
  'Freestyle': images.programFreestyle,
  'Bollywood': images.programBollywood,
  'Hip Hop': images.programHipHop,
  'Locking & Popping': 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=800&q=80&auto=format&fit=crop',
  'Zumba': 'https://images.unsplash.com/photo-1527933053326-89d1746b76b9?w=800&q=80&auto=format&fit=crop',
  'Competition Training': 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80&auto=format&fit=crop',
  'Performance & Choreography': 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80&auto=format&fit=crop',
}

function ProgramsPreview() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    getCourses()
      .then((data) => setCourses(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <section className="bg-jet-black py-24">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-crimson text-xs tracking-[0.25em] uppercase mb-3 font-semibold">Programs</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wide">
            Master Your <span className="text-crimson">Craft</span>
          </h2>
        </motion.div>

        {/* 8 Programs Responsive Grid with Stagger & Glow Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {courses.map((course, i) => {
            const isWestern = course.name === 'Western Dance'
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.12 }}
                whileHover={{ y: -8 }}
                className="relative h-96 overflow-hidden group border border-white/10 hover:border-crimson/80 bg-charcoal flex flex-col justify-end transition-colors duration-500 shadow-lg hover:shadow-[0_10px_30px_rgba(229,9,20,0.3)]"
              >
                <img
                  src={courseImages[course.name] || images.programWestern}
                  alt={course.name}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    isWestern ? 'mix-blend-screen bg-black filter contrast-125' : ''
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

                {course.tag && (
                  <span className="absolute top-4 left-4 bg-crimson text-white text-[10px] tracking-widest uppercase px-3 py-1 font-semibold z-10 shadow-md">
                    {course.tag}
                  </span>
                )}

                <div className="absolute bottom-5 left-5 right-5 z-10 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <p className="font-display text-xl text-white mb-1 tracking-wide">{course.name}</p>
                  <div className="flex items-center gap-4 text-xs text-off-white/75">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-crimson" /> {course.level}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-crimson" /> {course.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              to="/courses"
              className="inline-block border border-white/30 text-white px-8 py-3.5 text-sm font-medium hover:bg-white hover:text-jet-black transition-colors"
            >
              Explore Detailed Curriculum →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProgramsPreview