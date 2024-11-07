import React from 'react';
import { useTheme } from './ThemeContext';
import { useTranslation } from 'react-i18next';
import ToggleButton from "src/shared/ui/toggleButton/ToggleButton";

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();

    const setLightTheme = () => {
        if (theme === 'dark') toggleTheme();
    };

    const setDarkTheme = () => {
        if (theme === 'light') toggleTheme();
    };

    return (
        <ToggleButton
            leftLabel={t('theme_white')}
            rightLabel={t('theme_black')}
            onClickLeft={setLightTheme}
            onClickRight={setDarkTheme}
            isLeftActive={theme === 'light'}
        />
    );
};