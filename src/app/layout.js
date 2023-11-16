import { Inter } from 'next/font/google'
import Navbar from '@app/components/navbar/navbar'
import '@styles/global.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Od',
  description: 'Materi pekan 12 PBW 20231',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
