import type { Story, Meta } from '@storybook/react'
import { Button } from './Button'

export default {
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Button>

export const Primary: Story<typeof Button> = {
  args: {
    primary: true,
    label: 'Button',
  },
}

export const Secondary: Story<typeof Button> = {
  args: {
    label: 'Button',
  },
}

export const Large: Story<typeof Button> = {
  args: {
    size: 'large',
    label: 'Button',
  },
}

export const Small: Story<typeof Button> = {
  args: {
    size: 'small',
    label: 'Button',
  },
}
