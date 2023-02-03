import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Button = styled('button', {
    all: 'unset',
    borderRadius: '$sm',
    fontSize: '$sm',
    fontWeight: '$medium',
    fontFamily: '$default',
    textAlign: 'center',
    minWidth: 120,
    boxSizing: 'border-box',
    padding: '0 $4',
    transition: '0.15s',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',

    cursor: 'pointer',

    svg: {
        width: '$4',
        height: '$4'
    },

    '&:disabled': {
        opacity: '0.6',
        cursor: "not-allowed"
    },

    variants: {
        variant: {
            primary: {
                color: '$gray100',
                backgroundColor: "$torquimetro500",

                '&:not(:disabled):hover': {
                    backgroundColor: "$torquimetro600"
                },
            },
            secondary: {
                color: '$torquimetro500',
                border: '2px solid $torquimetro500',

                '&:not(:disabled):hover': {
                    backgroundColor: "$torquimetro500",
                    color: "$gray100"
                },
            },
            tertiary: {
                color: '$gray900',

                '&:not(:disabled):hover': {
                    color: "$torquimetro500"
                },
            }
        },

        size: {
            sm: {
                height: 38
            },
            md: {
                height: 46
            }
        }
    },

    defaultVariants: {
        variant: "primary",
        size: "md"
    }
})

export interface ButtonProps extends ComponentProps<typeof Button>{
    as?: ElementType
}