import styled from "styled-components"
import { Box } from "../../ui/Box/box.ui";

const StyledTextInput = styled.TextInput`
    width: 100%;
    height: 58px;
    background: #FFFFFF;
    box-shadow: 0px 1px 8px rgba(109, 137, 211, 0.15);
    border-radius: 10px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;

    padding-left: 16px;

    ${props => props.horizontalMargin &&
        `margin-right: ${props.horizontalMargin};
        margin-left: ${props.horizontalMargin};`
    }
`

export default function PaletteInputText({ placeholder, onChangeText, value }) {
    return (
        <StyledTextInput
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
        />
    );
}
