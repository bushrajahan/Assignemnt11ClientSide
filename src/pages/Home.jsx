import React from 'react';
import Navbar from '../Component/Navbar';
import Banner from '../Component/Banner';
import BrandPages from './BrandPages';
import ParentComponent from '../Component/ParentComponent';
import ProductSlide from '../Component/PeoductSlide';

const Home = () => {
  return (
    <div className=''>
    
      <Banner></Banner>
      <BrandPages></BrandPages>
      <ParentComponent></ParentComponent>
       <ProductSlide></ProductSlide>
    </div>
  );
};

export default Home;