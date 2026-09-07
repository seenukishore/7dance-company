import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Sparkles } from 'lucide-react'
import { getEventShowcases } from '../api/events'

function EventShowcaseList() {
  const [shows, setShows] = useState([])

  useEffect(() => {
    getEventShowcases()
      .then((data) => setShows(data))
      .catch(() => {})
  }, [])

  if (shows.length === 0) return null

  return (
    <section className="relative bg-[#070707] py-28 border-y border-white/5 overflow-hidden">
      {/* Background Stage Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-crimson/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-crimson/10 border border-crimson/30 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-crimson" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-crimson">
              Stage Highlights
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wide">
            Recent Shows & <span className="text-crimson">Productions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {shows.map((show, i) => (
            <motion.div
              key={show.id || i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ x: 8 }}
              className="group relative bg-charcoal/70 backdrop-blur-md border border-white/10 hover:border-crimson/60 p-6 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(229,9,20,0.2)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 overflow-hidden"
            >
              {/* Left Crimson Indicator Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-crimson group-hover:w-2.5 transition-all duration-300" />

              <div className="pl-3 sm:pl-4">
                <div className="flex items-center gap-2 text-crimson text-xs font-mono font-semibold tracking-wider mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{show.year}</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-white tracking-wide group-hover:text-crimson transition-colors">
                  {show.title}
                </h3>
              </div>

              <div className="pl-3 sm:pl-0 flex items-center gap-2 text-xs uppercase tracking-wider text-off-white/60 font-medium sm:text-right shrink-0">
                <MapPin className="w-4 h-4 text-crimson" />
                <span>{show.venue}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventShowcaseList