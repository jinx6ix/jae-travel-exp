'use client'
import React from 'react'

import { Image } from '../Media/Image'

import styles from './index.module.scss'

const items = [
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'John Doe',
    title: 'CEO',
    status: 'Verified',
    image: '/assets/active-man-with-party-horn-avatar.gif',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'John Doe',
    title: 'CEO',
    status: 'Verified',
    image: '/assets/active-man-with-party-horn-avatar.gif',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'John Doe',
    title: 'CEO',
    status: 'Verified',
    image: '/assets/active-man-with-party-horn-avatar.gif',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'John Doe',
    title: 'CEO',
    status: 'Verified',
    image: '/assets/active-man-with-party-horn-avatar.gif',
  },
]

export const InfiniteMovingCards = () => {
  return (
    <div className={styles.scroller}>
      <ul className={styles.cards}>
        {items.map((item, idx) => (
          <li className={styles.card} key={idx}>
            <blockquote>
              <span>{item.quote}</span>
              <div>
                <span className="review-image">
                  <Image className="image" alt="Profile picture" />
                </span>
                <span>{item.name}</span>
                <span>{item.title}</span>
                <span>{item.status}</span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  )
}
