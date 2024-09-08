import React from 'react';
import Maps from '../Map'

const locationData = {
  latitude: -1.2116362354532768,
  longitude: 36.79788433185448,
  propertyName: 'RiverBank Apartments',
};

const MapComponent: React.FC = () => {
  return (
    <div>
      <Maps locationData={locationData} />
    </div>
  );
};

export default MapComponent;