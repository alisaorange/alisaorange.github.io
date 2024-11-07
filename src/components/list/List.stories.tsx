import React from 'react';
import { List } from './List';
import { sneakersList } from 'src/shared/sneakers_list';

export default {
    title: 'Components/List',
    component: List,
};

const Template = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
    elements: sneakersList.slice(0, 10),
};

export const WithMoreSneakers = Template.bind({});
WithMoreSneakers.args = {
    elements: sneakersList.slice(0, 30),
};