import { Story, Meta } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { Page } from './Page'

export default {
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Page>

export const LoggedIn: Story<typeof Page> = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const loginButton = await canvas.getByRole('button', { name: /Log in/i })
    await userEvent.click(loginButton)
  },
}

export const LoggedOut: Story<typeof Page> = {
  args: {},
}
