import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './slider.css'
import ImageOne from '../assets/sale.jpeg';
import ImageTwo from "../assets/new.jpeg";
import ImageThree from "../assets/refresh.jpeg";
import ImageFour from "../assets/flowers.jpeg";

export default function Sliderapi() {

  return (
    <div className="slider__container">
      <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} interval={4000}>
        <div className="images">
          <img src={ImageOne} alt="sale" />
          <img src={ImageTwo} alt="new in womens" />
        </div>
        <div className="images">
          <img src={ImageTwo} alt="new in womens" />
          <img src={ImageThree} alt="womens fashion" />
        </div>
        <div className="images">
          <img src={ImageThree} alt="womens fashion" />
          <img src={ImageFour} alt="mothers day" />
        </div>
        <div className="images">
          <img src={ImageFour} alt="mothers day" />
          <img src={ImageOne} alt="sale" />
        </div>
      </Carousel>
    </div>
  );

}
