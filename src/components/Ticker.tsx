'use client'

import { useEffect } from 'react'

type TickerProps = {
  images: { url: string; alt: string }[]
}

const Ticker = ({ images }: TickerProps) => {
  const ariaHidden = [false, true]

  useEffect(() => {
    images.forEach((image) => {
      const img = new Image()
      img.src = image.url
    })
  }, [images])

  return (
    <div
      className='grid overflow-hidden'
      style={{
        WebkitMaskImage:
          'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)'
      }}
    >
      <div className='col-start-1 row-start-1 flex h-64 items-center overflow-hidden'>
        {ariaHidden.map((hidden, idx) => (
          <ul
            className='animate-ticker flex shrink-0 gap-8 pr-8'
            aria-hidden={hidden}
            key={idx}
          >
            {images.map((image) => (
              <li
                key={image.url + idx}
                className='shrink-0 flex items-center justify-center'
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className='w-[220px] min-h-[40px] object-cover opacity-85 filter grayscale select-none pointer-events-none'
                  draggable='false'
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Ticker
