import React from 'react';
import { useTranslation } from 'react-i18next';
import ToggleButton from "src/shared/ui/toggleButton/ToggleButton";

export const LanguageToggle: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguageToEnglish = () => {
        i18n.changeLanguage('en');
    };

    const changeLanguageToRussian = () => {
        i18n.changeLanguage('ru');
    };

    return (
        <ToggleButton
            leftLabel="EN"
            rightLabel="RU"
            onClickLeft={changeLanguageToEnglish}
            onClickRight={changeLanguageToRussian}
            isLeftActive={i18n.language === 'en'}
        />
    );
};

export default LanguageToggle;
