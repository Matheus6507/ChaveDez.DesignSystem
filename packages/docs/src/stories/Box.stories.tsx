import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@torquimetro/react'

export default {
    title: 'Surfaces/Box',
    component: Box,
    args: {
        children: (
            <>
                <Text>Testando o elemento Box</Text>
            </>
        )
    },
    argTypes: {
        onClick: {
            action: 'click'
        }
    }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}