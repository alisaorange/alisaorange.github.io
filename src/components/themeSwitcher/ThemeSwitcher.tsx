// ThemeSwitcher.tsx
import React from 'react';
import { useTheme } from '../header/ThemeProvider';

export const ThemeSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'dark' : 'light'} theme
        </button>
    );
};
