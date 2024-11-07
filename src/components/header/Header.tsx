import React, { useState } from 'react';
import { Logo } from '../logo/Logo';
import './header.css';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useTranslation } from 'react-i18next';
import NavBar from "src/shared/navBar/NavBar";

export const Header: React.FC = () => {

    const { t } = useTranslation();

    const links = [
        { label: t('home'), href: '#home' },
        { label: t('about'), href: '#about' },
        { label: t('contacts'), href: '#contact' },
    ];

   return (
        <header className="header">
            <Logo />
            <ThemeToggle />
            <LanguageToggle />
            <NavBar links={links} />
        </header>
    );
};
