import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next CRUD App',
  description: 'CRUD App in NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-3xl bg-slate-500 mx-auto p-4">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
