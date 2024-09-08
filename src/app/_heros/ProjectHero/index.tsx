import React, { Fragment } from 'react'
import Link from 'next/link'

import { Project } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import { formatDateTime } from '../../_utilities/formatDateTime'

import classes from './index.module.scss'
import ImageSkewHero from '../../_components/ImageHeroSection'

export const ProjectHero: React.FC<{
  project: Project
}> = ({ project }) => {
  const {
    id,
    title,
    categories,
    meta: { image: metaImage, description } = {},
    createdAt,
    OntopImage,
  } = project
  const sanitizedDescription = description?.replace(/\s/g, ' ')
  return (
    <Fragment>
      <Gutter className={classes.projectHero}>
        <div className={classes.content}>
          <div className={classes.leader}>
            <div className={classes.categories}>
              {createdAt && formatDateTime(createdAt)}
              &nbsp; &mdash; &nbsp;
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
          <h2 className={classes.title}>{title}</h2>
          {description && (
            <div className={classes.body}>
              {description && <p className={classes.description}>{sanitizedDescription}</p>}
            </div>
          )}
        </div>
        <div className={classes.media}>
          <div className={classes.mediaWrapper}>
            {!metaImage && <div className={classes.placeholder}>No image</div>}
            {metaImage && typeof metaImage !== 'string' && (
              <Media imgClassName={classes.image} resource={metaImage} fill />
            )}
          </div>
        </div>
        <div>{OntopImage && OntopImage.length > 0 && <ImageSkewHero images={OntopImage} />}</div>
      </Gutter>
    </Fragment>
  )
}
