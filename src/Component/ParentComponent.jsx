import React from 'react';
import Testimonials from './Testimonial';
 // Assuming Testimonials component file location

const ParentComponent = () => {
  const testimonialData = [
    {
      quote: "Amazing service! The team was so helpful and professional.",
      author: "John Doe",
      img:'https://i.ibb.co/pWZ6SDZ/images-ee-1.jpg'
    },
    {
      quote: "I love the product! It's changed the way I work.",
      author: "Jane Smith",
      img:'https://i.ibb.co/74LxNxf/rr.jpg'
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="container mx-auto">
      <h2 className="flex justify-center items-center  text-4xl font-bold mb-4">Client Testimonials</h2>
      <Testimonials testimonials={testimonialData} />
    </div>
  );
};

export default ParentComponent;
