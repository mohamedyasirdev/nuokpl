import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NovaPlus By Mohamed Yasir',
  description: 'online commuinty Development By Mohamed Yasir',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar/> */}
        {children}
        </body>
    </html>
  )
}