import React from 'react';

import SelectWarframe from '@components/SelectWarframe';

export default {
  title: 'Molecules/SelectWarframe',
  component: SelectWarframe,
  argTypes: {
  },
};

const Template = (args) => <SelectWarframe {...args} />;

export const Default = Template.bind({});
Default.args = {
};
