'use client'

import Ticker from './Ticker'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className='h-screen grid justify-between'>
      <div className='relative isolate overflow-hidden px-6 pt-16 sm:px-16 md:pt-24 lg:px-24 lg:pt-0'>
        <div className='mx-auto text-center lg:py-32'>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='text-3xl font-semibold tracking-tight text-balance sm:text-5xl'
          >
            Доставка товаров от поставщика до маркетплейсов
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='mt-10'
          >
            <a
              href='contact'
              className='sm:text-2xl text-base font-semibold text-accent hover:text-forlight dark:hover:text-fordark duration-200'
            >
              Оставить заявку <span aria-hidden='true'>→</span>
            </a>
          </motion.div>
        </div>
      </div>
      <Ticker
        images={[
          {
            alt: 'wildberries',
            url: '/ticker/wildberries.webp'
          },
          {
            alt: 'ozon',
            url: '/ticker/ozon.webp'
          },
          {
            alt: 'lamoda',
            url: '/ticker/lamoda.webp'
          },
          {
            alt: 'yandex_market',
            url: '/ticker/ya_market.webp'
          }
        ]}
      />
    </section>
  )
}
