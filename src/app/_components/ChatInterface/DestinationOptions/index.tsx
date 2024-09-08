// DestinationOptions.tsx
import React from 'react';
import Image from 'next/image';
import styles from './index.module.scss';

interface DestinationOptionsProps {
  onSelectDestination: (destination: string) => void;
}

const destinations = [
  {
    src: 'https://ik.imagekit.io/6cga8hi9z/JaeTravels/1979bc7b3aa21e5a15483d641e149764__JKhxw8bk.jpg',
    alt: 'Destination 1',
    name: 'Destination 1',
  },
  {
    src: 'https://ik.imagekit.io/6cga8hi9z/JaeTravels/African_savanna_NGigfRmrsK.jpg',
    alt: 'Destination 2',
    name: 'Destination 2',
  },
  {
    src: 'https://ik.imagekit.io/6cga8hi9z/JaeTravels/7c661840fc27fe1d866be773618bda37__QYWFslY-.jpg',
    alt: 'Destination 3',
    name: 'Destination 3',
  },
  {
    src: 'https://ik.imagekit.io/6cga8hi9z/JaeTravels/df1f8c50c50da7d6e0f0cd090a070113_ZcNVVUjVd.jpg',
    alt: 'Destination 4',
    name: 'Destination 4',
  },
  {
    src: 'https://ik.imagekit.io/6cga8hi9z/JaeTravels/9af65d31721bab7f9c321711af5c40ba_DaDRBttWn.jpg',
    alt: 'Destination 5',
    name: 'Destination 5',
  },
]

const DestinationOptions: React.FC<DestinationOptionsProps> = ({ onSelectDestination }) => {
  return (
    <div className={styles.images}>
      {destinations.map((destination, index) => (
        <Image
          key={index}
          src={destination.src}
          width={200}
          height={250}
          alt={destination.alt}
          onClick={() => onSelectDestination(destination.name)}
        />
      ))}
    </div>
  );
};

export default DestinationOptions;
