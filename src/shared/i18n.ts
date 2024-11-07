import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            home: "Home",
            about: "About",
            contacts: "Contacts",
            theme_black: "Theme black",
            theme_white: "Theme white",
        },
    },
    ru: {
        translation: {
            home: "Главная",
            about: "О нас",
            contacts: "Контакты",
            theme_black: "Темная тема",
            theme_white: "Светлая тема",
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'ru', // Язык по умолчанию
    fallbackLng: 'ru',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
