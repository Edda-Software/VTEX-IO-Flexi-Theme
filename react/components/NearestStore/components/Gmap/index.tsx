import React, { FC, memo } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface GmapProps {
  mapContainerStyle?: React.CSSProperties | undefined;
  center?: google.maps.LatLng | google.maps.LatLngLiteral | undefined;
  markerPosition: google.maps.LatLng | google.maps.LatLngLiteral;
  loadingElement?: React.ReactNode;
  googleMapsApiKey: string;
}

const Gmap: FC<GmapProps> = ({
  markerPosition,
  center,
  mapContainerStyle,
  loadingElement,
  googleMapsApiKey,
}) => {
  return (
    <LoadScript
      googleMapsApiKey={googleMapsApiKey}
      loadingElement={loadingElement}
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={11}
      >
        <Marker position={markerPosition} />
      </GoogleMap>
    </LoadScript>
  );
};

export default memo(Gmap);
