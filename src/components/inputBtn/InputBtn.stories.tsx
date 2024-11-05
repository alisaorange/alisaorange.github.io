import React from 'react';
import { Meta, Story } from '@storybook/react';
import { InputBtn, InputBtnProps } from './InputBtn';

const meta: Meta<typeof InputBtn> = {
    title: 'Components/InputBtn',
    component: InputBtn,
    argTypes: {
        initialText: {
            control: 'text',
            description: 'Начальный текст для ввода',
            defaultValue: 'Текст по умолчанию',
        },
    },
};

export default meta;

const Template: Story<InputBtnProps> = (args) => <InputBtn {...args} />;

export const Default = Template.bind({});
Default.args = {
    initialText: 'Текст по умолчанию',
};