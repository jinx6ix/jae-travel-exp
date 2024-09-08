'use client'
import React, { Fragment, useState } from 'react'
import { BsDash, BsPlus } from 'react-icons/bs'
import Image from 'next/image'
import { Post } from '../../../payload/payload-types'
import { Button } from '../../_components/Button'
import { Gutter } from '../../_components/Gutter'
import { HR } from '../../_components/HR'
import { Media } from '../../_components/Media'
import SafariBookingComponent from '../../_components/SafariBookingForm'
import { formatDateTime } from '../../_utilities/formatDateTime'

import classes from './index.module.scss'
import ImageSkewHero from '../../_components/ImageHeroSection'
// import { RxAvatar } from "react-icons/rx";
// import { MdOutlineAccessTime } from "react-icons/md";
import { FaLocationDot } from 'react-icons/fa6'
import Reviews from '../../_components/Reviews'
// import { IoIosContacts } from "react-icons/io";
export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const {
    title,
    categories,
    meta: { image: metaImage, description } = {},
    publishedAt,
    populatedAuthors,
    Itinary,
    HighlightImages,
    Days,
    Price,
    MainInfo,
    OntopImage,
    Availability,
    Age,
  } = post

  const [accordionActive, setAccordionActive] = useState<string | null>(null)
  // console.log(OntopImage)
  const handleAccordionClick = (index: number, type: string) => {
    setAccordionActive(prevState => (prevState === `${type}-${index}` ? null : `${type}-${index}`))
  }

  return (
    <Fragment>
      <div>{OntopImage && OntopImage.length > 0 && <ImageSkewHero images={OntopImage} />}</div>
      <Gutter className={classes.postHero}>
        <div className={classes.content}>
          <h2 className={classes.title}>{title}</h2>
          <div className={classes.leader}>
            <div className={classes.categories}>
              {categories?.map((category, index) => {
                if (typeof category === 'object' && category !== null) {
                  const { title: categoryTitle } = category
                  const titleToUse = categoryTitle || 'Untitled category'
                  const isLast = index === categories.length - 1

                  return (
                    <Fragment key={index}>
                      {titleToUse}
                      {!isLast && <Fragment>, &nbsp;</Fragment>}
                    </Fragment>
                  )
                }
                return null
              })}
            </div>
          </div>

          <p className={classes.meta}>
            {populatedAuthors && (
              <Fragment>
                {'By '}
                {populatedAuthors.map((author, index) => {
                  const { name } = author
                  const isLast = index === populatedAuthors.length - 1
                  const secondToLast = index === populatedAuthors.length - 2

                  return (
                    <Fragment key={index}>
                      {name}
                      {secondToLast && populatedAuthors.length > 2 && <Fragment>, </Fragment>}
                      {secondToLast && populatedAuthors.length === 2 && <Fragment> </Fragment>}
                      {!isLast && populatedAuthors.length > 1 && <Fragment>and </Fragment>}
                    </Fragment>
                  )
                })}
              </Fragment>
            )}
            {publishedAt && (
              <Fragment>
                {' on '}
                {formatDateTime(publishedAt)}
              </Fragment>
            )}
          </p>
        </div>
        {/* <div className={classes.media}>
          <div className={classes.mediaWrapper}>
            {!metaImage && <div className={classes.placeholder}>No image</div>}
            {metaImage && typeof metaImage !== 'string' && (
              <Media imgClassName={classes.image} resource={metaImage} fill />
            )}
          </div>
        </div> */}
      </Gutter>
      <Gutter>
        <div className={classes.additionalData}>
          <div className={classes.priceFlex}>
            <div className={classes.peoplePrice}>
              <h5>
                <span className={classes.titleflash}>Price </span>
                {Price}
              </h5>
            </div>
            <div>
              <h6>
                {Availability}
                <span className={classes.titleflash}> Availability</span>
              </h6>
            </div>
            <div>
              <h6>
                {Age}
                <span className={classes.titleflash}> Days</span>
              </h6>
            </div>
            <div>
              <h6>
                {Days}
                <span className={classes.titleflash}> Age</span>
              </h6>
            </div>
          </div>
          <h4 className={classes.imageHighlight}>Highlights</h4>
          <HR />
          <div className={classes.imageFlex}>
            <ul className="images">
              {HighlightImages.map((image, index) => (
                <li key={index}>
                  <div className={classes.imageWrapper}>
                    <Image
                      src={image.media.imagekit.url}
                      width={200}
                      height={150}
                      alt={image.title}
                      className={classes.Img}
                    />
                  </div>
                  <div>{image.title}</div>
                </li>
              ))}
            </ul>
          </div>
          <HR />
          <div>
            <h4 className={classes.imageHighlight}>Main Info</h4>
            <div className={classes.MainInfoFlex}>
              <div className={classes.mainInfoDescr}>
                <span className={classes.descr}>{MainInfo}</span>
              </div>
              <div className={classes.AboutFlex}>
                <span>24/7 Customer Support</span>
                <span>(+254) 726485228</span>
                <span>info@jaetravel.co.ke</span>
                <span>08:00am - 05:30Pm (Mon to Sat)</span>
              </div>
            </div>
          </div>

          <h4 className={classes.imageHighlight}>Itinerary</h4>
          <ul className={classes.itineraryList}>
            {Itinary.length > 0 ? (
              Itinary.map((item, index) => (
                <li key={index}>
                  <button
                    className={`${classes.accordion} ${
                      accordionActive === `itinerary-${index}` ? classes.active : ''
                    }`}
                    onClick={() => handleAccordionClick(index, 'itinerary')}
                  >
                    <span className={classes.icon}>
                      {accordionActive === `itinerary-${index}` ? <BsDash /> : <FaLocationDot />}{' '}
                    </span>
                    {item.Heading}
                  </button>
                  {accordionActive === `itinerary-${index}` && (
                    <Fragment>
                      <p>{item.Description}</p>
                      {/* Check if Accomodation array exists and has items */}
                      {item.Accomodation && item.Accomodation.length > 0 && (
                        <div>
                          {item.Accomodation.map((accomodation, accommodationIndex) => (
                            <div key={accommodationIndex} className={classes.AccomodationFlex}>
                              <div className={classes.AccomodationHeader}>
                                {accomodation.Accomodation
                                  ? accomodation.Accomodation
                                  : 'No accommodation name'}
                              </div>
                              <div className={classes.AccomodationDesrHeading}>
                                {accomodation.AccomodationDescription
                                  ? accomodation.AccomodationDescription
                                  : 'No accommodation description'}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      {item.DescriptionImages && item.DescriptionImages.length > 0 && (
                        <div className={classes.HighlightImg}>
                          {item.DescriptionImages.map((descImage, descIndex) => (
                            <Image
                              key={descIndex}
                              src={descImage.media.imagekit.url}
                              width={600}
                              height={550}
                              className={classes.img}
                              alt={`Image ${descIndex + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </Fragment>
                  )}
                </li>
              ))
            ) : (
              <li>Travel dates throughout the year</li>
            )}
          </ul>
        </div>
      </Gutter>
    </Fragment>
  )
}
