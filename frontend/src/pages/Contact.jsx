import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import { submitTrialBooking } from '../api/bookings'

const quickContacts = [
  { icon: Phone, label: 'Phone', value: '+91 90928 64202', href: 'tel:+919092864202' },
  { icon: Mail, label: 'Email', value: 'Elumalai7dc@gmail.com', href: 'mailto:Elumalai7dc@gmail.com' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+91 91762 74847', href: 'https://wa.me/919176274847' },
  { icon: MapPin, label: 'Location', value: 'Neelankarai, Chennai 600115', href: 'https://share.google/B4o5KqI8TVrJwbilJ' },
]

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      await submitTrialBooking(form)
      setSuccess(true)

      const whatsappNumber = '919176274847'
      const textMessage =
        `*New Free Trial Booking - 7 Dance Company*%0A%0A` +
        `*Name:* ${encodeURIComponent(form.name)}%0A` +
        `*Phone:* ${encodeURIComponent(form.phone)}%0A` +
        `*Email:* ${encodeURIComponent(form.email)}%0A` +
        `*Subject:* ${encodeURIComponent(form.subject || 'Free Trial Class')}%0A` +
        `*Message:* ${encodeURIComponent(form.message)}`

      window.open(`https://wa.me/${whatsappNumber}?text=${textMessage}`, '_blank')

      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please try again or reach via direct WhatsApp.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-crimson selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[340px] sm:h-[380px] flex items-center overflow-hidden border-b border-white/5">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3 }}
          src="https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=1600&q=80&auto=format&fit=crop"
          alt="Contact Dance Studio"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/65" />
        <div className="relative z-10 px-8 sm:px-16 max-w-5xl">
          <p className="text-crimson text-xs tracking-[0.3em] uppercase mb-3 font-semibold">
            Get In Touch
          </p>
          <h1 className="font-display text-4xl sm:text-6xl text-white tracking-wide">
            Contact <span className="text-crimson drop-shadow-[0_0_20px_rgba(229,9,20,0.5)]">Us</span>
          </h1>
          <p className="text-off-white/70 text-sm sm:text-base mt-2 max-w-md">
            Reach out for trial bookings, class admissions, or production choreography enquiries.
          </p>
        </div>
      </section>

      {/* 2. QUICK CONTACT CARDS */}
      <section className="bg-charcoal py-14 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {quickContacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.label === 'Location' || c.label === 'WhatsApp' ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-card-dark border border-white/10 hover:border-crimson/70 p-6 text-center transition-all duration-300 group shadow-lg hover:shadow-[0_10px_25px_rgba(229,9,20,0.2)]"
            >
              <c.icon className="w-6 h-6 text-crimson mx-auto mb-3 transition-transform group-hover:scale-110" strokeWidth={1.75} />
              <p className="text-xs uppercase tracking-wider text-off-white/50 mb-1">{c.label}</p>
              <p className="text-sm font-semibold text-white group-hover:text-crimson transition-colors">{c.value}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* 3. FORM + STUDIO DETAILS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <p className="text-crimson text-xs tracking-[0.25em] uppercase mb-2 font-semibold">Free Trial Session</p>
          <h2 className="font-display text-3xl sm:text-4xl mb-8">Book a Free Trial Class</h2>

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-charcoal border border-crimson/50 text-center py-16 px-8 shadow-[0_0_40px_rgba(229,9,20,0.2)]"
            >
              <CheckCircle2 className="w-12 h-12 text-crimson mx-auto mb-4" />
              <h3 className="font-display text-2xl text-white mb-2 tracking-wide">Trial Request Sent!</h3>
              <p className="text-sm text-off-white/70 max-w-sm mx-auto">
                We have registered your details. Check your WhatsApp for direct confirmation from our instructor team.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-6 border border-white/20 hover:border-crimson text-xs uppercase tracking-widest px-6 py-2.5 text-white transition-colors"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#0b0b0b] border border-white/10 p-6 sm:p-8 space-y-5 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-off-white/60 font-semibold block mb-2">
                    Your Name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Kishore"
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
                    placeholder="kishore@example.com"
                    className="w-full bg-[#141414] border border-white/10 text-white px-4 py-3 text-sm outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    Interested Style / Subject
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g. Zumba Trial / Hip Hop"
                    className="w-full bg-[#141414] border border-white/10 text-white px-4 py-3 text-sm outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all placeholder:text-white/20"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-off-white/60 font-semibold block mb-2">
                  Message / Preferred Timing *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Let us know your preferred studio location (Adyar / Perungudi) or timing..."
                  className="w-full bg-[#141414] border border-white/10 text-white px-4 py-3 text-sm outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all resize-none placeholder:text-white/20"
                />
              </div>

              {error && <p className="text-xs text-crimson font-medium">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-crimson hover:bg-crimson-light text-white py-4 text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-[0_0_20px_rgba(229,9,20,0.35)] hover:shadow-[0_0_30px_rgba(229,9,20,0.6)] flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {submitting ? <span>Booking Trial...</span> : (
                  <>
                    <span>Book Free Trial Now</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Right Info Panels */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Studio Hours */}
          <div className="bg-charcoal/80 border border-white/10 p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <Clock className="w-4 h-4 text-crimson" />
              <h3 className="font-display text-lg tracking-wide">Studio Timings</h3>
            </div>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between items-center pb-2.5 border-b border-white/5">
                <span className="text-off-white/60">Monday - Friday</span>
                <span className="text-right text-white font-mono text-xs">
                  6:00 AM - 12:00 PM<br />4:00 PM - 9:00 PM
                </span>
              </div>
              <div className="flex justify-between items-center pb-2.5 border-b border-white/5">
                <span className="text-off-white/60">Saturday</span>
                <span className="text-right text-white font-mono text-xs">
                  6:00 AM - 9:00 AM<br />5:00 PM - 9:00 PM
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-off-white/60">Sunday</span>
                <span className="text-right text-white font-mono text-xs">
                  6:00 AM - 12:00 PM<br />5:00 PM - 9:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Studio Address */}
          <div className="bg-charcoal/80 border border-white/10 p-6">
            <div className="flex items-center gap-2.5 mb-3">
              <MapPin className="w-4 h-4 text-crimson" />
              <h3 className="font-display text-lg tracking-wide">Studio Address</h3>
            </div>
            <p className="text-xs sm:text-sm text-off-white/70 leading-relaxed mb-4">
              3/165, 2nd floor, ECR, Neelankarai, Chennai - 600115
            </p>
            <a
              href="https://share.google/B4o5KqI8TVrJwbilJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-crimson text-xs uppercase tracking-wider font-semibold hover:underline"
            >
              <span>Open in Google Maps</span>
              <span>→</span>
            </a>
          </div>

          {/* Follow Us */}
          <div className="bg-charcoal/80 border border-white/10 p-6">
            <h3 className="font-display text-lg tracking-wide mb-4">Follow 7DC Official</h3>
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/__7dc__?igsi=MXB6bHp6aWd6amg2MQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-crimson hover:border-crimson transition-all text-white"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-crimson hover:border-crimson transition-all text-white"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-crimson hover:border-crimson transition-all text-white"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Contact