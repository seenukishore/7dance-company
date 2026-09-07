import { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, PartyPopper, Music, CheckCircle2, ArrowRight, Sparkles, Send } from 'lucide-react'
import EventShowcaseList from '../components/EventShowcaseList'
import { submitEventEnquiry } from '../api/events'

const eventCategories = [
  { icon: Briefcase, value: '9+', label: 'Notable Collaborations', desc: 'Film, TV and celebrity choreography partnerships' },
  { icon: Music, value: '500+', label: 'Stage Shows', desc: 'High-octane performances across premier venues' },
  { icon: GraduationCap, value: '2', label: 'Lead Directors', desc: 'Seven Sir & Maddi Shreya direct supervision' },
  { icon: PartyPopper, value: '10+', label: 'Years Experience', desc: 'Corporate, wedding & elite festival productions' },
]

const eventTypes = [
  'Corporate Event / Zumba Workshop',
  'Film & TV Choreography',
  'Wedding Sangeet',
  'College / Cultural Fest',
  'Stage Production / Flashmob',
  'Other Custom Requirement',
]

function Events() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    event_type: '',
    event_date: '',
    venue_city: '',
    additional_requirements: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      // 1. Save data to PostgreSQL database via FastAPI
      await submitEventEnquiry(form)
      setSuccess(true)

      // 2. Format message for WhatsApp
      const whatsappNumber = '919176274847'
      const textMessage =
        `*New Event Booking Enquiry - 7 Dance Company*%0A%0A` +
        `*Name:* ${encodeURIComponent(form.name)}%0A` +
        `*Phone:* ${encodeURIComponent(form.phone)}%0A` +
        `*Email:* ${encodeURIComponent(form.email)}%0A` +
        `*Event Type:* ${encodeURIComponent(form.event_type)}%0A` +
        `*Date:* ${encodeURIComponent(form.event_date || 'Not specified')}%0A` +
        `*Venue/City:* ${encodeURIComponent(form.venue_city || 'Not specified')}%0A` +
        `*Details:* ${encodeURIComponent(form.additional_requirements || 'N/A')}`

      // 3. Auto open WhatsApp direct chat in new tab
      window.open(`https://wa.me/${whatsappNumber}?text=${textMessage}`, '_blank')

      // 4. Reset form state
      setForm({
        name: '',
        email: '',
        phone: '',
        event_type: '',
        event_date: '',
        venue_city: '',
        additional_requirements: '',
      })
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please try again or reach via direct contact.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-crimson selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[380px] sm:h-[420px] flex items-center overflow-hidden border-b border-white/5">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3.5, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&q=80&auto=format&fit=crop"
          alt="Events Stage"
          className="absolute inset-0 w-full h-full object-cover filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/65" />
        <div className="relative z-10 px-8 sm:px-16 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-crimson/20 border border-crimson/40 rounded-full mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-crimson" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-off-white">
              Stage & Productions
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl text-white tracking-wide mb-3"
          >
            Events & <span className="text-crimson drop-shadow-[0_0_20px_rgba(229,9,20,0.5)]">Bookings</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-off-white/70 text-sm sm:text-base max-w-xl leading-relaxed"
          >
            Bring raw energy, film-grade choreography, and unforgettable crowd engagement to your stage, wedding, or corporate showcase.
          </motion.p>
        </div>
      </section>

      {/* 2. STATS & CATEGORIES */}
      <section className="bg-jet-black py-24 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-crimson text-xs tracking-[0.25em] uppercase mb-2 font-semibold">Our Expertise</p>
            <h2 className="font-display text-3xl sm:text-5xl text-white">Event Formats</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventCategories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-charcoal/80 border border-white/10 hover:border-crimson/60 p-7 transition-all duration-300 group shadow-lg hover:shadow-[0_12px_30px_rgba(229,9,20,0.25)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-crimson/5 rounded-full blur-2xl group-hover:bg-crimson/15 transition-colors" />
                <cat.icon className="w-8 h-8 text-crimson mb-5 transition-transform group-hover:scale-110" strokeWidth={1.75} />
                <p className="font-display text-3xl text-white mb-1 tracking-wider">{cat.value}</p>
                <p className="text-sm font-semibold text-off-white mb-2">{cat.label}</p>
                <p className="text-xs text-off-white/60 leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED INDUSTRY COLLABORATIONS */}
      <section className="relative bg-[#080808] py-28 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-crimson text-xs tracking-[0.25em] uppercase mb-3 font-semibold">Featured Industry Works</p>
            <h2 className="font-display text-3xl sm:text-5xl text-white mb-6 leading-tight">
              Choreography For Film & Television
            </h2>
            <p className="text-off-white/75 text-sm sm:text-base leading-relaxed mb-6">
              7 Dance Company has trained and choreographed for leading cinema and television productions — from training the lead cast of <span className="text-white font-semibold">&ldquo;Kanchana 4&rdquo;</span>, to high-profile collaborations with <span className="text-white font-semibold">Sandy Master</span>, <span className="text-white font-semibold">Raghava Lawrence Master</span>, and celebrity training for stars including <span className="text-white font-semibold">Ritika Singh</span> and <span className="text-white font-semibold">Aishwarya Arjun</span>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                'Film & Television Choreography',
                'Celebrity & Lead Cast Training',
                'High-Energy Corporate Dance Fitness',
                'Arena Concerts & Award Show Routines',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-off-white/80">
                  <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#booking-form"
              className="inline-flex items-center gap-2.5 bg-crimson hover:bg-crimson-light text-white px-7 py-3.5 text-xs uppercase tracking-widest font-semibold transition-all shadow-[0_0_20px_rgba(229,9,20,0.35)] hover:shadow-[0_0_30px_rgba(229,9,20,0.6)]"
            >
              <span>Book For Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden border border-white/10 shadow-2xl group"
          >
            <img
              src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=1000&q=85&auto=format&fit=crop"
              alt="Performance Showcase"
              className="w-full h-96 sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display text-xl text-white tracking-wide">Film & Arena Stage Craft</p>
              <p className="text-xs text-off-white/70">Custom routines engineered for television and live camera angles.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. RECENT SHOWCASES LIST */}
      <EventShowcaseList />

      {/* 5. CINEMATIC DARK BOOKING ENQUIRY FORM */}
      <section id="booking-form" className="bg-jet-black py-28 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-crimson text-xs tracking-[0.25em] uppercase mb-2 font-semibold">Reserve Your Date</p>
            <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wide mb-3">Event Enquiry</h2>
            <p className="text-sm text-off-white/65 max-w-md mx-auto leading-relaxed">
              Tell us about your dates, venue, and scope. Our production team will contact you within 24 hours.
            </p>
          </motion.div>

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-charcoal border border-crimson/50 text-center py-16 px-8 shadow-[0_0_50px_rgba(229,9,20,0.2)]"
            >
              <CheckCircle2 className="w-14 h-14 text-crimson mx-auto mb-4" />
              <h3 className="font-display text-3xl text-white mb-2 tracking-wide">Enquiry Received!</h3>
              <p className="text-sm text-off-white/70 max-w-sm mx-auto">
                Thank you. 7 Dance Company team will review your requirements and reach out within 24 hours.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-6 border border-white/20 hover:border-crimson text-xs uppercase tracking-widest px-6 py-2.5 text-white transition-colors"
              >
                Send Another Enquiry
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="bg-[#0b0b0b] border border-white/10 p-6 sm:p-10 shadow-2xl relative"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-off-white/60 font-semibold block mb-2">
                    Your Name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter full name"
                    className="w-full bg-[#141414] border border-white/10 text-white px-4 py-3 text-sm outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all placeholder:text-white/20"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-off-white/60 font-semibold block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    className="w-full bg-[#141414] border border-white/10 text-white px-4 py-3 text-sm outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-off-white/60 font-semibold block mb-2">
                    Phone Number *
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#141414] border border-white/10 text-white px-4 py-3 text-sm outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all placeholder:text-white/20"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-off-white/60 font-semibold block mb-2">
                    Event Type *
                  </label>
                  <select
                    name="event_type"
                    value={form.event_type}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#141414] border border-white/10 text-white px-4 py-3 text-sm outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all"
                  >
                    <option value="" className="bg-charcoal text-white">Select format</option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t} className="bg-charcoal text-white">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-off-white/60 font-semibold block mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="event_date"
                    value={form.event_date}
                    onChange={handleChange}
                    className="w-full bg-[#141414] border border-white/10 text-white px-4 py-3 text-sm outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-off-white/60 font-semibold block mb-2">
                    Venue / City
                  </label>
                  <input
                    name="venue_city"
                    value={form.venue_city}
                    onChange={handleChange}
                    placeholder="e.g. Chennai, Taj Connemara"
                    className="w-full bg-[#141414] border border-white/10 text-white px-4 py-3 text-sm outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="text-[11px] uppercase tracking-wider text-off-white/60 font-semibold block mb-2">
                  Project / Performance Details
                </label>
                <textarea
                  name="additional_requirements"
                  value={form.additional_requirements}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about the audience size, preferred choreography styles, performance duration, or specific celebrity requests..."
                  className="w-full bg-[#141414] border border-white/10 text-white px-4 py-3 text-sm outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all resize-none placeholder:text-white/20"
                />
              </div>

              {error && <p className="text-xs text-crimson mb-4 font-medium">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-crimson hover:bg-crimson-light text-white py-4 text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-[0_0_25px_rgba(229,9,20,0.35)] hover:shadow-[0_0_35px_rgba(229,9,20,0.6)] flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {submitting ? (
                  <span>Transmitting Details...</span>
                ) : (
                  <>
                    <span>Submit Booking Enquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  )
}

export default Events