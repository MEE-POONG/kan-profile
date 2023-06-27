// import './assets/scss/globals.scss'
import { Inter } from 'next/font/google'
import Navbar from "./navbar"

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar/>
      <main className={inter.className}>{children}</main>
    </>
  )
}


