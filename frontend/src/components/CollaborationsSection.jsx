import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { getCollaborations } from '../api/collaborations'

function CollaborationsSection() {
  const [collabs, setCollabs] = useState([])

  useEffect(() => {
    getCollaborations().then((data) => {
      if (Array.isArray(data)) {
        // Remove duplicate collaborations based on 'name' to fix repetition
        const uniqueCollabs = Array.from(
          new Map(data.map((item) => [item.name, item])).values()
        )
        setCollabs(uniqueCollabs)
      }
    }).catch((err) => console.error(err))
  }, [])

  return (
    <section className="bg-white text-jet-black py-24">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-crimson text-xs tracking-[0.2em] uppercase mb-3">Collaborations</p>
          <h2 className="font-display text-4xl">Trusted By The Best</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {collabs.map((c, i) => (
            <motion.div
              key={c.id || c.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border border-jet-black/10 p-6 flex items-center gap-3 hover:border-crimson transition-colors"
            >
              <Sparkles className="w-5 h-5 text-crimson flex-shrink-0" strokeWidth={1.5} />
              <p className="text-sm font-medium">{c.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CollaborationsSection