'use client'
import React, { Fragment, useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { usePathname } from 'next/navigation'
import { Input } from '../../_components/Input'
import { Message } from '../../_components/Message'
import classes from './index.module.scss'

type FormData = {
  name: string
  email: string
  Message: string
}

export const GetInTouchForm: React.FC<{ docID: string }> = ({ docID }) => {
  const pathname = usePathname()
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<React.ReactNode | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = useCallback(
    async (data: FormData) => {
      setIsLoading(true)
      setError(null)
      setSuccess(null)

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/form-submissions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            form: '665a01b928e8e37532141deb',
            submissionData: Object.entries(data).map(([name, value]) => ({
              field: name,
              value,
            })),
          }),
        })

        const json: { message?: string } = await res.json()
        if (!res.ok) throw new Error(json.message)
        setError(null)
        setSuccess(
          <Fragment>{'Your Message was submitted for moderation successfully. '}</Fragment>,
        )
        reset()
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    },
    [docID, reset],
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <Message error={error} success={success} className={classes.message} />
      <div className={classes.formFlex}>
        <Input
          name="name"
          label="Name"
          required
          register={register}
          error={errors.name}
          type="text"
          placeholder={'Name'}
          validate={(value) => {
            if (!value) return 'Enter Name'
            if (value.length < 3) return 'Please enter a Name over 3 characters'
            if (value.length > 500) return 'Please enter a Name under 500 characters'
            return true
          }}
        />
        <Input
          name="email"
          label="Email"
          required
          register={register}
          error={errors.email}
          type="email"
          placeholder={'Email'}
          validate={(value) => {
            if (!value) return 'Enter Email'
            if (value.length < 3) return 'Please enter a Email over 3 characters'
            if (value.length > 500) return 'Please enter a Name under 500 characters'
            return true
          }}
        />
      </div>
      <Input
        name="Message"
        label="Message"
        required
        register={register}
        error={errors.Message}
        type="textarea"
        placeholder={'Message'}
        validate={(value) => {
          if (!value) return 'Please enter a Message'
          if (value.length < 3) return 'Please enter a message over 3 characters'
          if (value.length > 500) return 'Please enter a message under 500 characters'
          return true
        }}
      />
      <div className={classes.formBtn}>
        <button type="submit" className={classes.submit} disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  )
}