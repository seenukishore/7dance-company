import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar } from 'lucide-react'

function Hero() {
  return (
    <section className="relative h-[720px] sm:h-[800px] flex items-center justify-start overflow-hidden px-6 sm:px-16 lg:px-24 bg-[#050505]">
      {/* Background Looping Local Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover filter brightness-[0.9] contrast-110 z-0"
      >
        <source src="/hero-dance.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30 pointer-events-none z-1" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/60 pointer-events-none z-1" />

      {/* Floating Center Stage Light Aura */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-crimson/25 blur-[140px] pointer-events-none z-1"
      />

      {/* Left-Aligned Content Container */}
      <div className="relative z-10 text-left max-w-3xl pt-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-[2px] w-10 bg-crimson" />
          <p className="text-crimson text-xs sm:text-sm tracking-[0.35em] uppercase font-bold">
            Established 2016 · Neelankarai, ECR
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] text-white tracking-wide mb-1"
        >
          7 DANCE
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-crimson tracking-wide mb-6 drop-shadow-[0_0_35px_rgba(229,9,20,0.6)]"
        >
          COMPANY
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-off-white/85 text-lg sm:text-xl font-medium tracking-wide mb-10 max-w-xl"
        >
          Dance beyond limits. 
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 items-stretch sm:items-center"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/courses"
              className="bg-crimson text-white px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.15em] shadow-[0_0_30px_rgba(229,9,20,0.45)] hover:bg-crimson-light transition-all flex items-center justify-center gap-3 rounded-sm"
            >
              <span>▶ Join Classes</span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/events"
              className="border-2 border-white/40 text-white px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-black hover:border-white transition-all flex items-center justify-center gap-3 rounded-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Us for Events</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero