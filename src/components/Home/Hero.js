import React, { useRef } from "react";
import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./style.scss";

const slides = [
  {
    id: 1,
    image: require("../../assets/slide1.png"),
    title: "Luxury Dinner Sets",
    description: "Crafted with timeless elegance for your table.",
    route: "/collections/dinnerware",
  },
  {
    id: 2,
    image: require("../../assets/slide2.png"),
    title: "Handmade Pottery",
    description: "Sculpted with passion, perfected by artisans.",
    route: "/collections/dinnerware",
  },
  {
    id: 3,
    image: require("../../assets/slide3.png"),
    title: "Designer Vases",
    description: "Elevate your interiors with ceramic art.",
    route: "/collections/dinnerware",
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const carouselRef = useRef(null);

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <section className="hero">
      {/* Left Arrow */}
      <button
        className="arrow left"
        onClick={() => carouselRef.current.prev()}
      >
        <LeftOutlined />
      </button>

      {/* Carousel */}
      <Carousel
        autoplay
        dots
        autoplaySpeed={4000}
        effect="scrollx"
        ref={carouselRef}
        draggable // enables drag/swipe
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="hero-slide"
            onClick={() => handleClick(slide.route)}
          >
            <div
              className="hero-content"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* <div className="hero-text">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <button
                  className="hero-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick(slide.route);
                  }}
                >
                  Shop Now
                </button>
              </div> */}
            </div>
          </div>
        ))}
      </Carousel>

      {/* Right Arrow */}
      <button
        className="arrow right"
        onClick={() => carouselRef.current.next()}
      >
        <RightOutlined />
      </button>
    </section>
  );
};

export default Hero;
