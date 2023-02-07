import { ComponentProps } from "react";
import { styled } from "../styles";

export const TextArea = styled('textarea', {
    background: '$gray50',
    padding: '$3 $4',
    borderRadius: '$sm',
    boxSizing: 'border-box',
    border: '2px solid $gray50',

    fontFamily: '$default',
    fontSize: '$sm',
    color: '$gray900',
    fontWeight: '$regular',
    resize: 'vertical',
    minHeight: 80,

    transition: '0.15s',

    '&:focus': {
        outline: 0,
        borderColor: "$torquimetro900",
    },

    '&:disabled': {
        opacity: 0.6,
        cursor: "not-allowed"
    },

    '&:placeholder': {
        color: '$gray400'
    }
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = "TextArea"