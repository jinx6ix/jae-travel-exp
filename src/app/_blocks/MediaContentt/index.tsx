import * as React from 'react';
import { RichText } from '../../_components/RichText';
import { Media } from '../../../app/_components/Media';
import classes from './index.module.scss';

export type MediaContentProps = {
  mediaContentFields: {
    richText: any;
    media: string;
    alignment: 'mediaContent' | 'contentMedia';
  };
};

export const MediaContentBlock: React.FC<MediaContentProps> = ({ mediaContentFields }) => {
  const { richText, media, alignment } = mediaContentFields;

  return (
    <div className={classes.container}>
      {alignment === 'mediaContent' ? (
        <>
          <div className={`${classes.media} ${classes.left}`}>
            <Media media={media} />
          </div>
          <div className={classes.content}>
            <RichText content={richText} />
          </div>
        </>
      ) : (
        <>
          <div className={classes.content}>
            <RichText content={richText} />
          </div>
          <div className={`${classes.media} ${classes.right}`}>
            <Media media={media} />
          </div>
        </>
      )}
    </div>
  );
};