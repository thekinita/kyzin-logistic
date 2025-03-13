import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/Footer'

const montserratSans = Montserrat({
  variable: '--font-montserrat-sans',
  subsets: ['latin', 'cyrillic']
})

export const metadata: Metadata = {
  title: 'ИП Кузьмин И.Ю.',
  description: 'Доставка товаров от поставщика до маркетплейсов'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='./logo.png' type='image/png' />
      </head>
      <body className={`${montserratSans.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
