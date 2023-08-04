'use client'

import './globals.css'
import { DM_Sans } from 'next/font/google'
import Navbar from '../components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

const inter = DM_Sans({ weight: ['400'], subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
