import ProductPreview from "../productPreview/ProductPreview";
import React from "react";
import './products.css';

import img1 from '../../images/image1.jpg';
import img2 from '../../images/image2.jpg';
import img3 from '../../images/image3.jpg';
import img4 from '../../images/image4.jpg';
import img5 from '../../images/image5.jpg';
import img6 from '../../images/image6.jpg';
import img7 from '../../images/image7.jpg';
import img8 from '../../images/image8.jpg';
import img9 from '../../images/image9.jpg';
import img10 from '../../images/image10.jpg';

const sneakers = [
    {
        price: 5999,
        imageUrl: img1,
        name: "Кроссовки Nike Air Max",
        description: "Легкие и удобные кроссовки для бега."
    },
    {
        price: 4999,
        imageUrl: img2,
        name: "Adidas Ultraboost",
        description: "Кроссовки с отличной амортизацией и поддержкой."
    },
    {
        price: 6999,
        imageUrl: img3,
        name: "Puma RS-X",
        description: "Стильные кроссовки с ярким дизайном."
    },
    {
        price: 6299,
        imageUrl: img4,
        name: "Reebok Classic",
        description: "Классические кроссовки для повседневной носки."
    },
    {
        price: 7999,
        imageUrl: img5,
        name: "New Balance 574",
        description: "Комфортные кроссовки для активного отдыха."
    },
    {
        price: 5499,
        imageUrl: img6,
        name: "ASICS Gel-Nimbus",
        description: "Кроссовки с отличной амортизацией для бега."
    },
    {
        price: 7599,
        imageUrl: img7,
        name: "Under Armour HOVR",
        description: "Современные кроссовки с отличной поддержкой."
    },
    {
        price: 4699,
        imageUrl: img8,
        name: "Vans Old Skool",
        description: "Классические кеды в уличном стиле."
    },
    {
        price: 8299,
        imageUrl: img9,
        name: "Saucony Triumph",
        description: "Кроссовки для долгих пробежек."
    },
    {
        price: 3999,
        imageUrl: img10,
        name: "Fila Disruptor",
        description: "Модные кроссовки в спортивном стиле."
    }
];

export const Products: React.FC = () => {
    return (
        <div>
            <h1>Кроссовки</h1>
            <div className="product-preview-container">
                {sneakers.map((sneaker, index) => (
                    <ProductPreview
                        key={index}
                        price={sneaker.price}
                        imageUrl={sneaker.imageUrl}
                        name={sneaker.name}
                        description={sneaker.description}
                    />
                ))}
            </div>
        </div>
    );
};