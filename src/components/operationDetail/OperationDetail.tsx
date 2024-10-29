import React, {useState} from 'react';
import './operationDetail.css';
import {CartButton} from "../cartButton/CartButton";

interface OperationDetailProps {
    price: number;
    imageUrl: string;
    categoryName: string;
    name: string;
    description: string;
}

const OperationDetail: React.FC<OperationDetailProps> = ({ price, imageUrl, categoryName, name, description }) => {

    const [count, setCount] = useState(0);
    const handleAddToCart = () => setCount(1);
    const handleIncrease = () => setCount(prevCount => prevCount + 1);
    const handleDecrease = () => setCount(prevCount => Math.max(prevCount - 1, 0)); // функция принимает два значения и возвращает большее из них

    return (
        <div className="operation-detail">
            <img src={imageUrl} alt={name} className="operation-image" />
            <h2 className="operation-name">{name}</h2>
            <h3 className="operation-category">{categoryName}</h3>
            <p className="operation-description">{description}</p>
            <p className="operation-price">{`₽${price.toFixed(2)}`}</p>

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

export default OperationDetail;
