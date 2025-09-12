'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  const [showLogo, setShowLogo] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Show logo for 1.5 seconds, then start dimming
    const timer1 = setTimeout(() => {
      setShowLogo(false)
    }, 1000)

    // Show content after logo dims
    const timer2 = setTimeout(() => {
      setShowContent(true)
    }, 1500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-4 flex items-center justify-center">
      
      {/* Logo Animation */}
      <div className={`fixed inset-0 flex items-center justify-center z-10 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 transition-all duration-500 ${showLogo ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="text-center">
          {/* Logo Image */}
          <Image
            src="https://res.cloudinary.com/dt5qoqw6u/image/upload/v1757661385/aalihyolcnwlrsjuecvl.png"
            alt="Baby Click Logo"
            width={400}
            height={300}
            className="mx-auto rounded-2xl"
            priority
          />
        </div>
      </div>

      {/* Main Content */}
      <div className={`text-center transition-all duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-comic text-dark-purple mb-8">
            Choose the language you want to watch the cartoon in
          </h1>

          {/* Language Options - Plain Text */}
          <div className="space-y-8">
            <div>
              <Link href="/hindi" className="text-xl md:text-2xl font-comic text-dark-purple hover:text-bright-pink">
                Hindi
              </Link>
              <hr className="border-t-2 mt-4 mx-auto w-24" style={{ borderColor: '#FF6FB5' }} />
            </div>
            
            <div>
              <Link href="/english" className="text-xl md:text-2xl font-comic text-dark-purple hover:text-bright-pink">
                English
              </Link>
              <hr className="border-t-2 mt-4 mx-auto w-24" style={{ borderColor: '#FF6FB5' }} />
            </div>
            
            <div>
              <Link href="/bhojpuri" className="text-xl md:text-2xl font-comic text-dark-purple hover:text-bright-pink">
                Bhojpuri
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}
