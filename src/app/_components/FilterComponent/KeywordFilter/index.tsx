'use client'
import React from 'react'
import classes from './index.module.scss'
interface KeywordFilterProps {
  value: string
  onChange: (value: string) => void
}

const KeywordFilter: React.FC<KeywordFilterProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div>
      <span className={classes.headerFilter}>Keywords</span>
      <input
        type="text"
        placeholder="Enter your Keywords..."
        value={value}
        onChange={handleChange}
        className={classes.input}
      />
    </div>
  )
}

export default KeywordFilter
