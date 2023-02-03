import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
    fontFamily: '$default',
    backgroundColor: '$torquimetro500',
    borderRadius: '$md',
    border: 0,
    fontWeight: '$bold',
    color: '$gray50',
    transition: '0.15s',
    
    '&:hover': {
        backgroundColor: '$torquimetro600'
    },
    
    variants: {
        size: {
            small: {
                fontSize: '$sm',
                padding: '$2 $4'
            },
            big: {
                fontSize: '$md',
                padding: '$3 $6'
            }
        }
    },
    
    defaultVariants: {
        size: 'small'
    }
})

export type ButtonProps = ComponentProps<typeof Button>