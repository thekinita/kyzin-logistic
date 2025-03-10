'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const steps = [
  'Ваша заявка на нужную услугу поступает ответственному менеджеру',
  'Обработка информации, просчет по Вашему ТЗ',
  'Заключение договора',
  'Выполнение работ',
  'Постоплата по счету + УПД'
]

const DeliveryAlgorithm = () => {
  const [visibleStep, setVisibleStep] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.step-item')
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.9) {
          setVisibleStep(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className='relative max-w-7xl mx-auto py-20 px-6'>
      <h2 className='text-3xl font-bold mb-10 text-accent'>
        Алгоритм доставки
      </h2>
      <div className='flex flex-col'>
        {steps.map((step, index) => (
          <div key={index} className='flex items-start space-x-20'>
            <div className='flex flex-col items-center'>
              {index !== 0 && <div className='w-1 bg-accent' />}
              <motion.div
                initial={{ scale: 0 }}
                animate={
                  visibleStep !== null && visibleStep >= index
                    ? { scale: 1 }
                    : {}
                }
                transition={{ duration: 0.3 }}
                className='w-6 h-6 bg-accent rounded-full items-center text-center text-111 font-bold text-base'
              >
                {index + 1}
              </motion.div>
              {index !== steps.length - 1 && (
                <div className='w-1 h-40 my-2 bg-accent' />
              )}
            </div>

            <motion.div
              className='step-item opacity-0'
              animate={
                visibleStep !== null && visibleStep >= index
                  ? { opacity: 1, y: 0 }
                  : {}
              }
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className='text-xl font-semibold'>{step}</h3>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DeliveryAlgorithm
