import React from 'react';
import { Meta, Story } from '@storybook/react';
import {CartButton} from './CartButton';

// Дефолтные настройки для Storybook
export default {
    title: 'Components/CartButton',
    component: CartButton,
    argTypes: {
        count: {
            control: {
                type: 'number',
                min: 0,
            },
            defaultValue: 0,
        },
    },
} as Meta;

// Шаблон компонента для отображения разных состояний
const Template: Story<{ count: number }> = (args) => <CartButton {...args} />;

// Состояние кнопки "Добавить в корзину" (когда count равен 0)
export const AddToCart = Template.bind({});
AddToCart.args = {
    count: 0,
};

// Состояние инпута с кнопками "+" и "-" (когда count больше 0)
export const CartWithQuantity = Template.bind({});
CartWithQuantity.args = {
    count: 2,
};

