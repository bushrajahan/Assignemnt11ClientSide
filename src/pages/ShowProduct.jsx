import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowProduct = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { brand } = useParams();

  useEffect(() => {
    fetch('http://localhost:5000/users') // Replace with your API endpoint
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        filterByBrand(brand);
      });
  }, [brand]);

  const filterByBrand = (selectedBrand) => {
    if (selectedBrand === 'all') {
      setFilteredData(data);
    } else {
      const filtered = data.filter((product) =>
        product.brand.toLowerCase() === selectedBrand.toLowerCase()
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div>
      <h2>Products</h2>
      <div>
        {/* Buttons to filter by brand */}
        <button onClick={() => filterByBrand('all')} classNameName={brand === 'all' ? 'active' : ''}>
          All
        </button>
        <button onClick={() => filterByBrand('Galaxy')} classNameName={brand === 'Galaxy' ? 'active' : ''}>
          Galaxy
        </button>
        <button onClick={() => filterByBrand('iPhone')} className={brand === 'iPhone' ? 'active' : ''}>
          iPhone
        </button>
        {/* Add more buttons for other brands */}
      </div
      <div>
        {/* Display product cards based on the filtered data */}
        {filteredData.map((product) => (
          <div key={product.id} className="product-card">
          <div className="card  bg-base-100 shadow-xl">
  <figure><img src={product.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{product.brandName}</h2>
    <p>{product.name}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowProduct;
