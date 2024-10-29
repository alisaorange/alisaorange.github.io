import React, {useState} from 'react';
import './productPreview.css';
import {CartButton} from '../cartButton/CartButton';

interface ProductPreviewProps {
    price: number;
    imageUrl: string;
    name: string;
    description: string;
}

const ProductPreview: React.FC<ProductPreviewProps> = ({ price, imageUrl, name, description }) => {

    const [count, setCount] = useState(0);
    const handleAddToCart = () => setCount(1);
    const handleIncrease = () => setCount(prevCount => prevCount + 1);
    const handleDecrease = () => setCount(prevCount => Math.max(prevCount - 1, 0)); // функция принимает два значения и возвращает большее из них

    return (
        <div className="product-preview">
            <img src={imageUrl} alt={name} className="product-image" />
            <h2 className="product-name">{name}</h2>
            <p className="product-description">{description.length > 100 ? `${description.slice(0, 100)}...` : description}</p>
            <p className="product-price">{`₽${price.toFixed(2)}`}</p>

            <span className="cart-button-container">
                <CartButton
                    count={count}
                    onAdd={handleAddToCart}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                />
            </span>
        </div>
    );
};

export default ProductPreview;
