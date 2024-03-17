"use client";
import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }: any) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.99992 7.66667C7.55789 7.66667 7.13397 7.49107 6.82141 7.17851C6.50885 6.86595 6.33325 6.44203 6.33325 6C6.33325 5.55797 6.50885 5.13405 6.82141 4.82149C7.13397 4.50893 7.55789 4.33333 7.99992 4.33333C8.44195 4.33333 8.86587 4.50893 9.17843 4.82149C9.49099 5.13405 9.66659 5.55797 9.66659 6C9.66659 6.21887 9.62348 6.4356 9.53972 6.63781C9.45596 6.84002 9.33319 7.02375 9.17843 7.17851C9.02367 7.33328 8.83993 7.45604 8.63772 7.5398C8.43552 7.62356 8.21879 7.66667 7.99992 7.66667ZM7.99992 1.33333C6.76224 1.33333 5.57526 1.825 4.70009 2.70017C3.82492 3.57534 3.33325 4.76232 3.33325 6C3.33325 9.5 7.99992 14.6667 7.99992 14.6667C7.99992 14.6667 12.6666 9.5 12.6666 6C12.6666 4.76232 12.1749 3.57534 11.2998 2.70017C10.4246 1.825 9.2376 1.33333 7.99992 1.33333Z"
      fill="#FF0000"
    />
  </svg>
);

export default function SimpleMap() {
  const defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "500px" }} className="overflow-hidden">
      <GoogleMapReact
        bootstrapURLKeys={{ 
          key: "AIzaSyDNFiZ-WcWD33mGmLWRSim6mclkL-8Xb9c" 
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}