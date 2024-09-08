import React from 'react'
import classes from './index.module.scss'
interface RatingFilterProps {
  value: string
  onChange: (value: string) => void
}

const RatingFilter: React.FC<RatingFilterProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div>
      <span className={classes.headerFilter}>Rating</span>
      {/* <div>
        <label>
          <input type="radio" value="" checked={value === ''} onChange={handleChange} />
          <span>Show all</span>
        </label>
      </div> */}
      <div>
        <label>
          <input type="radio" value="1" checked={value === '1'} onChange={handleChange} />
          <span className={classes.ratingsize}>1 star and higher</span>
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="2" checked={value === '2'} onChange={handleChange} />
          <span className={classes.ratingsize}>2 star and higher</span>
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="3" checked={value === '3'} onChange={handleChange} />
          <span className={classes.ratingsize}>3 star and higher</span>
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="4" checked={value === '4'} onChange={handleChange} />
          <span className={classes.ratingsize}>4 star and higher</span>
        </label>
      </div>
    </div>
  )
}

export default RatingFilter
