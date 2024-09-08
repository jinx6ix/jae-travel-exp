import React, { Fragment } from 'react';
import Link from 'next/link';
import { Post, Project } from '../../../payload/payload-types';
import { Media } from '../Media';
import classes from './index.module.scss';

export const Card: React.FC<{
  alignItems?: 'center';
  className?: string;
  showCategories?: boolean;
  hideImagesOnMobile?: boolean;
  title?: string;
  relationTo?: 'projects' | 'posts';
  doc?: Project | Post;
  orientation?: 'horizontal' | 'vertical';
}> = (props) => {
  const {
    relationTo,
    showCategories,
    title: titleFromProps,
    doc,
    className,
    orientation = 'vertical',
  } = props;

  const { slug, title, categories, meta } = doc || {};
  const { description, image: metaImage } = meta || {};

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0;
  const titleToUse = titleFromProps || title;
  const sanitizedDescription = description?.replace(/\s/g, ' '); // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`;

  const Icon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
  );

  return (
    <div
      className={[classes.card, className, orientation && classes[orientation]]
        .filter(Boolean)
        .join(' ')}
    >
      <Link href={href} className={classes.mediaWrapper}>
        {!metaImage && <div className={classes.placeholder}>No image</div>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media imgClassName={classes.image} resource={metaImage} fill />
        )}
      </Link>
      <div className={classes.content}>
        {showCategories && hasCategories && (
          <div className={classes.leader}>
            {showCategories &&
              hasCategories &&
              categories?.map((category, index) => {
                if (typeof category === 'object') {
                  const { title: titleFromCategory } = category;
                  const categoryTitle = titleFromCategory || 'Untitled category';
                  const isLast = index === categories.length - 1;

                  return (
                    <Fragment key={index}>
                      <span className={classes.targetCategory}>{categoryTitle}</span>
                    </Fragment>
                  );
                }
                return null;
              })}
          </div>
        )}

        {titleToUse && (
          <div className={classes.titleFlex}>
            <div>
              <h4 className={classes.title}>
                <Link href={href} className={classes.titleLink}>
                  {titleToUse}
                </Link>
              </h4>
            </div>
            {titleToUse.length <= 21 && ( // Check if the title length is less than or equal to 20
              <div>
                <Link href={href}>
                  <div className={classes.icon}>
                    <Icon />
                  </div>
                </Link>
              </div>
            )}
          </div>
        )}
        {description && (
          <div className={classes.body}>
            {description && <p className={classes.description}>{sanitizedDescription}</p>}
          </div>
        )}
      </div>
    </div>
  );
};
