'use client';
import React, { useState, useEffect, useCallback, memo } from 'react';
import './index.scss';
import { Gutter } from '../Gutter';

const EarthYearComponent = memo(() => {
  const chameleonImages = [
    'https://ik.imagekit.io/6cga8hi9z/JaeTravels/lizard_P6QbS4SNT.png',
    'https://ik.imagekit.io/6cga8hi9z/JaeTravels/anaconda_VCaAVc13o.png',
    'https://ik.imagekit.io/6cga8hi9z/JaeTravels/bird_aI3ryxIAP.png',
  ];

  const mainBackgrounds = [
    'linear-gradient(90deg, rgba(15, 80, 62, 1) 0%, rgba(126, 202, 18, 1) 100%)',
    'linear-gradient(90deg, rgba(62, 15, 80, 1) 0%, rgba(18, 202, 126, 1) 100%)',
    'linear-gradient(90deg, rgba(80, 62, 15, 1) 0%, rgba(202, 18, 126, 1) 100%)',
  ];

  const [chameleonBgImage, setChameleonBgImage] = useState(chameleonImages[0]);
  const [mainBgGradient, setMainBgGradient] = useState(mainBackgrounds[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % chameleonImages.length);
    }, 20000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const updateImages = useCallback(() => {
    setChameleonBgImage(chameleonImages[currentIndex]);
    setMainBgGradient(mainBackgrounds[currentIndex]);
  }, [currentIndex, chameleonImages, mainBackgrounds]);

  useEffect(() => {
    updateImages();
  }, [updateImages]);

  return (
    <div className="mainCont">
      <Gutter>
        <main className="main" style={{ background: mainBgGradient }}>
          <div className="flexColumn">
            <span className="firstheader">The year Earth</span>
            <span className="secondHeader">CHANGED</span>
            <div className="flexRow">
              <div>
                <button id="downloadBtn">Book Now</button>
              </div>
              <div>
                <button className="btn">Read More</button>
              </div>
            </div>
            <div>
              <span className="textPara">Written by David Attenborough</span>
            </div>
          </div>
          <div id="chameleon" style={{ backgroundImage: `url(${chameleonBgImage})` }}></div>
        </main>
      </Gutter>
    </div>
  );
});

export default EarthYearComponent;