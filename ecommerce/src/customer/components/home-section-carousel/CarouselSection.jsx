import React, { useState, useEffect, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../home-section-card/HomeSectionCard";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { Button } from "@mui/material";
import "react-alice-carousel/lib/alice-carousel.css";

const CarouselSection = ({data,sectionName}) => {
  const carouselRef = useRef(null);
  const [acIndex, setActIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const handleSlideChanged = ({ item }) => {
    console.log("Current Index:", item);
    setActIndex(item);
  };

  const items = data
    .slice(0, 10)
    .map((item, index) => <HomeSectionCard key={index} product={item} />);

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        {items.length > 0 && (
          <AliceCarousel
            items={items}
            disableButtonsControls
            disableDotsControls
            responsive={responsive}
            activeIndex={acIndex}
            onSlideChanged={handleSlideChanged}
            ref={carouselRef}
          />
        )}
        {acIndex !== items.length - 5 && (
          <Button
            onClick={slideNext}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "transparent",
            }}
          >
            <ArrowRightIcon sx={{ transform: "rotate(270deg)", color: "black" }} />
          </Button>
        )}
        { acIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "transparent",
            }}
          >
            <ArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default CarouselSection;
