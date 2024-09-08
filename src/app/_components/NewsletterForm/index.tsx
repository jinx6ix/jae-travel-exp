'use client'
import React, { useState } from 'react'

import classes from './index.module.scss'

const NewsLetterForm = () => {
  const [formData, setFormData] = useState({

    email: '',
 
  })
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    setIsLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/form-submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: '663816ed8cc49f59b1c94625', // Form ID
          submissionData: Object.entries(formData).map(([name, value]) => ({
            field: name,
            value,
          })),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
      }

      setSuccess('NewsLetter Submitted Successfully')
      setFormData({
        email: '',
      })
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
   
      <div className={classes.safariBooking}>
     
      <div className={classes.bookingContainer}>
      
        <form className={classes.bookingForm} onSubmit={handleSubmit}>
          
          
            <div className={classes.formGroup}>
              <input
                placeholder="Subscribe To Our NewsLetter"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          
          
          <button className={classes.submitBtn} type="submit" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
          
        </form>
      </div>
      {success && <p className={classes.success}>{success}</p>}
      {error && <p className={classes.error}>{error}</p>}
    </div>
  
  )
}

export default NewsLetterForm
