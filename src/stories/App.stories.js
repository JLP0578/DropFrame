import React from 'react';

import App from '@components/App';

export default {
  title: 'Template/App',
  component: App,
  argTypes: {
  },
};

const Template = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {
};
