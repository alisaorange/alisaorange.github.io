//Компонент списка товаров
import ProductPreview from "../productPreview/ProductPreview";
import React, { useState } from "react";
import './products.css';
import { sneakers } from '../../shared/sneakers';
import {Button} from "src/shared/ui/button/Button";

export const Products: React.FC = () => {

    const [visibleCount, setVisibleCount] = useState(6); // Начальное количество товаров

    //Сделать динамическое добавление товаров
    const showMore = () => {
        setVisibleCount((prevCount) => prevCount + 6); // Увеличиваем количество видимых товаров
    };

    return (
        <div>
            <h1>Кроссовки</h1>
            <div className="product-preview-container">
                {sneakers.slice(0, visibleCount).map((sneaker, index) => (
                    <ProductPreview
                        key={index}
                        price={sneaker.price}
                        imageUrl={sneaker.imageUrl}
                        name={sneaker.name}
                        description={sneaker.description}
                    />
                ))}
            </div>
            {visibleCount < sneakers.length && ( // Показываем кнопку только если есть скрытые товары
                <div className="btn-center">
                    <Button label={'Показать еще'} onClick={showMore} />
                </div>
            )}
        </div>
    );
};