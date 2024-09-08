'use client'
import React, { Fragment, useState } from 'react'
import { BsDash, BsPlus } from 'react-icons/bs' // Import plus and minus icons from React Icons

import { Gutter } from '../Gutter'
import { HR } from '../HR'

import classes from './index.module.scss'
import Image from 'next/image'

const SafariTipsAccordion = ({ accordion }) => {
  const [visibleAccordions, setVisibleAccordions] = useState(7) // Initial number of visible accordions
  const [showAll, setShowAll] = useState(false) // State to control whether to show all accordions or not
  const [accordionActive, setAccordionActive] = useState(null) // State to store active accordion

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  const handleClick = index => {
    setAccordionActive(prevState => (prevState === index ? null : index))
  }

  // Ensure each item in accordion array has a unique id
  const updatedAccordion = accordion?.map((item: any, index: number) => ({
    ...item,
    id: index + 1, // Assuming each item gets a unique id based on its index
  }))

  return (
    <Fragment>
      <Gutter>
        <h3 className={classes.faqHeader}>Interested In Self Drive Vehicle</h3>
        <div className={classes.FaqFlex}>
          
          <div className={classes.itinaryFlex}>
            <ul className={classes.itineraryList}>
              {updatedAccordion
                ?.slice(0, showAll ? updatedAccordion.length : visibleAccordions)
                .map((item, index) => (
                  <li key={item.id}>
                    <button
                      className={`${classes.accordion} ${
                        accordionActive === index ? classes.active : ''
                      }`}
                      onClick={() => handleClick(index)}
                    >
                      <span className={classes.icon}>
                        {accordionActive === index ? <BsDash /> : <BsPlus />}{' '}
                        {/* Render plus or minus icon */}
                      </span>
                      {item.Heading}
                    </button>
                    {accordionActive === index && (
                      <p className={classes.description}>{item.Description}</p>
                    )}
                  </li>
                ))}
              {updatedAccordion.length > visibleAccordions && !showAll && (
                <button className={classes.expandButton} onClick={toggleShowAll}>
                  Show More...
                </button>
              )}
            </ul>
          </div>
          <div >
            <Image
              height={500}
              width={500}
              alt="faq image"
              src="/assets/images/Destinations-Banner.jpg"
              className={classes.image}
            />
          </div>
        </div>

        <HR />
      </Gutter>
    </Fragment>
  )
}

export default SafariTipsAccordion
