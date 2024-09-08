import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import classes from './index.module.scss'
import { Gutter } from '../Gutter'
import MapComponent from '../Maps'
import { GetInTouchForm } from '../GetInTouchForm'
import MapEmbed from '../MapsEmbed'
const GetInTouch = () => {
  return (
    <div>
      <Gutter>
        <div className={classes.container}>
          <div>
            <span className={classes.locationLabel}>Nairobi, Karen</span>
            <div className={classes.flex}>
              <FaPhoneAlt />
              <span>+254 726 485 228</span>
            </div>
            <div className={classes.flex}>
              <IoMdMail />
              <span>+254 726 485 228</span>
            </div>
            <div className={classes.columnFlex}>
              <span className={classes.locationLabel} >Get In Touch</span>
              <span className={classes.descr}>Send Us a Message we will get in touch with you soon</span>
            </div>
            <div>
              <div>
                <div>
                  <GetInTouchForm docID={''}/>
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div>
            <MapEmbed latitude={1.3169} longitude={36.6903}/>
            {/* <MapComponent/> */}
            {/* <div className={classes.mapContainerStyle}> */}
          </div>
        </div>
      </Gutter>
    </div>
  )
}

export default GetInTouch
