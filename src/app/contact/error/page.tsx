'use client'

import { XCircleIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

export default function ErrorPage() {
  const MotionCheckCircleIcon = motion(XCircleIcon)

  return (
    <main className='flex flex-col text-center items-center justify-center min-h-screen p-6'>
      <MotionCheckCircleIcon
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className='w-24 h-24 text-red-500 mb-4'
      />
      <h1 className='text-2xl font-bold'>Что-то пошло не так.</h1>
      <p className='mt-2'>
        Попробуйте снова или свяжитесь с нами по телефону{' '}
        <a
          href='tel:+7 (927) 741-04-18'
          className='font-semibold text-accent dark:hover:text-fordark hover:text-forlight duration-200'
        >
          +7(927)741-04-18
        </a>
        .
      </p>
      <a
        href='/contact'
        className='mt-6 px-4 py-2 font-semibold text-accent dark:hover:text-fordark hover:text-forlight duration-200'
      >
        Попробовать снова
      </a>
    </main>
  )
}
