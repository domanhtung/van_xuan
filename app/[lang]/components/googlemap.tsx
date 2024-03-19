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
        src={`https://www.google.com/maps/embed/v1/place?q=Shophouse%202B%2C%201st%20floor%20Green%20Pearl%20Mega%20Mall%2C%20No%20378%2C%20Minh%20Khai%20Road%2C%20Hai%20Ba%20Trung%20District%2C%20Hanoi%2C%20Vietnam&key=${mapKey}`}
      ></iframe>
    </div>
  );
}
