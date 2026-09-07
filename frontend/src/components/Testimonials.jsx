import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { getTestimonials } from '../api/testimonials'

function Testimonials() {
  const [testimonials, setTestimonials] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    getTestimonials()
      .then((data) => setTestimonials(data))
      .catch((err) => console.error(err))
  }, [])

  useEffect(() => {
    if (testimonials.length === 0) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials])

  if (testimonials.length === 0) return null

  const current = testimonials[index]

  return (
    <section className="bg-white text-jet-black py-24">
      <div className="max-w-3xl mx-auto px-8 text-center">
        <p className="text-crimson text-xs tracking-[0.2em] uppercase mb-3 font-medium">Testimonials</p>
        <h2 className="font-display text-4xl mb-10">Success <span className="text-crimson">Stories</span></h2>

        <Quote className="w-10 h-10 text-crimson mx-auto mb-6" fill="#e50914" />

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-lg italic text-jet-black/80 mb-6 leading-relaxed">"{current.review}"</p>
            <p className="font-display text-xl mb-1 text-jet-black">{current.name}</p>
            <p className="text-xs tracking-widest uppercase text-crimson font-medium">
              {current.role === 'Student' ? 'Student' : 'Parent'}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="w-9 h-9 rounded-full border border-jet-black/20 flex items-center justify-center hover:border-crimson hover:text-crimson transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-6 bg-crimson' : 'w-1.5 bg-jet-black/20'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
            className="w-9 h-9 rounded-full border border-jet-black/20 flex items-center justify-center hover:border-crimson hover:text-crimson transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials