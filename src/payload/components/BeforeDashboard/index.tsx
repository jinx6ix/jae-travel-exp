import React from 'react'
import { Banner } from 'payload/components'

import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>Welcome to Jae Travel Admin DashBoard</h4>
      </Banner>
      <div>
        
      </div>
    </div>
  )
}

export default BeforeDashboard
