import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function CTASection() {
  return (
    <section className="relative bg-jet-black py-28 border-t border-white/10 overflow-hidden">
      {/* Background Pulse Glow */}
      <motion.div
        animate={{
          scale: [0.9, 1.2, 0.9],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-crimson/20 blur-[130px] pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-2xl mx-auto text-center px-8"
      >
        <p className="text-crimson text-xs tracking-[0.25em] uppercase mb-3 font-semibold">Start Your Journey</p>
        <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight text-white">
          Ready to Transform <span className="text-crimson">Your Passion?</span>
        </h2>
        <p className="text-off-white/70 text-sm sm:text-base mb-10 leading-relaxed">
          Join hundreds of dancers who have discovered their potential at 7 Dance Company. Book a free trial class today and take the first step towards mastery.
        </p>
        <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} className="inline-block">
          <Link
            to="/contact"
            className="inline-block bg-crimson text-white px-9 py-4 text-sm font-semibold shadow-[0_0_30px_rgba(229,9,20,0.5)] hover:bg-crimson-light transition-all"
          >
            Book Free Trial →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CTASection