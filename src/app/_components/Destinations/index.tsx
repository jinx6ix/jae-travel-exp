import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdMail } from 'react-icons/io'

// import { Gutter } from '../Gutter'
import classes from './index.module.scss'
import { HR } from '../HR'
import { Gutter } from '../Gutter'

const TopDestination = ({ categories }) => {
  return (
    <>
      <h3 className={classes.categoryHeader}>Top Destination</h3>
      <span className={classes.categoryHeaderDescr}>
        The World is a book those who do not travel read only one page
      </span>
      <hr />
      <div className={classes.DestinationFilters}>
        <Link className={classes.links} href="/tours-filter">
          <span className={classes.filter}>Kenya (20)</span>
        </Link>
        <Link className={classes.links} href="/tours-filter">
          <span className={classes.filter}>Uganda (12)</span>
        </Link>
        <Link className={classes.links} href="/tours-filter">
          <span className={classes.filter}>Rwanda(5)</span>
        </Link>
        <Link className={classes.links} href="/tours-filter">
          <span className={classes.filter}>Tanzania (12)</span>
        </Link>
      </div>

      <Gutter>
        <div className={classes.CardComponent}>
          {categories?.map(category => (
            <>
              <div className={classes.DestinationFlex}>
                <div className={classes.card} key={category.title}>
                <Link className={classes.MiniCategories} href={`/${category?.CustomUrl}`} passHref>
                    <div className={classes.circleWrapper}>
                      {category.media && category.media.imagekit && (
                        <Image
                          src={category.media.imagekit.url}
                          width={250}
                          height={230}
                          alt={category.title}
                          className={classes.image}
                        />
                      )}
                    </div>
                  </Link>
                </div>

                <span className={classes.destTitle}>{category.title}</span>
              </div>
            </>
          ))}
        </div>
      </Gutter>
    </>
  )
}

export default TopDestination
