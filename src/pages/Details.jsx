import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import swal from "sweetalert";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Details = () => {
  const id = useParams();
  console.log(id.brandName, id.id);
  const { user } = useContext(AuthContext);

  const [dataList, setDataList] = useState([]);
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    fetch(
      `https://assignment-server-side10-3vbvizkrt-bushrajahans-projects.vercel.app/users/${id.brandName}/${id.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrentData(data);
        setDataList((prevDataList) => [...prevDataList, data]);
      });
  }, [id.brandName, id.id]);
  console.log("currentData", currentData);

  const handleClick = (data) => {
    const dataWithUserEmail = {
      ...data,
      email: user.email,
    };
    fetch(
      "https://assignment-server-side10-3vbvizkrt-bushrajahans-projects.vercel.app/clients",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataWithUserEmail),
      }
    )
      .then((response) => response.json())
      .then(() => {
        console.log("dataWithUserEmail", dataWithUserEmail);
        swal({
          title: "Congratulation!",
          text: "You Successfully added the product!",
          icon: "success",
        });
      });
  };

  return (
    <div className=" flex  justify-center items-center shadow-xl max-w-6xl mx-auto">
      <div className="grid grid-cols-1 ">
        {currentData && (
          <div key={currentData._id}>
            <div className=" card  text-white">
              <figure>
                <img
                  className="hover:scale-150 h-72"
                  src={currentData?.img}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body  w-full bg-white text-black flex flex-col justify-center items-center">
                <h2 className="card-title text-green-700 font-bold text-5xl">
                  {currentData?.brandName}
                </h2>
                <p>{currentData?.name}</p>
                <p>{currentData?.productType}</p>
                <p className="card-title">{currentData?.price}Tk</p>
                <p className="flex items-center gap-2">
                  <AiFillStar className="text-yellow-400"></AiFillStar>
                  {currentData?.rating}
                </p>
                <p>{currentData?.description}</p>
                <div className="card-actions justify-end">
                  <button
                    className="bg-black text-white p-2 rounded-lg"
                    onClick={() => handleClick(currentData)}
                  >
                    AddtoCart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
