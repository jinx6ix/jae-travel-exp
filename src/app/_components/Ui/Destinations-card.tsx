'use client'
import React, { useEffect, useRef, useState } from 'react'

import { LayoutGrid } from './ui/layout-grid'

export default function LayoutG() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  )
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rwanda</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Embark on a captivating journey through the heart of Africa with our comprehensive guide to
        Kenya. From its breathtaking landscapes to its vibrant cultures and diverse wildlife, Kenya
        offers an unforgettable experience for travelers of all kinds. Whether you are planning a
        safari adventure, a cultural Immersion, or simply seeking to explore the wonders of nature,
        Kenya has something for everyone.
      </p>
    </div>
  )
}
const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Kenya</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Embark on a transformative journey to Rwanda, a land of breathtaking beauty, rich history,
        and vibrant culture. Known as the "Land of a Thousand Hills," Rwanda captivates travelers
        with its lush landscapes, diverse wildlife, and inspiring resilience. Whether you are drawn
        to the majestic mountain gorillas, intrigued by the countrys compelling history, or seeking
        toimmerse yourself in its vinrant culture, Rwanda offers a truly unforgettable experience
        for every adventure.
      </p>
    </div>
  )
}
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Tanzania</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Embark on an enchanting journey to Tanzania, a land of awe-inspiring landscape, vibrant
        cultures, and unparalleled wildlife encounters,. Nested in East Africa, Tanzania beckons
        travelers with majestic Mount Kilimanjaro, legendary Serengeti plains, and exotic Zanzibar
        archipelago. Whether you are seeking thrilling safaris, cultural immersion, or idyllic beach
        retreats, Tanzania promises an Unforgettable adventure for every explorer.
      </p>
    </div>
  )
}
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Uganda</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Embark on a journey of discovery to the heart of Africa with our comprehensive guide to
        Uganda. Known as the "Pearl of Africa," U ganda boasts stunning landscapes, diverse
        wildlife, and a rich cultural heritage waiting to be explored. Whether you are seeking
        adventure in the wilderness, culturalimmersion in local communities, or simply relaxation
        amidst breathtaking scenery, Uganda offers an unforgettable experience for every traveler.
      </p>
    </div>
  )
}

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: 'md:col-span-2',
    thumbnail: '',
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: 'md:col-span-1',
    thumbnail: '',
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: 'md:col-span-1',
    thumbnail: '',
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: 'md:col-span-2',
    thumbnail: '',
  },
]
