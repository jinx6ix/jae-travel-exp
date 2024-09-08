import React, { useState } from 'react'

import BudgetFilter from './BudgetFilter'
import DateFilter from './DateFilter'
import DestinationFilter from './DestinationFilter'
import DurationFilter from './DurationFilter'
import KeywordFilter from './KeywordFilter'
import RatingFilter from './RatingFilter'

const FilterComponent: React.FC = () => {
  const [keywords, setKeywords] = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [destinations, setDestinations] = useState<{ [key: string]: boolean }>({})
  const [duration, setDuration] = useState({ min: 0, max: 16 })
  const [budget, setBudget] = useState({ min: 0, max: 0 })
  const [rating, setRating] = useState('')

  return (
    <div>
      <h2>YOUR FILTER:</h2>
      <KeywordFilter value={keywords} onChange={setKeywords} />
      <DateFilter value={departureDate} onChange={setDepartureDate} />
      <DestinationFilter value={destinations} onChange={setDestinations} />
      <DurationFilter value={duration} onChange={setDuration} />
      <BudgetFilter value={budget} onChange={setBudget} />
      <RatingFilter value={rating} onChange={setRating} />
    </div>
  )
}

export default FilterComponent
