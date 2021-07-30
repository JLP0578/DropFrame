import React from 'react';
import { Button } from '@components/Button/Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variante: '',
  id: 'id',
  value: 'Cliquer ici',
};

export const Valid = Template.bind({});
Valid.args = {
  variante: 'default',
  id: 'id',
  value: 'Valider',
};

export const Remove = Template.bind({});
Remove.args = {
  variante: 'remove',
  id: 'id',
  value: 'Remove',
};

