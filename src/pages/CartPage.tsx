import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import './css/cart.css';

interface CartItemData {
    id: string;
    photo: string;
    desc: string;
    price: number;
}

const Cart: React.FC = () => {
    const [items, setItems] = useState<CartItemData[]>([]);
    const [discount, setDiscount] = useState<number>(0);

    // Загрузка товаров из localStorage
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setItems(JSON.parse(storedCart));
        }
    }, []);

    // Удаление товара из корзины
    const handleRemove = (id: string) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
        localStorage.setItem('cart', JSON.stringify(updatedItems));
    };

    const totalPrice = items.reduce((total, item) => total + item.price, 0);
    const discountedPrice = totalPrice - (totalPrice * discount) / 100;

    return (
        <div className="cart">
            <div className="cart-items">
                {items.length === 0 ? (
                    <p>Корзина пуста</p>
                ) : (
                    items.map(item => (
                        <CartItem
                            key={item.id}
                            imageUrl={item.photo}
                            description={item.desc}
                            price={item.price}
                            onRemove={() => handleRemove(item.id)}
                        />
                    ))
                )}
            </div>
            <div className="cart-summary">
                <h2>Итоги</h2>
                <p>Количество товаров: {items.length}</p>
                <p>Скидка: {discount}%</p>
                <p>Цена всего: {totalPrice}₽</p>
                <p>Итоговая цена: {discountedPrice.toFixed(2)}₽</p>
                <button onClick={() => setDiscount(10)}>Применить скидку 10%</button>
            </div>
        </div>
    );
};

export default Cart;