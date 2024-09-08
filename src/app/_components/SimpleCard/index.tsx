// SimpleCard.tsx
import React from 'react'

import styles from './index.module.scss'

interface SimpleCardProps {
  doc: {
    id: number
    title: string
    destinations: string[]
    duration: number
    budget: number
    rating: number
    departureDate: string
  }
}

const SimpleCard: React.FC<SimpleCardProps> = ({ doc }) => {
  return (
    <div className={styles.card}>
      <h3>{doc.title}</h3>
      <p className={styles.destinations}>Destinations: {doc.destinations.join(', ')}</p>
      <p>Duration: {doc.duration} days</p>
      <p>Budget: ${doc.budget}</p>
      <p>Rating: {doc.rating}</p>
      <p>Departure Date: {doc.departureDate}</p>
    </div>
  )
}

export default SimpleCard
