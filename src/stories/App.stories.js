import React from 'react';

import App from '@components/App';

export default {
  title: 'Molecules/App',
  component: App,
  argTypes: {
  },
};

const Template = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {
};
