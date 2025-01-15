import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import AdminPage from '../../pages/AdminPage';
import RegisterPage from '../../pages/RegisterPage';
import ProfilePage from '../../pages/ProfilePage';
import CartPage from '../../pages/CartPage';
import ProtectedRoute from './ProtectedRoute';
import {useSelector} from "react-redux";
import {RootState} from "src/app/providers/StoreProvider";

const AppRouter: React.FC = () => {
    // const role = useSelector((state: RootState) => state.auth.role);
    const role = localStorage.getItem('role');

    return (
        <Routes>
            {/* Главная страница */}
            <Route path="/" element={<HomePage />} />

            {/* Страница регистрации */}
            <Route path="/register" element={<RegisterPage />} />

            {/* Страница профиля, доступна только авторизованным пользователям */}
            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <ProfilePage />
                    </ProtectedRoute>
                }
            />

            {role == 'admin' ? (
                    <Route path="/admin" element={<AdminPage />} />
            ) : null}

            {/* Страница корзины */}
            <Route path="/cart" element={<CartPage />} />

            {/* Если маршрут не найден, редиректим на главную страницу */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRouter;