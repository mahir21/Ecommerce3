import React from "react";

const ThirdCarousel = () => {
  const images = [
    { id: 1, src: "/suit1.jpg", alt: "Light Brown Suit" },
    { id: 2, src: "/suit2.jpg", alt: "Medium Brown Suit" },
    { id: 3, src: "/suit3.jpg", alt: "Black Suit" },
  ];

  return (
    <div className="flex justify-end p-4 ">
      <div className="grid grid-cols-2 gap-1 p-2 w-96 h-96 ml-auto">
        <img src="/suit3.jpg" className="border-2 border-white"></img>

        <img src="/suit3.jpg" className="border-2 border-white"></img>
        <img src="/suit3.jpg" className="border-2 border-white"></img>

        <img src="/suit3.jpg" className="border-2 border-white"></img>
      </div>
    </div>
  );
};

export default ThirdCarousel;
