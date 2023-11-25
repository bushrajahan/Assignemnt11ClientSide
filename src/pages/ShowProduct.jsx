import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "../Component/Slider";
import { AiFillStar } from "react-icons/ai";
const ShowProduct = () => {
  const [loading, setLoading] = useState(true);
  const brand = useParams();
  console.log(brand.brandName); // This will log 'samsung' if the URL is http://localhost:5173/product/samsung
  const text = brand.brandName;

  const [showProduct, setShowProduct] = useState(text.toLocaleLowerCase()); // Initialize with the brand parameter

  const [datas, setData] = useState([showProduct]);

  useEffect(() => {
    // Fetch data when showProduct changes
    fetch(
      `https://assignment-server-side10-3vbvizkrt-bushrajahans-projects.vercel.app/users/${showProduct}`
    )
      .then((res) => res.json())
      .then((data) => {
        // Update the data state with fetched data
        setData(data);
        setLoading(false);
      });
  }, [showProduct]);
  console.log("datas", datas);
  // Determine how many items to remove based on data length
  const itemsToRemove = datas.length > 6 ? 6 : 1;

  // Use splice to remove items from the beginning of the array
  const modifiedDatas = [...datas]; // Create a copy to avoid mutating the original array
  modifiedDatas.splice(0, itemsToRemove);
  const navigate = useNavigate();
  const handleDetails = (id) => {
    navigate(`/product/${brand.brandName}/${id}`);
  };
  const handleUpdate = (id) => {
    navigate(`/product/${brand.brandName}/${id}/users`);
  };
  console.log(datas);
  return loading ? (
    <div className=" mx-auto">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : modifiedDatas.length ? (
    <div className="  mx-auto">
      <div>{<Slider datas={datas}></Slider>}</div>
      <div>
        <div className="flex justify-center flex-wrap items-center ">
          <button
            className="bg-black text-white p-2 m-2 rounded-lg"
            onClick={() => setShowProduct("")}
          >
            All
          </button>
          <button
            className="bg-black text-white p-2 m-2 rounded-lg"
            onClick={() => setShowProduct("samsung")}
          >
            Samsung
          </button>
          <button
            className="bg-black text-white p-2 m-2 rounded-lg"
            onClick={() => setShowProduct("galaxy")}
          >
            Galaxy
          </button>
          <button
            className="bg-black text-white p-2 m-2 rounded-lg"
            onClick={() => setShowProduct("iphone")}
          >
            iPhone
          </button>
          <button
            className="bg-black text-white p-2 m-2 rounded-lg"
            onClick={() => setShowProduct("ximio")}
          >
            Ximio
          </button>
          <button
            className="bg-black text-white p-2 m-2 rounded-lg"
            onClick={() => setShowProduct("sony")}
          >
            Sony
          </button>
          <button
            className="bg-black text-white p-2 m-2 rounded-lg"
            onClick={() => setShowProduct("Vivo")}
          >
            Vivo
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {modifiedDatas?.map((data) => (
            <div key={data._id}>
              <div className="m-10 card bg-white text-black shadow-xl ">
                <figure>
                  <img className="w-full  h-72" src={data?.img} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{data?.brandName}</h2>
                  <p>{data.name}</p>
                  <p>{data?.productType}</p>
                  <p className="card-title">{data?.price}</p>
                  <p className="flex items-center gap-2">
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                    {data?.rating}
                  </p>

                  <div className="card-actions justify-end">
                    <button
                      className="btn bg-black text-white"
                      onClick={() => handleUpdate(data?._id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn bg-black text-white"
                      onClick={() => handleDetails(data?._id)}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center">
      <h2 className="card-title">No Data Found</h2>
    </div>
  );
};
export default ShowProduct;
