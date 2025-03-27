'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Footer = () => {
  const pathname = usePathname()
  const hideFooter =
    pathname === '/contact/success' || pathname === '/contact/error'

  if (hideFooter) return null

  return (
    <footer className="py-8 mt-16 mx-8 text-sm sm:text-base">
      <div className="grid justify-center gap-2">
        <p className="font-bold text-lg text-center">ИП Кузин И.Ю.</p>
        <div className="sm:flex grid text-center gap-4 *:hover:underline *:hover:text-accent *:duration-200">
          <Link href="tel:+7 (985) 451-10-01">+7 (985) 451-10-01</Link>
          <Link
            target="_blank"
            href="https://docs.google.com/spreadsheets/d/1xW6d66gbo4ie11sBBRGRBqplyHzygXcNe3pLe8Ua8gM/edit?gid=0#gid=0"
          >
            Прайс по перевозкам
          </Link>
        </div>
      </div>
      <p className="opacity-60 mt-5 text-center">
        &copy; {new Date().getFullYear()} Все права защищены.
      </p>
    </footer>
  )
}
