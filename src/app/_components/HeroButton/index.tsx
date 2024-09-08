import React, { useState, useEffect } from 'react'
import classes from './index.module.scss' // Import the styles
import Link from 'next/link'

const contentData = [
  {
    title: 'Experience Adventure In Africa',
    description:
      'Have the best experience in the African game parks reserves. Get to experience the best tours.',
    buttonText: 'Explore Tours',
    buttonLink: '#',
  },
  {
    title: 'Discover The Wildlife',
    description: 'Join us for a journey into the wild. Witness the beauty of nature.',
    buttonText: 'Join Now',
    buttonLink: '#',
  },
  {
    title: 'Safari Odyssey: Embrace the Wild Journey.',
    description: 'Embark on a thrilling safari adventure and experience the wild like never before.',
    buttonText: 'Start Your Journey',
    buttonLink: '#',
  },
  {
    title: 'Wilderness Unraveled, Adventure One at a Time.',
    description: 'Unravel the mysteries of the wilderness, one adventure at a time.',
    buttonText: 'Discover More',
    buttonLink: '#',
  },
  {
    title: "Discover Africa's Untamed Heartbeat, Boldly.",
    description: "Boldly explore Africa's untamed heartbeat and witness its raw beauty.",
    buttonText: 'Explore Now',
    buttonLink: '#',
  },
  {
    title: 'Free Wildlife Roams: Unleash Adventurous Spirit.',
    description: 'Let your adventurous spirit roam free in the wild where wildlife roams untamed.',
    buttonText: 'Unleash Now',
    buttonLink: '#',
  },
  {
    title: "Immersive Beauty: Africa's Savannas Majesty.",
    description: "Immerse yourself in the majestic beauty of Africa's vast savannas.",
    buttonText: 'Experience Beauty',
    buttonLink: '#',
  },
  {
    title: "Witness Life's Primal Dance: African Safari.",
    description: "Witness the primal dance of life on an unforgettable African safari.",
    buttonText: 'Witness Now',
    buttonLink: '#',
  },
  {
    title: 'Explore Untamed Majesty, Wilderness Realm.',
    description: 'Explore the untamed majesty of the wilderness and its breathtaking realm.',
    buttonText: 'Explore Now',
    buttonLink: '#',
  },
  {
    title: "Senses Awakened: Nature's Playground Journey.",
    description: "Awaken your senses on a journey through nature's ultimate playground.",
    buttonText: 'Awaken Senses',
    buttonLink: '#',
  },
  {
    title: "Secrets Unveiled: Africa's Captivating Wilderness.",
    description: "Unveil the secrets of Africa's captivating wilderness.",
    buttonText: 'Unveil Secrets',
    buttonLink: '#',
  },
  {
    title: 'Transformative Adventure: Into Wild Unknown.',
    description: 'Embark on a transformative adventure into the wild unknown.',
    buttonText: 'Embark Now',
    buttonLink: '#',
  }
]

// words = [
//   {
//     'Safari Odyssey: Embrace the Wild Journey.',
//     'Wilderness Unraveled, Adventure One at Time.',
//     "Discover Africa's Untamed Heartbeat, Boldly.",
//     'Free Wildlife Roams: Unleash Adventurous Spirit.',
//     "Immersive Beauty: Africa's Savannas Majesty.",
//     "Witness Life's Primal Dance: African Safari.",
//     'Explore Untamed Majesty, Wilderness Realm.',
//     "Senses Awakened: Nature's Playground Journey.",
//     "Secrets Unveiled: Africa's Captivating Wilderness.",
//     'Transformative Adventure: Into Wild Unknown.',
//   },
// ]
const ContentSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % contentData.length)
    }, 10000) // Change content every 10 seconds

    return () => clearInterval(interval) // Clear interval on component unmount
  }, [])

  const currentContent = contentData[currentIndex]

  return (
    <div className={classes.contentSlider}>
      <div className={classes.backgroundImage}>
        <div className={classes.content}>
          <span className={`${classes.title} ${classes.animate__animated}`}>{currentContent.title}</span>
          <p className={classes.animate__animated}>{currentContent.description}</p>
          <button className={classes.animate__animated}>
            <Link href={currentContent.buttonLink} className={`${classes.btn}`}>
              {currentContent.buttonText}
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContentSlider
