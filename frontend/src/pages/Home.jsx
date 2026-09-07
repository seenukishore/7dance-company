import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import OurStorySection from '../components/OurStorySection'
import ProgramsPreview from '../components/ProgramsPreview'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'

function Home() {
  return (
    <div>
      <Hero />
      <StatsBar />
      <OurStorySection />
      <ProgramsPreview />
      <Testimonials />
      <CTASection />
    </div>
  )
}

export default Home