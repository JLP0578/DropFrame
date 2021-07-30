import React from 'react';

import TechTree from '../components/TechTree';

export default {
  title: 'Molecules/TechTree',
  component: TechTree,
  argTypes: {
  },
};

const Template = (args) => <TechTree {...args} />;

export const Default = Template.bind({});
Default.args = {
};
