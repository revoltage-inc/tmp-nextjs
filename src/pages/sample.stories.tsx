import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { Sample } from './sample'

export default {
  title: 'pages/sample',
  component: Sample,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Sample>

export const LoggedIn: StoryObj<typeof Sample> = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const loginButton = await canvas.getByRole('button', { name: /Log in/i })
    await userEvent.click(loginButton)
  },
}

export const LoggedOut: StoryObj<typeof Sample> = {
  args: {},
}
