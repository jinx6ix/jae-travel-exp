import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdMail } from 'react-icons/io'
import { MdOutlineAccessTimeFilled } from "react-icons/md";

// import { Gutter } from '../Gutter'
import classes from './index.module.scss'

const CardComponent = ({ categories }) => {
  // console.log(categories)
  return (
    <>
     <div className={classes.freeImageContainer}>
      <h3 className={classes.categoryHeader}>Top Tours</h3>
      <span className={classes.categoryHeaderDescr}>Ready For An Adventure? Check Our Best Promotion Tours</span>
      <hr/>
      <div className={classes.CardComponent}>
        {categories?.map(category => (
          <div className={classes.card} key={category.title}>
            <Link className={classes.MiniCategories} href={`/${category?.CustomUrl}`} passHref>
              {category.media && category.media.imagekit && (
                <Image
                  src={category.media.imagekit.url}
                  width={200}
                  height={200}
                  alt={category.title}
                  className={classes.image}
                />
              )}
            </Link>
            {/* <h5>{category.title}</h5> */}
            <div className={classes.freeFormCategory}>
              <div className={classes.categoriesText}>
              <div className={classes.Text}>{category.title}</div>
              <div className={classes.CategoriesDays}>
                <div><MdOutlineAccessTimeFilled/> </div>
                <div>{category.Days} days</div>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
       <div className={classes.freeImage}>
       <Image src='/assets/images/vines.png' alt='' width={100} height={100} />

       </div>
       <div className={classes.freeImage0}>
       <Image src='/assets/images/vines.png' alt='' width={100} height={100} />

       </div>
      </div>
    </>
  )
}

export default CardComponent
