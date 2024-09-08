import React from 'react'
import classes from './index.module.scss'
interface DateFilterProps {
  value: string
  onChange: (value: string) => void
}

const DateFilter: React.FC<DateFilterProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div>
      <span className={classes.headerFilter}>Departure Date</span>
      <input type="date" placeholder="Select special date" className={classes.input} value={value} onChange={handleChange} />
    </div>
  )
}

export default DateFilter
