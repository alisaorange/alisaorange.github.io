import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from "src/app/providers/StoreProvider";
import Pagination from "src/shared/components/Pagination";
import ProductsList from "src/shared/components/ProductsList";
import Loader from "src/shared/components/Loader";

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const { products, isLoading, error, totalPages, currentPage } = useSelector((state: RootState) => state.products);
    const [page, setPage] = useState(currentPage);

    useEffect(() => {
        dispatch({ type: 'products/startProductsLoading', payload: { pageNumber: page, pageSize: 10 } });
    }, [dispatch, page]);

    const handlePageChange = (newPage: number) => {
        console.log('Page changed to', newPage);
        setPage(newPage);
    };

    if (isLoading) {
        // return <p>Loading...</p>;
        return <Loader />;;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Товары</h1>
            <ProductsList products={products} />
            {/*<div className="products-list">*/}
            {/*    {products.map((product) => (*/}
            {/*        <div key={product.id} className="product-card">*/}
            {/*            <img src={product.photo} alt={product.name} className="product-image" />*/}
            {/*            <h3 className="product-name">{product.name}</h3>*/}
            {/*            <p className="product-price">${product.price}</p>*/}
            {/*            <button className="add-to-cart-btn">Добавить</button>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            {/*<Pagination*/}
            {/*    currentPage={currentPage}*/}
            {/*    totalPages={totalPages}*/}
            {/*    onPageChange={(page) => {*/}
            {/*        // dispatch(setProducts({ products: [], totalPages, currentPage: page }));*/}
            {/*        dispatch(setProducts({ pageNumber: page, pageSize: 10 }));*/}
            {/*    }}*/}
            {/*/>*/}
        </div>
    );
};

export default HomePage;