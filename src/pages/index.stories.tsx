import { StoryObj, Meta } from '@storybook/react'
import { Top } from './index'

export default {
  title: 'pages/top',
  component: Top,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Top>

export const Default: StoryObj<typeof Top> = {
  args: {},
}
