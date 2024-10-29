import React from 'react';
import './сartButton.css';

interface CartButtonProps {
    count: number;
    onAdd: () => void;
    onIncrease: () => void;
    onDecrease: () => void;
}

export const CartButton: React.FC<CartButtonProps> = ({ count, onAdd, onIncrease, onDecrease }) => {
    return (
        <div className="cart-button">
            {count === 0 ? (
                <button className="add-to-cart" onClick={onAdd}>
                    В корзину
                </button>
            ) : (
                <div className="quantity-control">
                    <button className="decrease" onClick={onDecrease}>-</button>
                    <input className="quantity-input" type="text" value={count} readOnly />
                    <button className="increase" onClick={onIncrease}>+</button>
                </div>
            )}
        </div>
    );
};