import CTA from '@/components/CTA'
import DeliveryAlgorithm from '@/components/DeliveryAlgorithm'
import Opportunities from '@/components/Opportunities'

export default function Home() {
  return (
    <main className='text-forlight dark:text-fordark'>
      <CTA />
      <Opportunities />
      <DeliveryAlgorithm />
    </main>
  )
}
