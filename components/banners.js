import React, { useState, useEffect } from "react";
const Banner = [
  {
    image: "/1.jpg",
    text: "Banner 1",
  },
  {
    image: "/2.jpg",
    text: "Banner 2",
  },
  {
    image: "/3.jpg",
    text: "Banner 3",
  },
];

const Banners = () => {
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((bannerIndex + 1) % Banner.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerIndex]);

  return (
    <div className="relative bg-balck">
      <img className="opacity-30"
        src={Banner[bannerIndex].image}
      />
      <div className="absolute bottom-0 left-0 p-4">
        <p className="text-xl font-bold text-black">
          {Banner[bannerIndex].text}
        </p>
      </div>
    </div>
  );
};
export default Banners;
