import React from 'react';

const Carasoul = ({data}) => {
     console.log(data)
     const {brandName,image,name,price,productType,rating,shortDescription}=data;
  return (
    <div>
        <div className="card">
      <img className="product--image" src={image} alt="product image" />
      <h2>{brandName}</h2>
      <p className="price">{name}</p>
      <p>{productType}</p>
      <p>{price}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
    </div>
  );
};

export default Carasoul;