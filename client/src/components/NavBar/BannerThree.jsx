import React from "react";
import Slider from "react-slick"; // Import react-slick

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing the images
import img1 from "../../assets/home/bg.png";
import img2 from "../../assets/home/bg.png";
import img3 from "../../assets/home/bg.png";

const BannerThree = () => {
  // Slick slider settings
  const settings = {
    dots: true, // Enable dot navigation
    infinite: true, // Loop infinitely
    speed: 500, // Transition speed
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 3000, // Auto-scroll speed (3 seconds)
    slidesToShow: 1, // Show one slide at a time (for banners)
    slidesToScroll: 1, // Scroll one slide at a time
  };

  // Hardcoded banners
  const banners = [
    {
      image: img1,
      title: "Banner 1",
      description: "This is the first banner description",
    },
    {
      image: img2,
      title: "Banner 2",
      description: "This is the second banner description",
    },
    {
      image: img3,
      title: "Banner 3",
      description: "This is the third banner description",
    },
  ];

  return (
    <div className="relative no-arrows-slider">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="relative">
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-[31rem] object-cover"
            />
            <div className="absolute bottom-10 left-10 text-white">
              <h2 className="font-castellar text-6xl">{banner.title}</h2>
              <p className="font-cormorant text-2xl">{banner.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerThree;
