import React from 'react';
import { Meta, Story } from '@storybook/react';
import OperationDetail from './OperationDetail';
import img1 from '../../shared/images/image1.jpg';
export default {
    title: 'Components/OperationDetail',
    component: OperationDetail,
    argTypes: {
        price: {
            control: 'number',
            defaultValue: 5000,
        },
        imageUrl: {
            control: 'text',
            defaultValue: img1,
        },
        categoryName: {
            control: 'text',
            defaultValue: 'Покупка',
        },
        name: {
            control: 'text',
            defaultValue: 'Кроссовки Nike Air Max',
        },
        description: {
            control: 'text',
            defaultValue: 'Легкие и удобные кроссовки для бега.',
        },
    },
} as Meta;

const Template: Story<{
    price: number;
    imageUrl: string;
    categoryName: string;
    name: string;
    description: string;
}> = (args) => <OperationDetail {...args} />;

export const Default = Template.bind({});
Default.args = {
    price: 5000,
    categoryName: 'Покупка',
    imageUrl: img1,
    name: 'Кроссовки Nike Air Max',
    description: 'Легкие и удобные кроссовки для бега.',
};