import { Meta, StoryObj } from '@storybook/react'
import { Box, Checkbox, CheckboxProps, Text } from '@torquimetro/react'

export default {
    title: 'Form/Checkbox',
    component: Checkbox,
    args: {},
    decorators: [
        (story) => {
            return (
                <Box as='label' css={{ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: '$2' }}>
                    {story()}
                    <Text size={'sm'}>Remember me</Text>
                </Box>
            )
        }
    ]
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
    args: {
        placeholder: 'Type your name'
    }
}
export const Disabled: StoryObj<CheckboxProps> = {
    args: {
        disabled: true
    }
}