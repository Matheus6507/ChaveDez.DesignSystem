import * as Checkbox from '@radix-ui/react-checkbox';
import { styled } from '../../styles';

export const CheckboxContainer = styled(Checkbox.Root, {
    all: 'unset',
    width: '$6',
    height: '$6',
    backgroundColor: '$gray100',
    borderRadius: '$xs',
    lineHeight: 0,
    cursor: 'pointer',
    overflow: 'hidden',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid $gray100',
    transition: '0.15s',

    '&:hover': {
        border: '2px solid $torquimetro500',
    },

    '&[data-state="checked"]': {
        backgroundColor: '$torquimetro500',
        border: '2px solid $torquimetro500',
    }
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
    color: '$gray100',
    width: '$4',
    height: '$4'
})