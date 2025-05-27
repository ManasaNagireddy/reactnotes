import React, { useRef, useState } from "react";
import { Carousel } from "antd";
import "/src/css/CarouselComponent.css";

const CarouselComponent = ({ items, onItemClick }) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    carouselRef.current?.goTo(index);
  };

  const handleBeforeChange = (_, next) => {
    setActiveIndex(next);
  };

  return (
    <div className="carousel-wrapper">
      <div className="thumbnail-column">
        {items.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`Thumbnail ${index}`}
            className={`thumbnail ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>

      <div className="main-carousel">
        <Carousel
          ref={carouselRef}
          afterChange={handleBeforeChange}
          dots={false}
          arrows={true}
          autoplay={true}
        >
          {items.map((item, index) => (
            <div key={index} onClick={() => onItemClick(item)} className="carousel-slide">
              <img src={item} alt={`Main ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;