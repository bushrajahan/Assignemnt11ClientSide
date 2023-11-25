import React, { useState } from 'react';

const PeoductSlide = () => {
  const [selectedImage, setSelectedImage] = useState('https://i.ibb.co/MczkGRt/download-sss-1.jpg');

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <div className="grid gap-4  mt-8 ">
    <h2 className="flex justify-center items-center  text-4xl font-bold">Our UpComing Products</h2>
    <div className=''>
    <div className='flex justify-center items-center  mb-3
      '>
        
        <img className="h-auto max-w-full rounded-lg" src={selectedImage} alt="" />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {[
          'https://i.ibb.co/tCmPdQ3/downloddad.jpg',
          'https://i.ibb.co/D1gDXN2/ximio1.jpg',
          'https://i.ibb.co/wLRFdqF/vivo4.jpg',
          'https://i.ibb.co/PWGyHTX/galaxy5.jpg',
          'https://i.ibb.co/kxJ9WYx/sony.jpg'
        ].map((image, index) => (
          <div key={index} onClick={() => handleImageClick(image)}>
            <img className="h-auto max-w-full rounded-lg" src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PeoductSlide;
