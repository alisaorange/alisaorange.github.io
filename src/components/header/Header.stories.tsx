import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Header } from './Header';
import i18n from '../../i18n';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from './ThemeContext';

export default {
    title: 'Components/Header',
    component: Header,
    argTypes: {
        language: {
            control: { type: 'select', options: ['en', 'ru'] },
            description: 'Language of the application',
        },
    },
} as Meta;

const Template: Story<{ language: string }> = ({ language }) => {
    i18n.changeLanguage(language);

    return (
        <I18nextProvider i18n={i18n}>
            <ThemeProvider>
                <Header />
            </ThemeProvider>
        </I18nextProvider>
    );
};

export const Default = Template.bind({});
Default.args = {
    language: 'ru',
};