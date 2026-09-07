import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"

const DEFAULT_STORAGE_KEY = "7dc-splash-seen"
// Extended timing for a relaxed, cinematic pacing
const EXIT_AT = 2_950
const HARD_STOP_AT = 3_400
const cinematicEase = [0.22, 1, 0.36, 1]
const revealEase = [0.76, 0, 0.24, 1]
const emblemPath = "M 68 42 H 232 V 178 H 168 M 104 78 H 178 L 126 160"

const grainStyle = {
  backgroundImage: [
    "radial-gradient(circle at 50% 48%, rgba(229, 9, 20, 0.11), transparent 26%)",
    "radial-gradient(circle at 50% 50%, transparent 42%, rgba(0, 0, 0, 0.92) 100%)",
    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='.28'/%3E%3C/svg%3E\")",
  ].join(","),
}

function SevenEmblem({ reducedMotion }) {
  const drawTransition = reducedMotion
    ? { duration: 0 }
    : { duration: 1.4, ease: cinematicEase } // Slowed from 0.82s to 1.4s

  return (
    <svg
      aria-hidden="true"
      className="h-auto w-[min(54vw,18rem)] overflow-visible sm:w-[min(34vw,21rem)]"
      fill="none"
      viewBox="0 0 300 220"
    >
      <defs>
        <linearGradient id="first-splash-metal" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.28" stopColor="#8d8d8d" />
          <stop offset="0.48" stopColor="#f8f8f8" />
          <stop offset="0.72" stopColor="#6b6b6b" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="first-splash-crimson" x1="0" x2="1">
          <stop offset="0" stopColor="#8b0009" />
          <stop offset="0.44" stopColor="#e50914" />
          <stop offset="1" stopColor="#ff4b53" />
        </linearGradient>
        <filter id="first-splash-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur result="blur" stdDeviation="4.5" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="first-splash-soft-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="11" />
        </filter>
      </defs>

      <motion.path
        d={emblemPath}
        filter="url(#first-splash-soft-glow)"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: reducedMotion ? 0.16 : 0.52, pathLength: 1 }}
        stroke="#e50914"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeWidth="8"
        transition={drawTransition}
      />
      <motion.path
        d={emblemPath}
        filter="url(#first-splash-glow)"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        stroke="url(#first-splash-crimson)"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeWidth="3"
        transition={drawTransition}
      />
      <motion.path
        d={emblemPath}
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        stroke="url(#first-splash-metal)"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeWidth="2.15"
        transition={
          reducedMotion
            ? { duration: 0 }
            : { delay: 1.1, duration: 0.95, ease: revealEase } // Smooth second pass
        }
      />
    </svg>
  )
}

function LensFlare({ reducedMotion }) {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-px w-[min(100vw,70rem)] -translate-x-1/2 -translate-y-1/2 origin-center bg-gradient-to-r from-transparent via-[#e50914] to-transparent shadow-[0_0_14px_#e50914]"
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: [0, 0.82, 0.18], scaleX: [0, 1, 1.12] }}
      transition={
        reducedMotion
          ? { duration: 0 }
          : { delay: 0.4, duration: 1.3, ease: cinematicEase, times: [0, 0.62, 1] }
      }
    >
      <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff4b53] blur-[5px]" />
    </motion.div>
  )
}

function BrandLockup({ reducedMotion }) {
  return (
    <div className="mt-3 text-center sm:mt-4">
      <motion.h1
        className="whitespace-nowrap pl-[0.4em] text-[clamp(0.78rem,2.1vw,1.05rem)] font-medium uppercase tracking-[0.4em] text-[#f4f4f4] sm:text-[clamp(0.9rem,1.35vw,1.15rem)]"
        initial={{ opacity: 0, y: 10, letterSpacing: "0.4em" }}
        animate={{ opacity: 1, y: 0, letterSpacing: reducedMotion ? "0.4em" : "0.7em" }}
        transition={
          reducedMotion ? { duration: 0 } : { delay: 1.3, duration: 1.0, ease: cinematicEase }
        }
      >
        7 Dance Company
      </motion.h1>
      <motion.p
        className="mt-4 text-[0.52rem] font-light uppercase tracking-[0.48em] text-white/35 sm:mt-5 sm:text-[0.62rem]"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          reducedMotion ? { duration: 0 } : { delay: 1.6, duration: 0.85, ease: cinematicEase }
        }
      >
        Stage <span className="px-1 text-[#e50914]/75">•</span> Screen{" "}
        <span className="px-1 text-[#e50914]/75">•</span> Studio
      </motion.p>
    </div>
  )
}

function Shockwave({ reducedMotion }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-2 w-2 -translate-x-1/2 -translate-y-1/2"
    >
      <motion.span
        className="absolute left-1/2 top-1/2 block h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e50914]/80 shadow-[0_0_24px_#e50914]"
        initial={{ opacity: 0, scale: 0.1 }}
        animate={
          reducedMotion ? { opacity: 0 } : { opacity: [0, 0.85, 0], scale: [0.1, 0.9, 2.75] }
        }
        transition={
          reducedMotion
            ? { duration: 0 }
            : { delay: 2.2, duration: 0.8, ease: revealEase, times: [0, 0.2, 1] }
        }
      />
      <motion.span
        className="absolute left-1/2 top-1/2 block h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff4b53] blur-xl"
        initial={{ opacity: 0, scale: 0.2 }}
        animate={
          reducedMotion ? { opacity: 0 } : { opacity: [0, 0.8, 0], scale: [0.2, 1.8, 5.5] }
        }
        transition={
          reducedMotion ? { duration: 0 } : { delay: 2.25, duration: 0.5, ease: revealEase }
        }
      />
    </div>
  )
}

function FirstSplashOverlay({ reducedMotion }) {
  return (
    <motion.div
      aria-label="7 Dance Company"
      aria-live="polite"
      className="fixed inset-0 z-[9999] isolate flex h-[100dvh] w-screen items-center justify-center overflow-hidden bg-[#050505] text-white"
      exit={{ opacity: 0, scale: 1.05 }}
      initial={{ opacity: 1, scale: 1 }}
      role="status"
      transition={reducedMotion ? { duration: 0 } : { duration: 0.55, ease: revealEase }}
    >
      {/* Shutters smoothly splitting away */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-0 h-1/2 bg-[#050505]"
        exit={{ y: "-100%" }}
        transition={
          reducedMotion ? { duration: 0 } : { delay: 0.05, duration: 0.5, ease: revealEase }
        }
      />
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-0 h-1/2 bg-[#050505]"
        exit={{ y: "100%" }}
        transition={
          reducedMotion ? { duration: 0 } : { delay: 0.05, duration: 0.5, ease: revealEase }
        }
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.16] mix-blend-screen"
        style={grainStyle}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.46)_74%,rgba(0,0,0,0.94)_100%)]"
      />
      <div className="relative z-10 flex -translate-y-[3vh] flex-col items-center">
        <div className="relative">
          <SevenEmblem reducedMotion={reducedMotion} />
          <LensFlare reducedMotion={reducedMotion} />
          <Shockwave reducedMotion={reducedMotion} />
        </div>
        <BrandLockup reducedMotion={reducedMotion} />
      </div>
    </motion.div>
  )
}

export default function SplashScreen({
  children,
  className = "",
  playOncePerSession = true,
  storageKey = DEFAULT_STORAGE_KEY,
}) {
  const reducedMotion = useReducedMotion()
  const [showSplash, setShowSplash] = useState(() => {
    if (!playOncePerSession || typeof window === "undefined") return true
    try {
      return window.sessionStorage.getItem(storageKey) !== "1"
    } catch {
      return true
    }
  })

  useEffect(() => {
    if (!showSplash) return undefined
    const previousHtmlOverflow = document.documentElement.style.overflow
    const previousBodyOverflow = document.body.style.overflow
    const previousBodyPaddingRight = document.body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    document.documentElement.style.overflow = "hidden"
    document.body.style.overflow = "hidden"
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    const complete = () => {
      if (playOncePerSession) {
        try {
          window.sessionStorage.setItem(storageKey, "1")
        } catch {
          // fallback if sessionStorage unavailable
        }
      }
      setShowSplash(false)
    }

    const exitTimer = window.setTimeout(complete, EXIT_AT)
    const hardStopTimer = window.setTimeout(complete, HARD_STOP_AT)
    const unlockTimer = window.setTimeout(() => {
      document.documentElement.style.overflow = previousHtmlOverflow
      document.body.style.overflow = previousBodyOverflow
      document.body.style.paddingRight = previousBodyPaddingRight
    }, HARD_STOP_AT)

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(hardStopTimer)
      window.clearTimeout(unlockTimer)
      document.documentElement.style.overflow = previousHtmlOverflow
      document.body.style.overflow = previousBodyOverflow
      document.body.style.paddingRight = previousBodyPaddingRight
    }
  }, [playOncePerSession, showSplash, storageKey])

  return (
    <div className={className}>
      {children}
      <AnimatePresence mode="sync">
        {showSplash && <FirstSplashOverlay reducedMotion={Boolean(reducedMotion)} />}
      </AnimatePresence>
    </div>
  )
}