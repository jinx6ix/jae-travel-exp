'use client'
import React, { useState, useCallback } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

interface LocationData {
  latitude: number;
  longitude: number;
  propertyName: string;
}

interface MapComponentProps {
  locationData: LocationData;
}

const libraries = ['places']; // Define libraries array outside of the component

const Maps: React.FC<MapComponentProps> = ({ locationData }) => {
  const mapContainerStyle = {
    height: '400px',
    width: '100%',
  };

  const center = {
    lat: locationData.latitude,
    lng: locationData.longitude,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBqV--OxzzYAzjJtGbN_4kFVv4LBK1wQls',
    libraries: libraries, // Use the libraries constant here
  });

  const [, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} label={locationData.propertyName} />
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
};

export default Maps;
