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
      <h2 className='text-3xl font-bold text-accent'>Отзывы наших клиентов</h2>
      <div className='flex justify-between items-center py-20 px-6py-20 px-6'>
        <button
          onClick={prevTestimonial}
          className='cursor-pointer p-2 hover:text-accent duration-200'
        >
          <ChevronLeftIcon className='w-6 h-6' />
        </button>
        <div>
          <motion.div
            key={testimonials[currentIndex].company}
            initial={{ opacity: 0, x: xSide }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: xSide }}
            transition={{ duration: 0.5 }}
          >
            <h3 className='text-2xl font-semibold mb-4'>
              {testimonials[currentIndex].company}
            </h3>
            <p className='text-lg max-w-2xl mx-auto'>
              "{testimonials[currentIndex].text}"
            </p>
          </motion.div>
        </div>
        <button
          onClick={nextTestimonial}
          className='cursor-pointer p-2 hover:text-accent duration-200'
        >
          <ChevronRightIcon className='w-6 h-6' />
        </button>
      </div>
    </section>
  )
}

export default Testimonials
