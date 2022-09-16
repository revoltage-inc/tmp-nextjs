import type { Story, Meta } from '@storybook/react'
import { Header } from './Header'

export default {
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Header>

export const LoggedIn: Story<typeof Header> = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
}

export const LoggedOut: Story<typeof Header> = {
  args: {},
}
