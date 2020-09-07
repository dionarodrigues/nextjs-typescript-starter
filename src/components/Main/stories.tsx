import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'NextJS boilerplate',
    description:
      'A simple project starter to work with TypeScript, React, NextJS and Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Basic Title',
  description: 'Basic Description'
}

export const Default: Story = (args) => <Main {...args} />
