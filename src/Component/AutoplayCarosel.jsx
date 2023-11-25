import React, { useContext, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductCard from "./ProductCard";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";
import { AiFillStar } from "react-icons/ai";
import { data } from "autoprefixer";
const AutoplayCarousel = () => {
  const { user } = useContext(AuthContext);
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(3);
  const  [remeaning,setRemeaning] = useState([])

  useEffect(() => {
    fetchData();
  }, [user.email]);
  console.log("email", user.email);
  const fetchData = () => {
    fetch(
      `https://assignment-server-side10-3vbvizkrt-bushrajahans-projects.vercel.app/clients`
    )
      .then((res) => {
        console.log("Response status:", res.status);

        return res.json();
      })
      .then((data) => {
        console.log("Data:", data);
        if (Array.isArray(data)) {
          
          setDatas(data);
        } else {
          setDatas([data]);
        }
   
        setLoading(false);
    
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
        // setLoading(false);
      });
   
    console.log(datas);
    console.log("ttt",remeaning)

  };

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    // Define your breakpoints and the corresponding number of items to show
    if (windowWidth <= 600) {
      setItemsToShow(1);
    } else if (windowWidth <= 960) {
      setItemsToShow(2);
    } else {
      setItemsToShow(3);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
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
        fetch(
          `https://assignment-server-side10-3vbvizkrt-bushrajahans-projects.vercel.app/clients/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              swal("Deleted!", "The product has been deleted.", "success");
              // Refresh the data after deletion
              const filterData = datas.filter((data) => data._id !== id);
              setDatas(filterData);
            }
          })
          .catch((error) => {
            console.error("Error deleting product:", error);
          });
      }
    });
  };

  return (
    <div>
      {datas.length === 0 ? (
        <div className="flex justify-center items-center">
          <p>No data is shown</p>
        </div>
      ) : (
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={1000}
          infiniteLoop={true}
          swipeable={true}
          emulateTouch={true}
          stopOnHover={true}
          centerMode={false}
          showIndicators={false}
          showStatus={false}
          centerSlidePercentage={100 / itemsToShow}
        >
          {datas?.map((data) => (
            <div key={data._id}>
              <div className="  flex items-center p-5 lg:p-10 overflow-hidden relative">
                <div className="  rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-green-800 relative md:text-left">
                  <div className="md:flex items-center -mx-10">
                    <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                      <div className="relative">
                        <img
                          src={data.img}
                          className="w-full relative z-10"
                          alt=""
                        />
                        <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                      </div>
                    </div>
                    <div className=" md:w-1/2 px-10">
                      <div className="mb-10">
                        <h1 className="font-bold uppercase text-2xl mb-5">
                          {data.brandName}
                        </h1>
                        <h3 className="font-bold">{data.name} </h3>
                        <h3 className="font-bold">{data.productType} </h3>
                      </div>
                      <div>
                        <div className="inline-block align-bottom mr-5">
                          <span className="text-2xl leading-none align-baseline"></span>
                          <span className="font-bold text-5xl leading-none align-baseline">
                            {data.price}
                          </span>
                          <p className="text-2xl leading-none align-baseline m-3">
                            {data.shortDescription}
                          </p>
                        </div>
                        <div className="mt-4 ">
                          <p className="flex gap-1 my-2 ">
                            <AiFillStar className=" text-yellow-400"></AiFillStar>{" "}
                            {data.rating}
                          </p>
                        </div>
                        <div className="block align-bottom">
                          <button
                            onClick={() => handleDelete(data._id)}
                            className="bg-red-500 opacity-75 hover:opacity-100 text-white hover:text-gray-900 rounded-full px-10 py-2 font-semibold"
                          >
                            <i className="mdi mdi-cart -ml-2 mr-2"></i> DELETE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES */}
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default AutoplayCarousel;
