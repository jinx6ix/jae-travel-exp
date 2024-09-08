import React from 'react'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichTextt'
import classes from './index.module.scss'
import { StaticImageData } from 'next/image'
import { Page } from '../../../payload/payload-types'


type Props = Extract<Page['layout'][0], { blockType: 'contentMediaDown' }> & {
  staticImage?: StaticImageData
  id?: string
}
export const ContentMediaDownBlock: React.FC<Props> = props => {

  const { media, mediaSidePosition, richText, staticImage } = props
  

  return (
    <Gutter>
      <div className={classes.contentMediaBlock}>
        <div
          className={`${classes.contentWrapper} ${
            mediaSidePosition === 'up' ? classes.mediaRight : classes.mediaLeft
          }`}
        >
         
          <div className={classes.richTextContainer}>
            <RichText content={richText} />
          </div>
          <div className={classes.mediaContainer}>
            <Media resource={media} src={staticImage} imgClassName={classes.image} />
          </div>
        </div>
      </div>
    </Gutter>
  )
}
