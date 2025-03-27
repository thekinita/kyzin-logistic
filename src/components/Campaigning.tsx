'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const Campaigning = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto py-16 px-4 text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
      <p className="text-lg mb-6">
        Получите бесплатную консультацию по телефону
        <a
          href="tel:+7 (985) 451-10-01"
          className="font-semibold text-accent dark:hover:text-fordark hover:text-forlight duration-200"
        >
          {' '}
          +7 (985) 451-10-01{' '}
        </a>
        или оставьте заявку и наш менеджер перезвонит Вам.
      </p>
      <Link
        href="/contact"
        className="sm:text-2xl font-semibold text-accent hover:text-forlight dark:hover:text-fordark duration-200"
      >
        Оставить заявку <span aria-hidden="true">→</span>
      </Link>
    </motion.section>
  )
}

export default Campaigning
