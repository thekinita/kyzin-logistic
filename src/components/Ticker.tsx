'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type TickerProps = {
  images: { url: string; alt: string }[]
}

const Ticker = ({ images }: TickerProps) => {
  const ariaHidden = [false, true]

  useEffect(() => {
    images.forEach((image) => {
      const img = new window.Image()
      img.src = image.url
    })
  }, [images])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 3, delay: 1 }}
      className="grid overflow-hidden"
      style={{
        WebkitMaskImage:
          'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)'
      }}
    >
      <div className="col-start-1 row-start-1 flex h-64 items-center overflow-hidden">
        {ariaHidden.map((hidden, idx) => (
          <ul
            className="animate-ticker flex shrink-0 gap-8 pr-8"
            aria-hidden={hidden}
            key={idx}
          >
            {images.map((image) => (
              <li
                key={image.url + idx}
                className="shrink-0 flex items-center justify-center"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  width="220"
                  height="40"
                  className="min-h-[40px] object-cover opacity-85 filter grayscale select-none pointer-events-none"
                  draggable="false"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </motion.div>
  )
}

export default Ticker
