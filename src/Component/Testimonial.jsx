import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Testimonials = ({ testimonials }) => {
  const [itemsToShow, setItemsToShow] = useState(3);

  const handleResize = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 600) {
      setItemsToShow(1);
    } else if (windowWidth <= 960) {
      setItemsToShow(2);
    } else {
      setItemsToShow(2);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="testimonial-container ">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        stopOnHover={true}
        showStatus={false}
        swipeable={true}
        emulateTouch={true}
        showIndicators={false}
        centerMode={true}
        centerSlidePercentage={100/itemsToShow}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial ">
            <div className="card h-72     shadow-xl rounded-lg p-10 sm:p-8">
              <div className="mx-auto w-32">
                <img className="" src={testimonial.img} alt="" />
              </div>
              <p className="text-lg sm:text-xl ">{testimonial.quote}</p>
              <p className="text-sm sm:text-base ">- {testimonial.author}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
