'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Media } from '../../../payload/payload-types'
import classes from './index.module.scss'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { IoMdArrowRoundBack } from 'react-icons/io'
import Link from 'next/link'
import TypeWriter from '../../_components/TypedText'
import ContentSlider from '../../_components/HeroButton'

interface SlidingHeroProps {
  slidingImages: { media: Media | string; title: string; id?: string }[]
  smallSliderImages: { media: Media | string; title: string; id?: string }[]
}
const words = [
  'Safari Odyssey: Embrace the Wild Journey.',
  'Wilderness Unraveled, Adventure One at Time.',
  "Discover Africa's Untamed Heartbeat, Boldly.",
  'Free Wildlife Roams: Unleash Adventurous Spirit.',
  "Immersive Beauty: Africa's Savannas Majesty.",
  "Witness Life's Primal Dance: African Safari.",
  'Explore Untamed Majesty, Wilderness Realm.',
  "Senses Awakened: Nature's Playground Journey.",
  "Secrets Unveiled: Africa's Captivating Wilderness.",
  'Transformative Adventure: Into Wild Unknown.',
]
const SlidingHero: React.FC<SlidingHeroProps> = ({
  slidingImages = [],
  smallSliderImages = [],
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentSmallSlideIndex, setCurrentSmallSlideIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const smallIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const nextSlide = useCallback(() => {
    setCurrentSlide(prevSlide => (prevSlide === slidingImages.length - 1 ? 0 : prevSlide + 1))
  }, [slidingImages])

  const nextSmallSlide = useCallback(() => {
    setCurrentSmallSlideIndex(prevIndex =>
      prevIndex === smallSliderImages.length - 1 ? 0 : prevIndex + 1,
    )
  }, [smallSliderImages])

  const prevSmallSlide = useCallback(() => {
    setCurrentSmallSlideIndex(prevIndex =>
      prevIndex === 0 ? smallSliderImages.length - 1 : prevIndex - 1,
    )
  }, [smallSliderImages])

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 9000)
    smallIntervalRef.current = setInterval(nextSmallSlide, 3000)
    return () => {
      clearInterval(intervalRef.current as ReturnType<typeof setInterval>)
      clearInterval(smallIntervalRef.current as ReturnType<typeof setInterval>)
    }
  }, [nextSlide, nextSmallSlide])

  return (
    <div className={classes.SliderContainer}>
      {/* Main slider */}
      {slidingImages.map((slider, index) => (
        <div
          className={`${classes.card} ${index === currentSlide ? classes.active : ''}`}
          key={`${slider.title}-${index}`}
        >
          {slider.media &&
            (typeof slider.media === 'string' ? (
              <Image
                src={slider.media}
                width={1200}
                height={800}
                alt={slider.title}
                className={classes.image}
                priority
              />
            ) : (
              <Image
                src={slider.media.imagekit.url}
                width={1200}
                height={800}
                alt={slider.title}
                className={classes.image}
                priority
              />
            ))}
        </div>
      ))}

      {/* Small slider */}
      <div className={classes.smallSliderConatiner}>
       <ContentSlider/>
      </div>
    </div>
  )
}

export default React.memo(SlidingHero)



