import "../style/components/slider.css";
import { useState } from "react";
import { sliderdata } from "../data";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

export const Slider = () => {
  const slideLen = 6;
  const [slide, setSlide] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState(null);

  const nextSlide = () => {
    setTransitionDirection("next");
    setSlide(slide === slideLen - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setTransitionDirection("prev");
    setSlide(slide === 0 ? slideLen - 1 : slide - 1);
  };

  return (
    <div className="container_slider">
      <FaArrowCircleLeft className="arrow arrow_left" onClick={prevSlide} />
      {sliderdata.map((d, idx) => (
        <img
          key={idx}
          className={
            slide === idx
              ? `slide slide_active ${
                  transitionDirection === "next" ? "slide_next" : "slide_prev"
                }`
              : `slide slide_hidden`
          }
          src={d.img}
          alt=""
        />
      ))}
      <FaArrowCircleRight className="arrow arrow_right" onClick={nextSlide} />
      <span className="indicators">
        {sliderdata.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={
                slide === idx ? "indicator" : "indicator indicator_inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};
