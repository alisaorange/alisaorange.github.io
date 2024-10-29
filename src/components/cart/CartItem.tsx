import React from 'react';
import './cartItem.css';

interface CartItemProps {
    imageUrl: string;
    description: string;
    price: number;
    onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ imageUrl, description, price, onRemove }) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt={description} className="cart-item-image" />
            <div className="cart-item-details">
                <p className="cart-item-description">{description}</p>
                <p className="cart-item-price">{price}₽</p>
            </div>
            <button className="cart-item-remove-button" onClick={onRemove}>
                Удалить
            </button>
        </div>
    );
};

export default CartItem;
