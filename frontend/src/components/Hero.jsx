import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { images } from '../data/images'

function Hero() {
  return (
    <section className="relative h-[640px] flex items-center justify-center overflow-hidden">
      {/* Background with Zoom Effect */}
      <motion.img
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: 'easeOut' }}
        src={images.hero}
        alt="7 Dance Company"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-jet-black" />

      {/* Floating Center Stage Light Aura */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[500px] h-[500px] rounded-full bg-crimson/30 blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-crimson text-xs tracking-[0.35em] uppercase mb-4 font-semibold"
        >
          Established 2016
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-5xl md:text-7xl leading-none text-white tracking-wider mb-2"
        >
          7 DANCE
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-3xl md:text-5xl text-crimson tracking-wider mb-6 drop-shadow-[0_0_20px_rgba(229,9,20,0.5)]"
        >
          COMPANY
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-off-white/85 text-base sm:text-lg mb-8"
        >
          Dance beyond limits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/courses"
              className="bg-crimson text-white px-8 py-3.5 text-sm font-medium shadow-[0_0_25px_rgba(229,9,20,0.4)] hover:bg-crimson-light transition-all flex items-center justify-center gap-2"
            >
              ▶ Join Classes
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/events"
              className="border border-white/40 text-white px-8 py-3.5 text-sm font-medium hover:bg-white/10 hover:border-white transition-all flex items-center justify-center gap-2"
            >
               Book Us for Events
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero