import { Meta, StoryFn } from '@storybook/vue3'

import Button from '/components/Button.vue'

export default {
  title: 'Primary',
  component: Button,
  argTypes: {
    disabled: {
      defaultValue: false,
      description: 'Disables the button',
      control: { type: 'boolean' },
    },
    label: {
      defaultValue: 'Button label',
      description: 'Button label',
      control: { type: 'text' },
    },
  }
} as Meta<typeof Button>

export const Primary: StoryFn<typeof Button> = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: '<Button v-bind="args" />',
})