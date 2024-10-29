import React from 'react';
import { Meta, Story } from '@storybook/react';
import {CartButton} from './CartButton';

export default {
    title: 'Components/CartButton',
    component: CartButton,
    argTypes: {
        count: {
            control: 'number',
            defaultValue: 0,
        },
    },
} as Meta;

const Template: Story<{ count: number; onAdd: () => void; onIncrease: () => void; onDecrease: () => void }> = (args) => (
    <CartButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
    count: 0,
    onAdd: () => console.log('Добавлено в корзину'),
    onIncrease: () => console.log('Увеличено количество'),
    onDecrease: () => console.log('Уменьшено количество'),
};
