'use client'

import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function SuccessPage() {
  const MotionCheckCircleIcon = motion(CheckCircleIcon)

  return (
    <div className='flex flex-col text-center items-center justify-center min-h-screen p-6 bg-gray-100 dark:bg-111'>
      <MotionCheckCircleIcon
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className='w-24 h-24 text-green-500 mb-4'
      />
      <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>
        Заявка успешно отправлена!
      </h1>
      <p className='text-gray-900 dark:text-white mt-2'>
        Наш менеджер с Вами свяжется в ближайшее время.
      </p>
      <a
        href='/'
        className='mt-6 px-4 py-2 font-semibold text-accent dark:hover:text-white hover:text-gray-900 duration-200'
      >
        Перейти на главную страницу
      </a>
    </div>
  )
}
