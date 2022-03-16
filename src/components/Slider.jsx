import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import "./slider.css";
import { sliderData } from "../data/slider";

export default function Sliderapi() {
  return (
    <div className="slider__container">
      <Carousel fade>
      {sliderData.map((item) => {
        return (
          <Carousel.Item key={item.id}>
            <img className="slider__img" src={item.image} alt={item.alt} />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <a href='/'>{item.button}</a>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
      </Carousel>
    </div>
  );
}
