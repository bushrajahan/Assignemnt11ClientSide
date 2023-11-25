import React, { useState } from 'react';

const ProductSlider = ({ products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const nextSlide = () => {
        if (currentIndex < products.length - 3) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="slider">
            <div className="slides" style={{ display: 'flex', overflow: 'hidden' }}>
                {products.slice(currentIndex, currentIndex + 3).map((product, index) => (
                    <div key={index} className="product" style={{ flex: '0 0 33.33%', textAlign: 'center', padding: '20px' }}>
                        {product}
                    </div>
                ))}
            </div>
            <button className="prev" onClick={prevSlide}>❮</button>
            <button className="next" onClick={nextSlide}>❯</button>
        </div>
    );
};

export default ProductSlider;
