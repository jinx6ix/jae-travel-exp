import React from 'react'
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
} from '@tabler/icons-react'

import { cn } from '../../../utils/cn'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'

export default function BentoGridLayout() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
        />
      ))}
    </BentoGrid>
  )
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
)
const items = [
  {
    title: 'Safari Twiga',
    description:
      'Embark on an unforgettable safari adventure in Kenya, where visitors flock to witness the majestic beauty of giraffes in their natural habitat. Immerse yourself in the awe-inspiring landscapes of Kenya as you encounter these graceful creatures up close, creating memories that will last a life time',
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Best of Zanzibar',
    description:
      "Discover the essence of Zanzibar with our exclusive 'Best of Zanzibar' package. Immerse yourself in the captivating charm of Stone Town, a UNESCO World Heritage Site steeped in history and culture. Indulge in delectable Zanzibari cuisine, rich in spices and flavors, and unwind of pristine beaches lapped by the azure waters of the Indian Ocean. Dive into thrilling aquatic adventures amidst vibrant coral reefs, or simply relax and rejuvenate in luxurious beachfront accommodations. Experience the very best of Zanzibar with our curated package, blending cultural exploration with idyllic beach escapes for an unforgettable journey.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Zanzibar Getaway',
    description:
      "Indulge in a blissful getaway to Zanzibar, where turquoise waters and pristine beaches await. Unwind in luxurious resorts nestled along the island's shores, savoring the tranquility of this tropical paradise. Explore the rich cultural heritage of Stone Town, immerse yourself in vibrant markets, and relax beneath swaying palm trees as you bask in the warmth of the sun. Your escape to Zanzibar promises unforgettable moments of relaxation and adventure",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Kigali City Tour',
    description:
      'Embark on an unforgettable safari adventure in Kenya, where visitors flock to witness the majestic beauty of giraffes in their natural habitat. Immerse yourself in the awe-inspiring landscapes of Kenya as you encounter these graceful creatures up close, creating memories that will last a life time',
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
]
