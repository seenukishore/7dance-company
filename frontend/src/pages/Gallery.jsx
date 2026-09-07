import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, X, Play, ZoomIn, Film } from 'lucide-react'
import { galleryPhotos, galleryVideos } from '../data/galleryData'

const filterTabs = ['All', 'Celebrity', 'Stage Shows', 'Studio', 'Zumba & Fitness', 'Videos']

function Gallery() {
  const [activeTab, setActiveTab] = useState('All')
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedItem(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const getDisplayItems = () => {
    if (activeTab === 'All') {
      return [...galleryPhotos, ...galleryVideos]
    }
    if (activeTab === 'Videos') {
      return galleryVideos
    }
    return galleryPhotos.filter((item) => item.category === activeTab)
  }

  const displayItems = getDisplayItems()

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-crimson selection:text-white">
      {/* 1. HERO */}
      <section className="relative h-[340px] sm:h-[380px] flex items-center overflow-hidden border-b border-white/5">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1600&q=80&auto=format&fit=crop"
          alt="Gallery Banner"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/65" />
        <div className="relative z-10 px-8 sm:px-16 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-crimson/20 border border-crimson/40 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-crimson" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-off-white">
              Moments & Visuals
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl text-white tracking-wide mb-2">
            Visual <span className="text-crimson drop-shadow-[0_0_20px_rgba(229,9,20,0.5)]">Gallery</span>
          </h1>
          <p className="text-off-white/70 text-sm sm:text-base max-w-lg">
            Stage lights, studio rehearsals, celebrity workshops, and adrenaline-charged dance routines.
          </p>
        </div>
      </section>

      {/* 2. FILTER TABS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pt-14 pb-8">
        <div className="flex flex-wrap gap-2.5 justify-center">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 text-xs uppercase tracking-wider font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-crimson text-white shadow-[0_0_20px_rgba(229,9,20,0.45)] scale-105'
                  : 'bg-charcoal text-off-white/70 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* 3. SMOOTH POP-LAYOUT GRID (NO OVERLAP / NO DELAY) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {displayItems.map((item) => {
              const isVideo = item.category === 'Videos'
              const imgSrc = isVideo ? item.thumbnail : item.src

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  onClick={() => setSelectedItem(item)}
                  className="group relative h-64 overflow-hidden bg-charcoal border border-white/10 hover:border-crimson cursor-pointer shadow-lg hover:shadow-[0_8px_30px_rgba(229,9,20,0.3)]"
                >
                  <img
                    src={imgSrc}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Top Badge */}
                  <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm border border-white/10 text-off-white text-[10px] uppercase tracking-widest px-2.5 py-0.5 font-semibold">
                    {item.category}
                  </span>

                  {/* Center Action Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-12 h-12 rounded-full bg-crimson/90 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      {isVideo ? <Play className="w-5 h-5 fill-white pl-0.5" /> : <ZoomIn className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="font-display text-sm text-white tracking-wide truncate group-hover:text-crimson transition-colors">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. LIGHTBOX / VIDEO MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative z-10 max-w-4xl w-full bg-charcoal border border-white/20 shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-crimson hover:border-crimson transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {selectedItem.category === 'Videos' ? (
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedItem.youtubeId}?autoplay=1`}
                    title={selectedItem.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-none"
                  />
                </div>
              ) : (
                <div className="relative max-h-[75vh] flex items-center justify-center bg-black">
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    className="max-h-[75vh] w-auto max-w-full object-contain"
                  />
                </div>
              )}

              {/* Modal Footer Info */}
              <div className="p-5 bg-card-dark border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-crimson uppercase tracking-widest font-semibold block mb-0.5">
                    {selectedItem.category}
                  </span>
                  <h3 className="font-display text-lg text-white tracking-wide">
                    {selectedItem.title}
                  </h3>
                </div>
                {selectedItem.category === 'Videos' && (
                  <div className="flex items-center gap-1.5 text-xs text-off-white/60">
                    <Film className="w-4 h-4 text-crimson" />
                    <span>YouTube Stream</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery