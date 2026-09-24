import { motion } from 'framer-motion'
import { Clock, Users, ArrowUpRight, Star } from 'lucide-react'

// ✅ LOCAL ASSET IMPORTS
import lockingImg from '../assets/locking.png'
import breakingImg from '../assets/breaking.jpg'
import bharatanatyamImg from '../assets/bharatanatyam.png'

export const courseImages = {
  'Western Dance': 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&q=80&auto=format&fit=crop',
  'Hip Hop': 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&q=80&auto=format&fit=crop',
  'Locking & Popping': lockingImg,
  'Breaking': breakingImg,
  'Bollywood': 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=800&q=80&auto=format&fit=crop',
  'Freestyle': 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80&auto=format&fit=crop',
  'Zumba': 'https://images.unsplash.com/photo-1527933053326-89d1746b76b9?w=800&q=80&auto=format&fit=crop',
  'Yoga': 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80&auto=format&fit=crop',
  'Bharatanatyam': bharatanatyamImg,
  'Competition Training': 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80&auto=format&fit=crop',
  'Performance & Choreography': 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80&auto=format&fit=crop',
}

function CourseCard({ course, index, onSelect, imageUrl }) {
  const isWestern = course.name === 'Western Dance'
  const resolvedImage = imageUrl || courseImages[course.name] || course.image_url

  return (
    <motion.div
      layoutId={`card-container-${course.id}`}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -6 }}
      onClick={() => onSelect(course)}
      className="bg-charcoal border border-white/10 hover:border-crimson/70 transition-colors cursor-pointer group flex flex-col justify-between overflow-hidden relative shadow-lg hover:shadow-[0_10px_30px_rgba(229,9,20,0.25)]"
    >
      <div className="relative h-60 overflow-hidden bg-black">
        <motion.img
          layoutId={`card-image-${course.id}`}
          src={resolvedImage}
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

        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white group-hover:bg-crimson group-hover:border-crimson transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </div>

        <div className="absolute bottom-3 left-4 right-4">
          <motion.h3
            layoutId={`card-title-${course.id}`}
            className="font-display text-xl text-white tracking-wide leading-tight group-hover:text-crimson transition-colors"
          >
            {course.name}
          </motion.h3>
        </div>
      </div>

      <div className="p-5 flex flex-col justify-between flex-1">
        <div className="flex items-center justify-between text-xs text-off-white/70 mb-4 pb-4 border-b border-white/5">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-crimson" /> {course.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-crimson" /> {course.frequency || 'Weekly Classes'}
          </span>
        </div>

        <p className="text-xs text-off-white/60 line-clamp-2 leading-relaxed mb-4">
          {course.description || 'Master step-by-step techniques, stage dynamics, and performance confidence with expert faculty.'}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-crimson font-semibold">
            <Star className="w-3 h-3 fill-crimson" /> {course.level || 'All Levels'}
          </span>
          <span className="text-xs font-semibold text-white group-hover:text-crimson transition-colors">
            View Syllabus →
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default CourseCard