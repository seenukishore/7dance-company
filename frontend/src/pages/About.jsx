import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Award, Users, Lightbulb, GraduationCap } from 'lucide-react'
import MilestonesTimeline from '../components/MilestonesTimeline'
import CollaborationsSection from '../components/CollaborationsSection'
import { images } from '../data/images'

const pillars = [
  { icon: Award, title: 'Excellence', desc: 'We pursue perfection in every movement and performance.' },
  { icon: Users, title: 'Community', desc: 'Building a family of passionate dancers who support each other.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Blending traditional forms with contemporary styles.' },
  { icon: GraduationCap, title: 'Education', desc: 'Comprehensive training from basics to professional level.' },
]

function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[350px] flex items-center overflow-hidden">
        <img src={images.ourStory1} alt="About" className="absolute inset-0 w-full h-full object-cover grayscale" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 px-8 md:px-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-crimson text-xs tracking-[0.2em] uppercase mb-3"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl"
          >
            About 7 Dance Company
          </motion.h1>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl mb-6">A Legacy of <span className="text-crimson">Excellence</span></h2>
          <p className="text-off-white/70 text-sm leading-relaxed mb-4">
            7 Dance Company, established in 2016, is a passionate and professional dance company dedicated to inspiring dancers, nurturing talent, and creating confident performers. What started with a love for dance has grown into a vibrant dance community where students of different ages and skill levels come together to learn, express themselves, and perform.
          </p>
          <p className="text-off-white/70 text-sm leading-relaxed">
            Over the years, we have continued to evolve by introducing innovative training methods, performance opportunities, workshops, and competition-focused programs. At 7 Dance Company, we believe that dance is not just about learning steps — it is about discipline, confidence, creativity, teamwork, and self-expression.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative h-[420px]"
        >
          <img src={images.ourStory2} alt="Dance" className="w-full h-full object-cover" />
          <div className="absolute -bottom-6 -right-4 bg-crimson text-white px-6 py-4 text-center">
            <p className="font-display text-3xl leading-none">10+</p>
            <p className="text-[10px] tracking-widest uppercase mt-1">Years of Legacy</p>
          </div>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="bg-charcoal py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-crimson text-xs tracking-[0.2em] uppercase mb-3">Our Mission</p>
            <h2 className="font-display text-4xl mb-6">
              Nurturing the <span className="text-crimson">Next Generation</span>
            </h2>
            <p className="text-off-white/70 text-sm leading-relaxed max-w-2xl mx-auto mb-16">
              At 7 Dance Company, our mission is to inspire people through dance and create a space where every dancer can learn, grow, and confidently express themselves. We believe every dancer has a story to tell, and our role is to help them find their voice through movement.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-full border border-crimson/40 flex items-center justify-center mx-auto mb-4">
                  <p.icon className="w-6 h-6 text-crimson" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg mb-2">{p.title}</h3>
                <p className="text-xs text-off-white/60 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MilestonesTimeline />
      <CollaborationsSection />

      {/* Bottom CTA strip */}
      <section className="bg-jet-black py-16 text-center border-t border-white/10">
        <Link
          to="/contact"
          className="inline-block bg-crimson text-white px-8 py-3.5 text-sm font-medium hover:bg-crimson-light transition-colors"
        >
          Book Free Trial →
        </Link>
      </section>
    </div>
  )
}

export default About