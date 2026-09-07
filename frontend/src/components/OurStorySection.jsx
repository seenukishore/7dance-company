import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { images } from '../data/images'

function OurStorySection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      {/* Left - Interactive Photo Collage */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 gap-4 relative"
      >
        <motion.div whileHover={{ scale: 1.03 }} className="overflow-hidden">
          <img
            src={images.ourStory1}
            alt="Dance Studio"
            className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.03 }} className="overflow-hidden mt-8">
          <img
            src={images.ourStory2}
            alt="Performance"
            className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden col-span-2">
          <img
            src={images.ourStory3}
            alt="Choreography"
            className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

        {/* Floating Years Badge */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-6 -right-4 bg-crimson text-white px-7 py-4 text-center shadow-[0_10px_30px_rgba(229,9,20,0.5)] border border-white/10"
        >
          <p className="font-display text-4xl leading-none">10+</p>
          <p className="text-[10px] tracking-widest uppercase mt-1">Years</p>
        </motion.div>
      </motion.div>

      {/* Right - Reveal Text */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-crimson text-xs tracking-[0.25em] uppercase mb-3 font-semibold">Our Story</p>
        <h2 className="font-display text-4xl sm:text-5xl mb-6 leading-tight text-white">
          Where Passion Meets <span className="text-crimson">Excellence</span>
        </h2>
        <p className="text-off-white/70 text-sm sm:text-base leading-relaxed mb-4">
          7 Dance Company, established in 2016, is a passionate and professional dance company dedicated to inspiring dancers, nurturing talent, and creating confident performers. What started with a love for dance has grown into a vibrant dance community where students of different ages and skill levels come together to learn, express themselves, and perform.
        </p>
        <p className="text-off-white/70 text-sm sm:text-base leading-relaxed mb-8">
          Over the years, we have continued to evolve by introducing innovative training methods, performance opportunities, workshops, and competition-focused programs. At 7 Dance Company, we believe that dance is not just about learning steps — it is about discipline, confidence, creativity, teamwork, and self-expression.
        </p>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="inline-block">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-white text-jet-black px-7 py-3.5 text-sm font-semibold hover:bg-crimson hover:text-white transition-colors shadow-lg"
          >
            Discover Our Journey →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default OurStorySection