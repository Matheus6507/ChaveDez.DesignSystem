import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Box = styled('div', {
    padding: '$4',
    borderRadius: '$md',
    backgroundColor: '$gray200',
    border: 'none',
})

export interface BoxProps extends ComponentProps<typeof Box> {
    as?: ElementType
}