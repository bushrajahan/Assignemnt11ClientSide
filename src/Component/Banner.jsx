import React from 'react';
import { useNavigate } from 'react-router-dom';
import BrandPages from '../pages/BrandPages';

const Banner = () => {
  const navigate = useNavigate();
  const shopNow = () =>{
          navigate(`/users/:brandName`)
  }
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/YP0cxyc/mobile.jpg" className="w-full" alt="Slide 1" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <button className="btn-middle bg-blue-600
           font-bold text-white p-2 rounded" onClick={shopNow}>Shop Now</button>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/qCL7szn/gori.jpg" className="w-full" alt="Slide 2" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <button className="btn-middle p-2 rounded bg-blue-600 font-bold text-white" onClick={shopNow}>Shop Now</button>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
