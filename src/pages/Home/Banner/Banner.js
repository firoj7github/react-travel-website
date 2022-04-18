import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import icon1 from '../../../image/main3.png'
import icon2 from '../../../image/main2.png'
import icon3 from '../../../image/main5.png'




const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={icon3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Best Travel Moment</h3>
            <p>Travel dates back to antiquity where wealthy Greeks and Romans would travel for leisure to their summer</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={icon2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Choice For You </h3>
            <p>Travel dates back to antiquity where wealthy Greeks and Romans would travel for leisure to their summer</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={icon1}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Taravelling Moment</h3>
            <p>
            Travel dates back to antiquity where wealthy Greeks and Romans would travel for leisure to their summer
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;