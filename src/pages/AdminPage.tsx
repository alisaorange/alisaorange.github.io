import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../app/providers/StoreProvider';
import { fetchCategories, createCategory } from './slice/categoriesSlice';
import Loader from "src/shared/components/Loader";
import CategoryList from "src/shared/components/CategoryList";
import './css/admin.css';

const AdminPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { categories, isLoading, error, successMessage } = useSelector((state: RootState) => state.categories);

    const [categoryName, setCategoryName] = useState('');
    const [productData, setProductData] = useState({
        name: '',
        photo: '',
        desc: '',
        oldPrice: '',
        price: '',
        categoryId: '',
    });
    const [productLoading, setProductLoading] = useState(false);
    const [productMessage, setProductMessage] = useState<string | null>(null);

    // Получение списка категорий при загрузке страницы
    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    // Обработчик создания категории
    const handleCreateCategory = () => {
        if (categoryName.trim()) {
            dispatch(createCategory({ name: categoryName }));
            setCategoryName(''); // Очистить поле ввода
        }
    };

    // Обработчик изменения данных товара
    const handleProductChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Обработчик создания товара
    const handleCreateProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        setProductLoading(true);
        setProductMessage(null);

        try {
            const response = await fetch('http://19429ba06ff2.vps.myjino.ru/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({
                    name: productData.name,
                    photo: productData.photo || undefined,
                    desc: productData.desc || undefined,
                    oldPrice: productData.oldPrice ? Number(productData.oldPrice) : undefined,
                    price: Number(productData.price),
                    // categoryId: productData.categoryId,
                    categoryId: '6787a9438e877ac8a9599bd1',
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Ошибка при создании товара');
            }

            setProductMessage('Товар успешно сохранен');
            setProductData({
                name: '',
                photo: '',
                desc: '',
                oldPrice: '',
                price: '',
                categoryId: '',
            });
        } catch (error: any) {
            setProductMessage(error.message);
        } finally {
            setProductLoading(false);
        }
    };

    return (
        <div>
            <h1>Admin Page</h1>

            {/* Список категорий */}
            <h2>Список категорий:</h2>
            {isLoading ? (
                <Loader />
            ) : error ? (
                <p style={{ color: 'red' }}>Ошибка: {error}</p>
            ) : (
                categories && <CategoryList categories={categories} />
            )}

            <div className="container">
                <div className="left">
                {/* Создание категории */}
                <h2>Создать категорию:</h2>
                <input
                    type="text"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    placeholder="Введите название категории"
                />
                <button onClick={handleCreateCategory} disabled={isLoading}>
                    Создать
                </button>
                </div>

                <div className="right">
                {/* Сообщения */}
                {isLoading && <Loader />}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}

                {/* Создание товара */}
                <h2>Создать товар:</h2>
                <form onSubmit={handleCreateProduct}>
                    <div>
                        <label htmlFor="name">Название:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={productData.name}
                            onChange={handleProductChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="photo">Фото (URL):</label>
                        <input
                            type="text"
                            id="photo"
                            name="photo"
                            value={productData.photo}
                            onChange={handleProductChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="desc">Описание:</label>
                        <textarea
                            id="desc"
                            name="desc"
                            value={productData.desc}
                            onChange={handleProductChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="oldPrice">Старая цена:</label>
                        <input
                            type="number"
                            id="oldPrice"
                            name="oldPrice"
                            value={productData.oldPrice}
                            onChange={handleProductChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Цена:</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={productData.price}
                            onChange={handleProductChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="categoryId">ID категории:</label>
                        <input
                            type="text"
                            id="categoryId"
                            name="categoryId"
                            value={productData.categoryId}
                            onChange={handleProductChange}
                            required
                        />
                    </div>
                    <button type="submit" disabled={productLoading}>
                        {productLoading ? <Loader /> : 'Создать'}
                    </button>
                </form>

                {productMessage && <p>{productMessage}</p>}
                </div>

            </div>

        </div>
    );
};

export default AdminPage;