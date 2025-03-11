import CTA from '@/components/CTA'
import DeliveryAlgorithm from '@/components/DeliveryAlgorithm'
import Opportunities from '@/components/Opportunities'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className='text-forlight dark:text-fordark'>
      <CTA />
      <Opportunities />
      <DeliveryAlgorithm />
      <Stats />
      <Testimonials />
    </main>
  )
}
