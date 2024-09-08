'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import classes from './index.module.scss'
import { Gutter } from '../Gutter'

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    telephone: '',
    message: '',
    subject: '',
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
          form: ' 66375f7513ed51d2c644f900', // Form ID
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

      setSuccess('Your Bookings Have Been Submitted Successfully')
      setFormData({
        name: '',
        email: '',
        date: '',
        telephone: '',
        message: '',
        subject: '',
      })
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
   <Gutter>
      <div className={classes.safariBooking}>
      <h3 className={classes.BookingHeader}>For Inquiries</h3>
      <hr />
      <div className={classes.bookingContainer}>
      
        <form className={classes.bookingForm} onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <input
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
          <div className={classes.formGroup}>
            <input
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={classes.formGroup}>
            <input
              placeholder="Date"
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          </div>
          <div className={classes.formGroup}>
            <input
              type="tel"
              id="telephone"
              placeholder="Telephone No (With Country Code)"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={classes.formGroup}>
            <input
              type="tel"
              id="telephone"
              placeholder="Subject"
              name="telephone"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className={classes.formGroup}>
            <textarea
              id="telephone"
              placeholder="Message"
              name="telephone"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className={classes.subBtn}>
          <button className={classes.submitBtn} type="submit" disabled={isLoading}>
            Submit
          </button>
          </div>
          {success && <p className={classes.success}>{success}</p>}
          {error && <p className={classes.error}>{error}</p>}
        </form>
        <div className={classes.safariImage}>
          <div className={classes.imageWrapper}>
            <Image
              src={'/assets/images/mara (1).jpg'}
              width={500}
              height={500}
              alt="bookingImage"
              className={classes.FormImage}
            />
          </div>
        </div>
    
      </div>
    </div>
   </Gutter>
  )
}

export default InquiryForm
