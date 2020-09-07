import { withKnobs, text } from '@storybook/addon-knobs'
import Main from './'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
}

export const Default = () => (
  <Main
    title={text('Title', 'NextJS boilerplate')}
    description={text(
      'Description',
      'A simple project starter to work with TypeScript, React, NextJS and Styled Components'
    )}
  />
)
