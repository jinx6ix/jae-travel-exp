'use client'
import React from 'react'
import { motion } from 'framer-motion'

import LayoutG from './components/Destinations-card'
import SignupFormD from './components/signup'
import BentoG from './components/Tour-card'
import TabsD from './components/Why-trav'
import { Slider } from './images-slider'

export default function ImagesSlider() {
  const images = [
    'https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=MjA3fDB8MHxwaG90by1wYWd1fHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1483982258113-b72862e6cff6?qauto=format&fit=crop&ixlib=rb-4.0.3&ixid=MjA3fDB8MHxwaG90by1wYWd1fHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=MjA3fDB8MHxwaG90by1wYWd1fHx8fGVufDB8fHx8fA%3D%3D',
  ]
  return (
    <>
      <Slider className="h-[40rem]" image={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 relative py-4">
            The hero section slideshows <br /> nobody asked for
          </motion.p>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Book Now </span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      </Slider>
      <BentoG />
      <LayoutG />
      <TabsD />
      <SignupFormD />
    </>
  )
}
