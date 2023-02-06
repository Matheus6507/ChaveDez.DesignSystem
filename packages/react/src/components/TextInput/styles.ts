import { styled } from "../../styles";

export const TextInputContainer = styled('div', {
    background: '$gray50',
    padding: '$3 $4',
    borderRadius: '$sm',
    boxSizing: 'border-box',
    border: '2px solid $gray50',
    display: 'flex',
    alignItems: 'baseline',
    transition: '0.15s',

    '&:has(input:focus)': {
        borderColor: "$torquimetro900",
    },

    '&:has(input:disabled)': {
        opacity: 0.6,
        cursor: 'not-allowed'
    }
})

export const TextInputPrefix = styled('span', {
    fontFamily: '$default',
    fontSize: '$sm',
    color: "$gray400",
    fontWeight: '$regular'
})

export const TextInputField = styled('input', {
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$gray900',
    fontWeight: '$regular',
    background: 'transparent',
    border: 0,
    width: '100%',

    '&:focus': {
        outline: 0,
    },

    '&:disabled': {
        cursor: 'not-allowed'
    },

    '&:placeholder': {
        color: '$gray500'
    }
})