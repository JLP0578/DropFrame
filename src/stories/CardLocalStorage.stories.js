import React from 'react';
import { CardLocalStorage } from '@components/CardLocalStorage/CardLocalStorage';

export default {
  title: 'Molecules/CardLocalStorage',
  component: CardLocalStorage,
  argTypes: {
  },
};

const Template = (args) => <CardLocalStorage {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    "id": 1,
    "properties": {
        "name": "Loki",
        "part": "System",
        "image": "systems.png"
    }
  }
};
