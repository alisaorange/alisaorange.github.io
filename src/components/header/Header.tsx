import React, { useState } from 'react';
import { Logo } from '../logo/Logo';
import './header.css';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {

   const { t } = useTranslation();

   return (
        <header className="header">
            <Logo />
            <ThemeToggle />
            <LanguageToggle />
            <nav className="nav">
                <span className="nav-links">
                    <a href="#home">{t('home')}</a>
                    <a href="#about">{t('about')}</a>
                    <a href="#contact">{t('contacts')}</a>
                </span>
            </nav>
        </header>
    );
};
