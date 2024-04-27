import React from "react";
import MainCarousel from "../../components/home-carousel/MainCarousel.jsx";
import CarouselSection from "../../components/home-section-carousel/CarouselSection.jsx";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className=" space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <CarouselSection />
        <CarouselSection />
        <CarouselSection />
        <CarouselSection />
        <CarouselSection />
      </div>
    </div>
  );
};

export default HomePage;
