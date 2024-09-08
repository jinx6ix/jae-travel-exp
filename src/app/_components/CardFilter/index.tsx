/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react'

import BudgetFilter from '../FilterComponent/BudgetFilter'
import DateFilter from '../FilterComponent/DateFilter'
import DestinationFilter from '../FilterComponent/DestinationFilter'
import DurationFilter from '../FilterComponent/DurationFilter'
import KeywordFilter from '../FilterComponent/KeywordFilter'
import RatingFilter from '../FilterComponent/RatingFilter'
import { Gutter } from '../Gutter'
import SimpleCard from '../SimpleCard'

import styles from './index.module.scss'
import SortAndFilter from '../SortComponent'
const initialData = [
  {
    id: 1,
    title: 'Safari Tour 1',
    destinations: ['uganda', 'tanzania'],
    duration: 10,
    budget: 2000,
    rating: 4,
    departureDate: '2023-06-15',
  },
  {
    id: 2,
    title: 'Safari Tour 2',
    destinations: ['kenya', 'rwanda'],
    duration: 8,
    budget: 3500,
    rating: 3,
    departureDate: '2023-07-01',
  },
  {
    id: 3,
    title: 'Safari Tour 2',
    destinations: ['kenya', 'rwanda'],
    duration: 8,
    budget: 3500,
    rating: 3,
    departureDate: '2023-07-01',
  },
  {
    id: 4,
    title: 'Safari Tour 2',
    destinations: ['kenya', 'rwanda'],
    duration: 8,
    budget: 3500,
    rating: 3,
    departureDate: '2023-07-01',
  },
  {
    id: 5,
    title: 'Safari Tour 2',
    destinations: ['kenya', 'rwanda'],
    duration: 8,
    budget: 3500,
    rating: 3,
    departureDate: '2023-07-01',
  },
  {
    id: 6,
    title: 'Safari Tour 2',
    destinations: ['kenya', 'rwanda'],
    duration: 8,
    budget: 3500,
    rating: 3,
    departureDate: '2023-07-01',
  },
  {
    id: 7,
    title: 'Safari Tour 2',
    destinations: ['kenya', 'rwanda'],
    duration: 8,
    budget: 3500,
    rating: 3,
    departureDate: '2023-07-01',
  },
  {
    id: 8,
    title: 'Safari Tour 2',
    destinations: ['kenya', 'rwanda'],
    duration: 8,
    budget: 3500,
    rating: 3,
    departureDate: '2023-07-01',
  },
  {
    id: 9,
    title: 'Safari Tour 2',
    destinations: ['kenya', 'rwanda'],
    duration: 8,
    budget: 3500,
    rating: 3,
    departureDate: '2023-07-01',
  },
  {
    id: 10,
    title: 'Safari Tour 2',
    destinations: ['kenya', 'rwanda'],
    duration: 8,
    budget: 3500,
    rating: 3,
    departureDate: '2023-07-01',
  },
]

interface FilterComponentProps {}

const CardFilterComponent: React.FC<FilterComponentProps> = () => {
  const [data, setData] = useState(initialData)
  const [filteredData, setFilteredData] = useState(initialData)
  const [keywords, setKeywords] = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [destinations, setDestinations] = useState<{ [key: string]: boolean }>({})
  const [duration, setDuration] = useState({ min: 0, max: 16 })
  const [budget, setBudget] = useState({ min: 0, max: 0 })
  const [rating, setRating] = useState('')

  // const [keywords, setKeywords] = useState('Safari Tour')
  // const [departureDate, setDepartureDate] = useState('2023-07-01')
  // const [destinations, setDestinations] = useState({ kenya: true, rwanda: true })
  // const [duration, setDuration] = useState({ min: 7, max: 9 })
  // const [budget, setBudget] = useState({ min: 3000, max: 4000 })
  // const [rating, setRating] = useState('3')

  const filterData = () => {
    let filtered = data.slice()

    // Filter by keywords
    if (keywords) {
      filtered = filtered.filter(item => item.title.toLowerCase().includes(keywords.toLowerCase()))
    }

    // Filter by departure date
    if (departureDate) {
      filtered = filtered.filter(item => item.departureDate === departureDate)
    }

    // Filter by destinations
    if (Object.values(destinations).some(Boolean)) {
      filtered = filtered.filter(item =>
        Object.entries(destinations).some(
          ([dest, checked]) => checked && item.destinations.includes(dest),
        ),
      )
    }

    // Filter by duration
    filtered = filtered.filter(
      item => item.duration >= duration.min && item.duration <= duration.max,
    )

    // Filter by budget
    filtered = filtered.filter(item => item.budget >= budget.min && item.budget <= budget.max)

    // Filter by rating
    if (rating) {
      filtered = filtered.filter(item => item.rating >= parseInt(rating))
    }

    setFilteredData(filtered)
  }

  useEffect(() => {
    filterData()
  }, [])

  useEffect(() => {
    filterData()
  }, [keywords, departureDate, destinations, duration, budget, rating])

  return (
    <div className={styles.cardFilterContainer}>
      {' '}
      <div className={styles.container}>
        <h3 className={styles.filterHeader}>Filter By:</h3>
        <div className={styles.filterSection}>
          <KeywordFilter value={keywords} onChange={setKeywords} />
        </div>
        <div className={styles.filterSection}>
          <DateFilter value={departureDate} onChange={setDepartureDate} />
        </div>
        <div className={styles.filterSection}>
          <DestinationFilter value={destinations} onChange={setDestinations} />
        </div>
        <div className={styles.filterSection}>
          <DurationFilter value={duration} onChange={value => setDuration(value)} />
        </div>
        <div className={styles.filterSection}>
          <BudgetFilter value={budget} onChange={value => setBudget(value)} />
        </div>
        <div className={styles.filterSection}>
          <RatingFilter value={rating} onChange={setRating} />
        </div>
        <div className={styles.cardContainer}>
          {filteredData.map(item => (
            <div className={styles.card} key={item.id}>
              <SimpleCard doc={item} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.wrapperContainer}>
        <div className='sortFlex'>
          <SortAndFilter />
        </div>
        <div className={styles.cardsContainer}>
          {filteredData.map(item => (
            <SimpleCard key={item.id} doc={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardFilterComponent
