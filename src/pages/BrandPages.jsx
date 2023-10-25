import React, { useEffect, useState } from "react";
import ShowProduct from "./ShowProduct";
import { Link, useNavigate } from "react-router-dom";

const BrandPages = () => {
  const [brandData, setBrandData] = useState([]);
  const [displayedCards, setDisplayedCards] = useState(3); // Initial number of cards to display

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => setBrandData(data));
  }, []);

  // Function to load more cards when the "Show More" button is clicked
  const loadMoreCards = () => {
    setDisplayedCards(6); // Change to display 6 cards
  };
  const navigate = useNavigate();
  const handleClick = (brand) =>{
    navigate(`/product/${brand}`);
       

  }

  return (
    <div className=" bg-red-400 " >
      <h2 className="flex justify-center items-center font-bold text-xl md:text-5xl text-green-400">
        Meet Our Brands
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-3 mt-10">
        {brandData.slice(0, displayedCards).map((product) => (
          <div key={product._id} className="flex justify-center items-center" onClick={()=>handleClick(product.brandName)}>
            <div>
              <figure>
                <img src={product.img} alt={product.brandName} className="md:w-96 max-h-72 my-4" />
              </figure>
            </div>
          </div>
        ))}
      </div>
      {displayedCards === 3 && (
        <div className="flex justify-center">
          <button onClick={loadMoreCards} className="bg-green-400 text-white px-4 py-2 rounded-md mt-4">
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default BrandPages;
