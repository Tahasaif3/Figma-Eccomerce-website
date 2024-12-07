import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import {Inter} from "next/font/google"
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight:["700"],
 });

 const inter = Inter({ 
  subsets: ['latin'],
  weight:["700"],
 })
 

export const metadata: Metadata = {
  title: 'Exclusive E-commerce Figma Assignment',
  description: 'Your one-stop shop for all things tech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${inter.className} antialiased`}
      >

        {children}
      </body>
    </html>
  )
}
