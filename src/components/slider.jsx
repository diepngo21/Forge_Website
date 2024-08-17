import "../style/components/slider.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { sliderdata, newsdata } from "../data";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

export const Slider = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isNewsPage = location.pathname === "/new";

  // Choose data based on the current page
  const data = isHomePage ? sliderdata : isNewsPage ? newsdata : [];

  const slideLen = data.length;
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
      {data.length > 0 ? (
        data.map((d, idx) => (
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
            alt={d.name || "Slider image"}
          />
        ))
      ) : (
        <p>No images to display</p>
      )}
      <FaArrowCircleRight className="arrow arrow_right" onClick={nextSlide} />
      <span className="indicators">
        {data.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={
              slide === idx ? "indicator" : "indicator indicator_inactive"
            }
          ></button>
        ))}
      </span>
    </div>
  );
};
