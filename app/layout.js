import Nav from '@/components/Nav'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cosmetic',
  description: 'Discover a world of beauty and elegance at our cosmetic website. Explore a wide range of high-quality products that enhance your natural radiance. From skincare essentials to captivating makeup collections, indulge in a transformative experience that celebrates your unique style. Find your perfect blend of luxury, innovation, and self-expression with our curated selection. Unlock the secrets to timeless beauty and elevate your daily routine with our exceptional cosmetics. Shop now and embark on a journey of self-discovery through the art of cosmetics.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>

    </head>
          <body>
        {/* <div className='main'>
                  <div className='gradient' />
              </div> */}
              
        <main className='app mx-auto shadow-lg max-w-[1500px]'>
          <Nav />
          <Hero/>
          {children}
          <Contact/>
      <Footer />

              </main>
        
    </body>
    </html>
  )
}
