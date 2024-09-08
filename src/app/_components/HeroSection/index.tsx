'use client'
import React, { useState, useEffect, useMemo } from 'react';
import styles from './index.module.scss';

interface HeroSectionProps {
  gifUrls: string[];
  interval: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  gifUrls,
  interval,
  title,
  subtitle,
  buttonText,
  buttonLink,
}) => {
  const [currentGifIndex, setCurrentGifIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifUrls.length);
    }, interval * 1000);

    return () => clearInterval(timer);
  }, [gifUrls, interval]);

  const backgroundStyle = useMemo(
    () => ({
      backgroundImage: `url(${gifUrls[currentGifIndex]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }),
    [currentGifIndex, gifUrls]
  );

  return (
    <header className={styles.hero} style={backgroundStyle}>
      <div className={styles.overlay} />
      <div className={styles.heroContent}>
        <h2 className={styles.heroTitle}>{title}</h2>
        <p className={styles.heroSubtitle}>{subtitle}</p>
        <a href={buttonLink} className={styles.heroButton}>
          {buttonText}
        </a>
      </div>
    </header>
  );
};

export default HeroSection;