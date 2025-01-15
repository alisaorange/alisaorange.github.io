import React from 'react';
import './css/productsList.css';

interface Product {
    id: string;
    name: string;
    price: number;
    photo: string;
}

interface ProductsListProps {
    products: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
    // Функция для добавления товара в корзину
    const addToCart = (product: Product) => {
        const storedCart = localStorage.getItem('cart');
        const cartItems = storedCart ? JSON.parse(storedCart) : [];
        const updatedCart = [...cartItems, product];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        alert(`${product.name} добавлен в корзину!`);
    };

    return (
        <div className="products-list">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.photo} alt={product.name} className="product-image" />
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">{product.price} ₽</p>
                    <button
                        onClick={() => addToCart(product)}
                        className="add-to-cart-btn"
                    >
                        Добавить
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductsList;