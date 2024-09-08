'use client';
import React from 'react';
import NextImage, { StaticImageData } from 'next/image';
import cssVariables from '../../../cssVariables';
import { Props as MediaProps } from '../types';
import classes from './index.module.scss';

const { breakpoints } = cssVariables;

export const Image: React.FC<MediaProps> = (props) => {
  const {
    imgClassName,
    onClick,
    onLoad: onLoadFromProps,
    resource,
    priority,
    fill,
    alt: altFromProps,
  } = props;
  const [isLoading, setIsLoading] = React.useState(true);

  let width: number | undefined;
  let height: number | undefined;
  let alt = altFromProps;
  let src: string | undefined;

  if (typeof resource !== 'string') {
    // Check if resource is of type MediaType
    if (resource?.imagekit && resource.imagekit.url) {
      // Use imagekit.url here
      src = resource.imagekit.url;
      width = resource.width || undefined;
      height = resource.height || undefined;
    } else {
      // Set a default image URL if imagekit.url is not available
      src = '/assets/Logo/jaeLogo.png';
      // Set default width and height values if resource.width and resource.height are not available
      width = 600;
      height = 600;
      alt = 'Jae travels Logo';
    }
  }

  // NOTE: this is used by the browser to determine which image to download at different screen sizes
  const sizes = Object.entries(breakpoints)
    .map(([, value]) => `(max-width: ${value}px) ${value}px`)
    .join(', ');

  return (
    <NextImage
      className={[isLoading && classes.placeholder, classes.image, imgClassName]
        .filter(Boolean)
        .join(' ')}
      src={src || '/Easy-logo.svg'}
      alt={alt || 'product-image'}
      onClick={onClick}
      onLoad={() => {
        setIsLoading(false);
        if (typeof onLoadFromProps === 'function') {
          onLoadFromProps();
        }
      }}
      fill={fill}
      width={!fill ? width || 800 : undefined} // Set a default width value of 800 if width is undefined
      height={!fill ? height || 500 : undefined} // Set a default height value of 600 if height is undefined
      sizes={sizes}
      priority={priority}
    />
  );
};