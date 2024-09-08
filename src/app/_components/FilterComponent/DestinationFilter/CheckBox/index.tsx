import React from 'react'

interface CheckboxProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked)
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} onChange={handleCheckboxChange} />
        {label}
      </label>
    </div>
  )
}

export default Checkbox
