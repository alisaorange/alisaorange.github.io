import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeProvider } from '../header/ThemeProvider';
import './themeSwitcher.css';

export default {
    title: 'Components/ThemeSwitcher',
    component: ThemeSwitcher,
    decorators: [
        (Story) => (
            <ThemeProvider>
                <Story />
            </ThemeProvider>
        ),
    ],
} as Meta;

const Template: Story = () => <ThemeSwitcher />;

export const Default = Template.bind({});