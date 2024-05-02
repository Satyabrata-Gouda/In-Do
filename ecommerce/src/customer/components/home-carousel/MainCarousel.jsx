import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};


const MainCarousel = () => {
     const items = mainCarouselData.map((img)=> <img className='cursor-pointer -z-10' role='presentation' src={img.image} alt=''/>)

  return (
    <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
/>
  )
}

export default MainCarousel;