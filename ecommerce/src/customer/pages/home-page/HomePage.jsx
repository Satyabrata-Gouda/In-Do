import React from "react";
import MainCarousel from "../../components/home-carousel/MainCarousel.jsx";
import CarouselSection from "../../components/home-section-carousel/CarouselSection.jsx";
import { mens_kurta } from "../../../data/men/menKurta.js";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className=" space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
      <CarouselSection data={mens_kurta} sectionName={"Men's Kurta"}/>
      <CarouselSection data={mens_kurta} sectionName={"Men's Shoes"}/>
      <CarouselSection data={mens_kurta} sectionName={"Men's Shirt"}/>
      <CarouselSection data={mens_kurta} sectionName={"Women's Saree"}/>
      <CarouselSection data={mens_kurta} sectionName={"Women's Dress"}/>
      </div>
    </div>
  );
};

export default HomePage;
