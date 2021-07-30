import React from 'react';

import Button from '@components/Button/Button';

export default {
  title: 'Atomes/Button',
  component: Button,
  argTypes: {
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
};
// export const Valid = Template.bind({});
// Valid.args = {
//   variante: "valid",
// };
// export const Remove = Template.bind({});
// Remove.args = {
//   variante: "remove",
// };
