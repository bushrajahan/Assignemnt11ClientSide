import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = ({ datas }) => {
  const itemsToRemove = datas.length > 6 ? 6 : 1;

  const modifiedDatas = datas.slice(itemsToRemove);

  const [itemsToShow, setItemsToShow] = useState(3);

  const handleResize = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 600) {
      setItemsToShow(1);
    } else if (windowWidth <= 960) {
      setItemsToShow(2);
    } else {
      setItemsToShow(6);
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
    <div className="carousel-container bg-blue-700">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showArrows={itemsToShow < modifiedDatas?.length}
        centerMode={itemsToShow < modifiedDatas?.length}
        centerSlidePercentage={itemsToShow < modifiedDatas?.length ? 80 : 100}
        selectedItem={0}
        interval={10000}
        stopOnHover={false}
        swipeable={true}
        swipeScrollTolerance={10}
        axis="horizontal"
        renderThumbs={() => {}}
        className="carousel"
      >
        {modifiedDatas.map((data) => (
     <div className='' key={data._id} >
     <div className=" card  text-black w-full  lg:w-64 bg-green-600  ">
      <figure><img className="w-full h-full  " src={data?.img} alt="Shoes"  /></figure>
   
     </div>
   </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
