import React, { useState } from 'react';
import { Logo } from '../logo/Logo';
import './header.css';

export const Header: React.FC = () => {

   return (
        <header className="header">
            <Logo />
            <nav className="nav">
                <span className="nav-links">
                    <a href="#home">Главная</a>
                    <a href="#about">О нас</a>
                    <a href="#contact">Контакты</a>
                </span>
            </nav>
        </header>
    );
};
