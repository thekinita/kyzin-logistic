'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { testimonials } from '../../public/testimonials'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [xSide, setXSide] = useState(0)

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setXSide(-200)
  }

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setXSide(200)
  }

  return (
    <section className='relative w-full mx-auto text-center'>
      <h2 className='text-3xl font-bold text-accent mx-10 sm:mx-auto'>
        Отзывы наших клиентов
      </h2>
      <div className='flex justify-between items-center py-20 px-6'>
        <button
          onClick={prevTestimonial}
          className='cursor-pointer p-2 hover:text-accent duration-200 m-auto'
        >
          <ChevronLeftIcon className='w-6 h-6' />
        </button>
        <div className='overflow-visible w-full max-w-2xl'>
          <motion.div
            key={testimonials[currentIndex].company}
            initial={{ opacity: 0, x: xSide }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: xSide }}
            transition={{ duration: 0.5 }}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x > 200) prevTestimonial()
              if (info.offset.x < -200) nextTestimonial()
            }}
          >
            <h3 className='sm:text-2xl text-1xl font-semibold mb-4'>
              {testimonials[currentIndex].company}
            </h3>
            <p className='sm:text-lg max-w-2xl mx-auto'>
              {'"'}
              {testimonials[currentIndex].text}
              {'"'}
            </p>
          </motion.div>
        </div>
        <button
          onClick={nextTestimonial}
          className='cursor-pointer p-2 hover:text-accent duration-200 m-auto'
        >
          <ChevronRightIcon className='w-6 h-6' />
        </button>
      </div>
    </section>
  )
}

export default Testimonials
