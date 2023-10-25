import React, { useContext, useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductCard from './ProductCard';
import { AuthContext } from '../AuthProvider/AuthProvider';
import swal from 'sweetalert';

const AutoplayCarousel = () => {
  const { user } = useContext(AuthContext);
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    fetchData();
  }, [user.email]);

  const fetchData = () => {
    fetch(`http://localhost:5000/product/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    // Define your breakpoints and the corresponding number of items to show
    if (windowWidth <= 600) {
      setItemsToShow(3);
    } else if (windowWidth <= 960) {
      setItemsToShow(3);
    } else {
      setItemsToShow(3);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        // User confirmed, proceed with the deletion
        fetch(`http://localhost:5000/product/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              swal("Deleted!", "The product has been deleted.", "success");
              // Filter the deleted product out of the 'datas' array
              const updatedDatas = datas.filter((product) => product._id !== id);
              setDatas(updatedDatas);
            }
          })
          .catch((error) => {
            swal("Error", "An error occurred while deleting the product.", "error");
          });
      } else {
        // User canceled the deletion
        swal("Cancelled", "Your product is safe.", "info");
      }
    });
  };

  return (
    <div>
      {loading ? (
        <div className='flex justify-center items-center'>
          <p>
            <span className="loading loading-spinner loading-lg"></span>
          </p>
        </div>
      ) : datas.length > 0 ? (
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showArrows={itemsToShow < datas.length}
          centerMode={itemsToShow < datas.length}
          centerSlidePercentage={itemsToShow < datas.length ? 80 : 100}
          selectedItem={0}
          interval={3000}
          stopOnHover={false}
          swipeable={true}
          swipeScrollTolerance={10}
          axis="horizontal"
          renderThumbs={() => {}}
          className="carousel"
        >
          {datas.map((data) => (
            <div key={data._id} className='bg-green-400'>
              <div className="  flex items-center p-5 lg:p-10 overflow-hidden relative">
                <div className="  rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-green-800 relative md:text-left">
                  <div className="md:flex items-center -mx-10">
                    <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                      <div className="relative">
                        <img src={data.image} className="w-full relative z-10" alt="" />
                        <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                      </div>
                    </div>
                    <div className=" md:w-1/2 px-10">
                      <div className="mb-10">
                        <h1 className="font-bold uppercase text-2xl mb-5">{data.brandName}</h1>
                        <h3 className="font-bold">{data.name} </h3>
                        <h3 className="font-bold">{data.productType} </h3>
                      </div>
                      <div>
                        <div className="inline-block align-bottom mr-5">
                          <span className="text-2xl leading-none align-baseline">$</span>
                          <span className="font-bold text-5xl leading-none align-baseline">{data.price}</span>
                          <p className="text-2xl leading-none align-baseline m-3">{data.shortDescription}</p>
                        </div>
                        <div className='mt-4'>
                          <p>Rating</p>
                          <div>{data.rating}</div>
                        </div>
                        <div className="block align-bottom">
                          <button onClick={() => handleDelete(data._id)} className="bg-red-500 opacity-75 hover:opacity-100 text-white hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i> DELETE</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <p>No data to display.</p>
      )}
    </div>
  );
};

export default AutoplayCarousel;
