import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@/app/globals.css'

const inter = Poppins({ weight: '500', style: 'normal', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Teste',
  description: 'Teste page',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
