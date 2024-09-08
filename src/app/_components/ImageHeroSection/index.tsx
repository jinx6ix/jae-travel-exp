import React from 'react';
import './index.scss';
import Image from 'next/image';

const ImageSkewHero = ({ images }) => {
  return (
    <div className="blocks">
      {images?.map((image, index) => (
        <div key={index} className="block">
          <a href="#link">
            {/* <div>{image.TitleDescription}</div> */}
            <Image
              src={image.media.imagekit.url}
              width={1200}
              height={800}
              alt={image.TitleDescription}
              className="image"
              priority
            />
          </a>
        </div>
      ))}
    </div>
  );
};



export default ImageSkewHero;