"use client";
import React from "react";

interface Props {
  mapKey: string;
}

export default function SimpleMap({ mapKey }: Props) {
  return (
    <div style={{ height: "500px" }} className="overflow-hidden">
      <iframe
        width="600"
        height="450"
        className="w-full h-full border-0"
        loading="lazy"
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJqRBfFrurNTERPV3Ym6d44Ho&key=${mapKey}`}
      ></iframe>
    </div>
  );
}
