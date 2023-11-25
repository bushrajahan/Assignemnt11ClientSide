import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";
import { useLoaderData, useParams } from "react-router-dom";

const Update = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const id = useParams();
  const [singleData, setSingleData] = useState([]);
  useEffect(() => {
    fetch(
      `https://assignment-server-side10-3vbvizkrt-bushrajahans-projects.vercel.app/users/${id.brandName}/${id.id}`
    )
      .then((res) => res.json())
      .then((data) => setSingleData(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const img = form.image.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const productType = form.productType.value;
    const description = form.shortDescription.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const total = {
      img,
      email,
      name,
      brandName,
      productType,
      description,
      price,
      rating,
    };

    // Define the URL where you want to send the POST request

    fetch(
      `https://assignment-server-side10-3vbvizkrt-bushrajahans-projects.vercel.app/users/${id.brandName}/${id.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(total),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // Handle the response here (you can use the 'data' variable)
        console.log(data);

        // Show a success message to the user
        swal({
          title: "Good job!",
          text: "You Update  the product!",
          icon: "success",
          button: "Aww yiss!",
        });
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error:", error);

        // Show an error message to the user
        swal({
          title: "Error",
          text: "Something went wrong. Please try again later.",
          icon: "error",
          button: "Ok",
        });
      });
  };

  return (
    <div>
      <section className="max-w-4xl p-6 mx-auto bg-green-400 rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Update
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="productImage"
              >
                Image
              </label>
              <input
                id="productImage"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                name="image"
                defaultValue={singleData?.img}
                required
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="productName"
              >
                Name
              </label>
              <input
                id="productName"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                name="name"
                defaultValue={singleData?.name}
                required
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="productBrand"
              >
                Brand Name
              </label>
              <input
                id="productBrand"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                name="brandName"
                defaultValue={singleData?.brandName}
                required
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="productType"
              >
                Product Type
              </label>
              <input
                id="productBrand"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                name="productType"
                defaultValue={singleData?.productType}
                required
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="productPrice"
              >
                Price
              </label>
              <input
                id="productPrice"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                name="price"
                defaultValue={singleData?.price}
                required
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="productDescription"
              >
                Short Description
              </label>
              <textarea
                id="productDescription"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                name="shortDescription"
                defaultValue={singleData?.description}
                required
              ></textarea>
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="productRating"
              >
                Rating
              </label>
              <input
                id="productRating"
                type="number"
                min="1"
                max="5"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                name="rating"
                defaultValue={singleData?.rating}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 px-4 py-2 font-bold text-white bg-green-500 rounded-full hover-bg-green-700 focus:outline-none focus:ring"
          >
            update
          </button>
        </form>
      </section>
    </div>
  );
};

export default Update;
