import React from 'react';
import { InputText } from '@components/InputText/InputText';

export default {
  title: 'Atoms/InputText',
  component: InputText,
  argTypes: {
  },
};

const Template = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
  variante: '',
  id: 'id',
  placeholder: 'Text ici',
};

