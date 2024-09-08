// DestinationFilter.tsx
import React from 'react'
import classes from './index.module.scss'
interface DestinationFilterProps {
  value: { [key: string]: boolean }
  onChange: (value: { [key: string]: boolean }) => void
}

const DestinationFilter: React.FC<DestinationFilterProps> = ({ value, onChange }) => {
  const handleChange = (destination: string, checked: boolean) => {
    onChange({
      ...value,
      [destination]: checked,
    })
  }

  return (
    <div>
      <span className={classes.headerFilter}>Destinations</span>
      <div className={classes.Destinationflex}>
      <label>
        <input
          className={classes.checkbox}
          type="checkbox"
          checked={value.uganda || false}
          onChange={e => handleChange('uganda', e.target.checked)}
        />
        Uganda (3)
      </label>
      <label>
        <input
          type="checkbox"
          checked={value.kenya || false}
          onChange={e => handleChange('kenya', e.target.checked)}
        />
        Kenya (12)
      </label>
      <label>
        <input
          type="checkbox"
          checked={value.tanzania || false}
          onChange={e => handleChange('tanzania', e.target.checked)}
        />
        Tanzania (7)
      </label>
      <label>
        <input
          type="checkbox"
          checked={value.rwanda || false}
          onChange={e => handleChange('rwanda', e.target.checked)}
        />
        Rwanda (5)
      </label>
      </div>
    
    </div>
  )
}

export default DestinationFilter
