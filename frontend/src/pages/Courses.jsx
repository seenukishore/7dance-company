import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Award, Users2, Clock3, Flame, X, Check, Calendar, ArrowRight } from 'lucide-react'
import CourseCard from '../components/CourseCard'
import { getCourses } from '../api/courses'
import { images } from '../data/images'

const courseImagesMap = {
  'Western Dance': images.programWestern || 'https://www.nicepng.com/png/detail/10-104979_western-dance-png.png',
  'Freestyle': images.programFreestyle || 'https://blog.tmilly.tv/wp-content/uploads/2023/02/How-to-Freestyle-Dance_-The-Ultimate-Guide-1-1920x1281.jpg',
  'Bollywood': images.programBollywood || 'https://www.chennaitop10.com/wp-content/uploads/2024/08/Meet-the-Trainer-Bringing-Bollywood-Dance-to-the-Fitness-World-with-Glow-by-POPSUGAR.png',
  'Hip Hop': images.programHipHop || 'https://img.freepik.com/premium-photo/dynamic-image-young-talented-guy-stylish-clothes-dancing-contemp-hiphop-against-pink-purple_489646-24289.jpg',
  'Locking & Popping': 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=800&q=80&auto=format&fit=crop',
  'Zumba': 'https://images.unsplash.com/photo-1527933053326-89d1746b76b9?w=800&q=80&auto=format&fit=crop',
  'Competition Training': 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80&auto=format&fit=crop',
  'Performance & Choreography': 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80&auto=format&fit=crop',
}

const filterTabs = ['All Programs', 'Western', 'Freestyle', 'Bollywood', 'Street', 'Fitness', 'Professional']

const stats = [
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: Users2, value: '2', label: 'Lead Directors' },
  { icon: Flame, value: '500+', label: 'Stage Shows' },
  { icon: Clock3, value: 'Flexible', label: 'Morning & Evening Batches' },
]

function Courses() {
  const [allCourses, setAllCourses] = useState([])
  const [activeFilter, setActiveFilter] = useState('All Programs')
  const [selectedCourse, setSelectedCourse] = useState(null)

  useEffect(() => {
    getCourses()
      .then((data) => setAllCourses(data))
      .catch((err) => console.error(err))
  }, [])

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCourse(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const filteredCourses =
    activeFilter === 'All Programs'
      ? allCourses
      : allCourses.filter((c) => c.category === activeFilter)

  return (
    <div className="bg-[#050505] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[340px] flex items-center overflow-hidden border-b border-white/5">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3 }}
          src={images.ourStory1 || 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1600&q=80&auto=format&fit=crop'}
          alt="Dance Studio Courses"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60" />
        <div className="relative z-10 px-8 sm:px-16 max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-crimson text-xs tracking-[0.3em] uppercase mb-3 font-semibold"
          >
            Curriculum & Formats
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl text-white tracking-wide"
          >
            Dance <span className="text-crimson drop-shadow-[0_0_20px_rgba(229,9,20,0.5)]">Courses</span>
          </motion.h1>
          <p className="text-off-white/70 text-sm sm:text-base mt-3 max-w-xl">
            From foundational technique to high-octane stage performance. Click any course to expand full syllabus.
          </p>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-charcoal py-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-6 h-6 text-crimson mx-auto mb-2" strokeWidth={1.5} />
              <p className="font-display text-2xl text-white mb-1 tracking-wider">{stat.value}</p>
              <p className="text-xs tracking-widest uppercase text-off-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. FILTER TABS & INTERACTIVE GRID */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex flex-wrap gap-2.5 mb-14 justify-center">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-6 py-2.5 text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                activeFilter === tab
                  ? 'bg-crimson text-white shadow-[0_0_20px_rgba(229,9,20,0.4)] scale-105'
                  : 'bg-charcoal text-off-white/70 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course, i) => (
            <CourseCard
              key={course.id}
              course={course}
              index={i}
              onSelect={setSelectedCourse}
              imageUrl={courseImagesMap[course.name] || images.programWestern}
            />
          ))}
        </motion.div>

        {filteredCourses.length === 0 && (
          <p className="text-center text-off-white/50 py-20 font-display text-xl">
            No courses found under this category.
          </p>
        )}
      </section>

      {/* 4. GSAP FLIP-STYLE SHARED ELEMENT MODAL (Framer Motion layoutId) */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Expanded Modal Window */}
            <motion.div
              layoutId={`card-container-${selectedCourse.id}`}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-charcoal border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.95)] z-10 overflow-y-auto flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-crimson hover:border-crimson transition-all"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Banner Image */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-black flex-shrink-0">
                <motion.img
                  layoutId={`card-image-${selectedCourse.id}`}
                  src={courseImagesMap[selectedCourse.name] || images.programWestern}
                  alt={selectedCourse.name}
                  className={`w-full h-full object-cover ${
                    selectedCourse.name === 'Western Dance' ? 'mix-blend-screen bg-black filter contrast-125' : ''
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-black/40 pointer-events-none" />

                {selectedCourse.tag && (
                  <span className="absolute top-6 left-6 bg-crimson text-white text-xs tracking-widest uppercase px-3.5 py-1 font-semibold shadow-lg">
                    {selectedCourse.tag}
                  </span>
                )}

                <div className="absolute bottom-6 left-6 right-6">
                  <motion.h2
                    layoutId={`card-title-${selectedCourse.id}`}
                    className="font-display text-3xl sm:text-5xl text-white tracking-wide drop-shadow-md"
                  >
                    {selectedCourse.name}
                  </motion.h2>
                </div>
              </div>

              {/* Modal Content Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 border-y border-white/10">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-off-white/50">Level</p>
                    <p className="text-sm font-semibold text-white mt-0.5">{selectedCourse.level || 'Beginner to Advanced'}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-off-white/50">Duration</p>
                    <p className="text-sm font-semibold text-white mt-0.5">{selectedCourse.duration}</p>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <p className="text-[11px] uppercase tracking-wider text-off-white/50">Schedule</p>
                    <p className="text-sm font-semibold text-white mt-0.5">{selectedCourse.frequency || 'Morning / Evening Batches'}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-display text-lg text-white mb-2 tracking-wide">Program Overview</h4>
                  <p className="text-sm sm:text-base text-off-white/80 leading-relaxed">
                    {selectedCourse.description ||
                      'Crafted for dancers seeking technique refinement, rhythmic mastery, and confidence. Training covers foundation grooves, posture alignment, stage awareness, and synchronization.'}
                  </p>
                </div>

                {selectedCourse.features && (
                  <div>
                    <h4 className="font-display text-lg text-white mb-3 tracking-wide">Key Highlights</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedCourse.features.split('|').map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5 text-sm text-off-white/80">
                          <Check className="w-4 h-4 text-crimson flex-shrink-0 mt-0.5" />
                          <span>{feature.trim()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Batch Information */}
                <div className="bg-black/40 border border-white/10 p-4 flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-crimson flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-off-white/70">
                    Weekday and Weekend slots available at both Slam Adyar & Slam Perungudi branches.
                  </p>
                </div>

                {/* Action CTA */}
                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="flex-1 bg-crimson text-white py-3.5 px-6 text-sm font-semibold text-center tracking-wider uppercase shadow-[0_0_25px_rgba(229,9,20,0.4)] hover:bg-crimson-light transition-all flex items-center justify-center gap-2"
                  >
                    <span>Book Free Trial Class</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="border border-white/20 text-white py-3.5 px-6 text-sm font-semibold hover:bg-white/10 transition-colors uppercase tracking-wider"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Courses