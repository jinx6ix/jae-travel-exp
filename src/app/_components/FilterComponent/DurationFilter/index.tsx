import React from 'react'
import classes from './index.module.scss'
interface DurationFilterProps {
  value: { min: number; max: number }
  onChange: (value: { min: number; max: number }) => void
}

const DurationFilter: React.FC<DurationFilterProps> = ({ value, onChange }) => {
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...value,
      min: parseInt(e.target.value, 10),
    })
  }

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...value,
      max: parseInt(e.target.value, 10),
    })
  }

  return (
    <div>
      <span className={classes.headerFilter}>Duration</span>
      <div>
        <input type="range" min={0} max={16} className={classes.input} value={value.min} onChange={handleMinChange} />
        <span>{value.min} days</span>
      </div>
      <div>
        <input type="range" min={0} max={16} value={value.max} onChange={handleMaxChange} />
        <span>{value.max} days</span>
      </div>
    </div>
  )
}

export default DurationFilter
