import { ComponentProps } from 'react'
import { TextInputContainer, TextInputField, TextInputPrefix } from './styles'

export interface TextInputProps extends ComponentProps<typeof TextInputField> {
    prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
    return (
        <TextInputContainer>
            {!!prefix && <TextInputPrefix>{prefix}</TextInputPrefix>}
            <TextInputField {...props} />
        </TextInputContainer>
    )
}

TextInput.displayName = "TextInput"