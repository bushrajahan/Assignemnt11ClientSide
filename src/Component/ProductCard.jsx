import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { AiFillStar } from "react-icons/ai";
const ProductCard = ({ data }) => {
  const [products, setProduct] = useState([data]);

  const {
    brandName,
    img,
    name,
    email,
    price,
    productType,
    shortDescription,
    rating,
    _id,
  } = data;

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
              setProduct(products.filter((product) => product._id !== id));
            }
          })
          .catch((error) => {
            swal(
              "Error",
              "An error occurred while deleting the product.",
              "error"
            );
          });
      } else {
        // User canceled the deletion
        swal("Cancelled", "Your product is safe.", "info");
      }
    });
  };

  const renderStars = (rating) => {
    const maxRating = 5;
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="mdi mdi-star text-yellow-400"></i>);
      } else {
        stars.push(
          <i key={i} className="mdi mdi-star-outline text-yellow-400"></i>
        );
      }
    }
    return stars;
  };

  return (
    <div className="  flex items-center p-5 lg:p-10 overflow-hidden relative">
      <div className="  rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-green-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
          <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
            <div className="relative">
              <img src={img} className="w-full relative z-10" alt="" />
              <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
            </div>
          </div>
          <div className=" md:w-1/2 px-10">
            <div className="mb-10">
              <h1 className="font-bold uppercase text-2xl mb-5">{brandName}</h1>
              <h3 className="font-bold">{name} </h3>
              <h3 className="font-bold">{productType} </h3>
            </div>
            <div>
              <div className="inline-block align-bottom mr-5">
                <span className="text-2xl leading-none align-baseline">$</span>
                <span className="font-bold text-5xl leading-none align-baseline">
                  {price}
                </span>
                <p className="text-2xl leading-none align-baseline m-3">
                  {shortDescription}
                </p>
              </div>
              <div className="mt-4 ">
                <p className="flex gap-1 my-2">
                  <AiFillStar className=" text-yellow-400"></AiFillStar>{" "}
                  {rating}
                </p>
              </div>
              <div className="block align-bottom">
                <button
                  onClick={() => handleDelete(_id)}
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
  );
};

export default ProductCard;
