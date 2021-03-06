import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { RichText, RichTextProps } from '../../src';

export default {
  title: 'RichText',
  component: RichText,
} as Meta;

const Template: Story<RichTextProps> = (args) => <RichText {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: '<h1>rich</h1>',
};

export const Anchor = () => {
  const content = `
    <div>
      <p>Link to <a href="https://chatui.io/">ChatUI1</a> (no target)</p>
      <p>Link to <a href="//chatui.io/" target="_self">ChatUI2</a> (target="_self")</p>
      <p>Link to <a href="http://chatui.io/" target="_blank">ChatUI2</a> (target="_blank)</p>
      <p>Link to <a href="https://chatui.io/" target="_parent">ChatUI2</a> (target="_parent)</p>
      <p>Link to <a href="https://chatui.io/" target="_top">ChatUI2</a> (target="_top)</p>
      <p>Open <a href="alipay://home">Alipay</a> App</p>
    </div>
  `;
  return <RichText content={content} />;
};
