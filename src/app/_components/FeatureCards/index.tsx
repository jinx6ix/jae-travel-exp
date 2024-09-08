import React from 'react'
import './index.scss'

interface FourCardFeatureSectionProps {}

const FourCardFeatureSection: React.FC<FourCardFeatureSectionProps> = () => {
  return (
    <div className="featureComponent">
      <div className="header">
        <div className='pText'>
          <p className='paText'>
          Our expert guides leverage years of experience and extensive data to craft unforgettable, bespoke wildlife safari adventures tailored to your preferences
          </p>
        </div>
      </div>
      <div className="row1-container">
        <div className="box box-down cyan">
          <div className='h2Text'>
            <span>Plan With An Expert</span>
          </div>
          <div className='pText'>
            <p>
              Have a look at our original holiday experiences and then contact us with your brief,
              or call
            </p>
          </div>
          <div className='img'>
            {' '}
            <img src="/assets/images/icon-supervisor.svg" alt="" />
          </div>
        </div>
        <div className="box red">
          <div className='h2Text'>
            {' '}
            <span>Expert Safari Guides</span>
          </div>
          <div className='pText'>
            <p>
              Our experts guides will help plan your day with you, which can be as active or as
              leisurely as you wish.
            </p>
          </div>
          <div className='img'>
            {' '}
            <img src="/assets/images/icon-team-builder.svg" alt="" />
          </div>
        </div>
        <div className="box box-down blue">
          <div className='h2Text'>
            <span>Online Support</span>
          </div>
          <div className='pText'>
            {' '}
            <p>Accessible at all times, without any pauses or breaks, every single hour, day after day.</p>
          </div>
          <div className='img'>
            {' '}
            <img src="/assets/images/icon-calculator.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="row2-container">
        <div className="box orange">
          <div className='h2Text'>
            <span>4x4 Equiped Safari Minivans</span>
          </div>
          <div className='pText'>
            <p>
              Our specially designed safari minivans are available upon request for exclusive use to
              do unlimited game drives
            </p>
          </div>
          <div className='img'>
            <img src="/assets/images/icon-karma.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FourCardFeatureSection
