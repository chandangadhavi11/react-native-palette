import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import PaletteText from "../Text/text.style";

const StyledFillButton = styled.View`
${props => props.fullWidth === true ?
        `width: 100%;` :
        `width: ${props.width || "auto"}`
    }
height: ${props => props.height || "56px"};
background: #FFFFFF;
border: 3px solid #2B2A29;
box-shadow: 0px 1px 8px rgba(109, 137, 211, 0.15);
border-radius: 10px;
align-items: center;
justify-content: center;
`

export default function FillButton({ buttonText, children, onPress, ...props }) {
    return (
        <TouchableOpacity style={{ width: "100%" }} onPress={onPress}>
            <StyledFillButton {...props}>
                <PaletteText>{buttonText}</PaletteText>
            </StyledFillButton>
        </TouchableOpacity>
    );
}