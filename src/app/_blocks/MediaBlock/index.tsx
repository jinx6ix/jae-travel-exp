import React from 'react';
import { StaticImageData } from 'next/image';

import { Page } from '../../../payload/payload-types';
import { Gutter } from '../../_components/Gutter';
import { Media } from '../../_components/Media';

import classes from './index.module.scss';
import RichText from '../../_components/RichTextt';

type Props = Extract<Page['layout'][0], { blockType: 'mediaBlock' }> & {
  staticImage?: StaticImageData;
  id?: string;
};

export const MediaBlock: React.FC<Props> = (props) => {
  const { media, richText, position = 'mediaUp', staticImage } = props;

  return (
    <div className={classes.mediaBlock}>
      {position === 'mediaUp' && (
        <>
          <Gutter>
            <div className={classes.mediaContainer}>
              <Media resource={media} src={staticImage} imgClassName={classes.image} />
            </div>
          </Gutter>
          <Gutter>
            <div className={classes.richTextContainer}>
              <RichText content={richText} />
            </div>
          </Gutter>
        </>
      )}
      {position === 'mediaDown' && (
        <>
          <Gutter>
            <div className={classes.richTextContainer}>
              <RichText content={richText} />
            </div>
          </Gutter>
          <Gutter>
            <div className={classes.mediaContainer}>
              <Media resource={media} src={staticImage} imgClassName={classes.image} />
            </div>
          </Gutter>
        </>
      )}
    </div>
  );
};
