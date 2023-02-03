import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@torquimetro/react'

export default {
    title: 'Data display/Avatar',
    component: Avatar,
    args: {
        src: 'https://github.com/matheus6507.png',
        alt: 'Matheus Afonsos'
    }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined
    }
}