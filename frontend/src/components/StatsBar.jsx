import { motion } from 'framer-motion'
import { Calendar, Trophy, Users, Star } from 'lucide-react'

const stats = [
  { icon: Calendar, value: '10+', label: 'Years of Legacy' },
  { icon: Trophy, value: '500+', label: 'Stage Performances' },
  { icon: Users, value: '1000+', label: 'Students Trained' },
  { icon: Star, value: '9', label: 'Notable Collaborations' },
]

function StatsBar() {
  return (
    <section className="bg-charcoal py-14 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -6 }}
            className="text-center group p-3 rounded-lg transition-all"
          >
            <stat.icon
              className="w-8 h-8 text-crimson mx-auto mb-3 transition-transform duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_12px_rgba(229,9,20,0.8)]"
              strokeWidth={1.5}
            />
            <p className="font-display text-3xl md:text-4xl mb-1 text-white tracking-wider">
              {stat.value}
            </p>
            <p className="text-xs tracking-widest uppercase text-off-white/60">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default StatsBar