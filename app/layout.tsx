import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marc Brigham | Front End Engineer',
  description: 'Front End Engineer. Showcase of technology and projects I\'ve worked with.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights/>
        </ThemeProvider>
        
      </body>
    </html>
  )
}
