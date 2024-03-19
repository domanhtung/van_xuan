"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

const Loading = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(true);

  useEffect(() => {
    if (!isLoaded) {
      const timeOutId = setTimeout(() => {
        setIsLoaded(true);
        clearTimeout(timeOutId);
      }, 1000);
      return () => clearTimeout(timeOutId);
    } else {
      const timeOutId = setTimeout(() => {
        setIsShow(false);
        clearTimeout(timeOutId);
      }, 1000);
      return () => clearTimeout(timeOutId);
    }
  }, [isLoaded]);

  if (!isShow) {
    return null;
  }

  return (
    <div
      className={clsx(
        "preloader js-preloader",
        isLoaded && "animation-loading-end"
      )}
    >
      <div className="loader loader-inner-1">
        <div className="loader loader-inner-2">
          <div className="loader loader-inner-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
