import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getMilestones } from '../api/milestones'

function MilestonesTimeline() {
  const [milestones, setMilestones] = useState([])

  useEffect(() => {
    getMilestones().then((data) => {
      if (Array.isArray(data)) {
        // Remove duplicates based on 'year' to fix the repetition
        const uniqueMilestones = Array.from(
          new Map(data.map((item) => [item.year, item])).values()
        )
        setMilestones(uniqueMilestones)
      }
    }).catch((err) => console.error(err))
  }, [])

  return (
    <section className="bg-jet-black py-24">
      <div className="max-w-5xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-crimson text-xs tracking-[0.2em] uppercase mb-3">Our Journey</p>
          <h2 className="font-display text-4xl">Milestones</h2>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/15 hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {milestones.map((m, i) => (
              <motion.div
                key={m.id || m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                className={`md:w-1/2 md:relative ${
                  i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
                }`}
              >
                <div className="bg-card-dark border border-white/10 p-6 relative">
                  <p className="text-crimson font-display text-xl mb-2">{m.year}</p>
                  <h3 className="font-display text-lg mb-2">{m.title}</h3>
                  <p className="text-sm text-off-white/60 leading-relaxed">{m.description}</p>
                </div>
                {/* Dot on center line */}
                <div
                  className={`hidden md:block absolute top-6 w-3 h-3 rounded-full bg-crimson ${
                    i % 2 === 0 ? '-right-1.5' : '-left-1.5'
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MilestonesTimeline