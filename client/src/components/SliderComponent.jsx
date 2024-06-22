import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Define your slides with image URLs, titles, descriptions, and links
const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Article 1 Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '/article1',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/906088/pexels-photo-906088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Article 2 Title',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: '/article2',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1230157/pexels-photo-1230157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Article 3 Title',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    link: '/article3',
  },
];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {slides.map(slide => (
        <div key={slide.id} className="w-full p-3 mt-10 mb-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-5">
            {/* left */}
            <div className="flex-1 md:w-2/3">
              <img src={slide.image} alt={slide.title} className="w-full h-auto md:h-500 object-cover rounded-lg mb-4 md:mb-0" />
            </div>
            {/* right */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{slide.title}</h2>
              <p className="text-lg text-gray-600 mb-4">{slide.description}</p>
              <a href={slide.link} className="text-teal-500 hover:underline text-lg">
                Ler mais
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
