'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cartoons, getRandomEpisode } from '../../data/cartoons'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const [clickedCard, setClickedCard] = useState(null)

  const handleCartoonClick = (cartoon) => {
    // Set clicked state for animation
    setClickedCard(cartoon.id)
    
    // Get random episode
    const randomEpisode = getRandomEpisode(cartoon.episodes)
    
    // Open YouTube in new tab
    window.open(randomEpisode, '_blank', 'noopener,noreferrer')
    
    // Reset clicked state after animation
    setTimeout(() => {
      setClickedCard(null)
    }, 600)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: { 
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: { 
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-4">
      {/* Back Arrow */}
      <motion.div
        className="absolute top-4 left-4 z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/">
          <motion.div
            className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border-2 border-bright-pink hover:border-success-green cursor-pointer"
            whileHover={{ scale: 1.1, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-dark-purple"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </Link>
      </motion.div>

      {/* Header Section */}
      <motion.header 
        className="text-center py-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-comic text-dark-purple mb-4"
          style={{
            textShadow: '4px 4px 0px #FF6FB5, 8px 8px 0px #6ECFFF'
          }}
        >
          Baby Click
        </motion.h1>
        <motion.p 
          className="text-lg md:text-2xl text-dark-purple font-comic font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Click your favorite cartoon and watch random episodes!
        </motion.p>
      </motion.header>

      {/* Cartoons Grid */}
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cartoons.map((cartoon) => (
            <motion.div
              key={cartoon.id}
              className="relative group"
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                className={`
                  bg-white rounded-3xl shadow-lg p-6 text-center cursor-pointer
                  border-4 border-bright-pink hover:border-success-green
                  transform transition-all duration-300 touch-target
                  ${clickedCard === cartoon.id ? 'ring-4 ring-success-green ring-opacity-50' : ''}
                `}
                onClick={() => handleCartoonClick(cartoon)}
              >
                {/* Character Image */}
                <motion.div 
                  className="relative mb-4 mx-auto w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  
                  <Image
                    src={cartoon.image}
                    alt={cartoon.name}
                    fill
                    className={`object-contain rounded-2xl ${
                      cartoon.id === 1 ? 'scale-150 ' : 
                      cartoon.id === 2 ? 'scale-150' : 
                      cartoon.id === 3 ? '' : 
                      cartoon.id === 4 ? 'scale-125' : 
                      cartoon.id === 5 ? 'scale-150' : 
                      cartoon.id === 6 ? 'scale-150' : 
                      cartoon.id === 7 ? 'scale-130' : 
                      cartoon.id === 8 ? 'scale-150' : 
                      cartoon.id === 9 ? 'scale-125' : 
                      cartoon.id === 10 ? 'scale-125' : ''
                    }`}
                    sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                    priority
                  />
                </motion.div>

                {/* Character Name */}
                <motion.h3 
                  className="text-xl md:text-2xl lg:text-3xl font-comic text-dark-purple font-bold mb-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {cartoon.name}
                </motion.h3>

                {/* Click Hint */}
                <motion.div
                  className="text-sm md:text-base text-dark-purple opacity-70 font-medium"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1, scale: 1.05 }}
                >
                  Click to watch!
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer 
        className="text-center py-8 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.p 
          className="text-dark-purple font-comic text-lg md:text-xl"
          whileHover={{ scale: 1.05 }}
        >
          An intitiative by Amrita Rath
        </motion.p>
      </motion.footer>
    </div>
  )
}
