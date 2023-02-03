import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@torquimetro/react'

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        children: 'Loren ipsum'
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong',
        as: 'strong'
    }
}