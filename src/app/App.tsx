import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Products } from '../pages/products/Products';
import Profile from '../pages/profile/ProfileScreen';
import { I18nextProvider } from 'react-i18next';
import i18n from '../shared/i18n';
import { ThemeProvider } from '../components/header/ThemeContext';

function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <ThemeProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Products />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </Layout>
            </ThemeProvider>
        </I18nextProvider>
    );
}

export default App;