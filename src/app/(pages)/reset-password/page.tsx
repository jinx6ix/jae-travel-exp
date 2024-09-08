'use client'

import React, { Suspense } from 'react'
import { Metadata } from 'next'
import { Gutter } from '../../_components/Gutter'
import { ResetPasswordForm } from './ResetPasswordForm'
import { useSearchParams } from 'next/navigation'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import classes from './index.module.scss'

const generateMetadata = (): Metadata => ({
  title: 'Reset Password',
  description: 'Enter a new password.',
  openGraph: mergeOpenGraph({
    title: 'Reset Password',
    url: '/reset-password',
  }),
})

const ResetPassword = () => {
  return (
    <Gutter className={classes.resetPassword}>
      <h1>Reset Password</h1>
      <p>Please enter a new password below.</p>
      <Suspense fallback={<div>Loading...</div>}>
        <ResetPasswordFormWithSearchParams />
      </Suspense>
    </Gutter>
  )
}

const ResetPasswordFormWithSearchParams = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  return <ResetPasswordForm token={token} />
}

export default ResetPassword

const metadata: Metadata = generateMetadata()