'use client'

import { usePathname } from 'next/navigation'

export const Footer = () => {
  const pathname = usePathname()
  const hideFooter =
    pathname === '/contact/success' || pathname === '/contact/error'

  if (hideFooter) return null

  return (
    <footer className='py-8 mt-16 mx-8'>
      <div className='flex justify-center gap-8 sm:gap-24'>
        <div>
          <p>ИП Кузин И.Ю.</p>
          <p>ИНН 730603801312</p>
          <p>ОГРНИП 312730615700025</p>
        </div>
        <div className='grid *:hover:text-accent *:duration-200'>
          <a target='_blank' href='https://ati.su/firms/1230629/info'>
            Мы на ATI.su
          </a>
          <a
            target='_blank'
            href='https://docs.google.com/spreadsheets/d/1xW6d66gbo4ie11sBBRGRBqplyHzygXcNe3pLe8Ua8gM/edit?gid=0#gid=0'
          >
            Наш прайс
          </a>
        </div>
      </div>
      <p className='text-sm mt-5 text-center'>
        &copy; {new Date().getFullYear()} Все права защищены.
      </p>
    </footer>
  )
}
