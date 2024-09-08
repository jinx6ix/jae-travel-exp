import React from 'react';
import styles from './index.module.scss';

interface MapEmbedProps {
  latitude: number;
  longitude: number;
  zoom?: number;
}

const MapEmbed: React.FC<MapEmbedProps> = ({
  latitude,
  longitude,
  zoom = 10,
}) => {
  const src = `https://maps.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`;

  return (
    <div className={styles.container}>
      <iframe
        src={src}
        className={styles.map}
        title="Google Maps"
        allowFullScreen
      />
    </div>
  );
};

export default MapEmbed;