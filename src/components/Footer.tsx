'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Footer = () => {
  const pathname = usePathname()
  const hideFooter =
    pathname === '/contact/success' || pathname === '/contact/error'

  if (hideFooter) return null

  return (
    <footer className='py-8 mt-16 mx-8 text-xs sm:text-base'>
      <div className='flex justify-center gap-8 sm:gap-24'>
        <div>
          <p>ИП Кузин И.Ю.</p>
          <p>ИНН 730603801312</p>
          <p>ОГРНИП 312730615700025</p>
        </div>
        <div className='grid *:hover:text-accent *:duration-200'>
          <Link href='tel:+7 (927) 741-04-18'>+7 (927) 741-04-18</Link>
          <Link
            target='_blank'
            href='https://docs.google.com/spreadsheets/d/1xW6d66gbo4ie11sBBRGRBqplyHzygXcNe3pLe8Ua8gM/edit?gid=0#gid=0'
          >
            Наш прайс
          </Link>
        </div>
      </div>
      <p className='text-xs sm:text-sm mt-5 text-center'>
        &copy; {new Date().getFullYear()} Все права защищены.
      </p>
    </footer>
  )
}
