import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import PaletteText from "../Text/text.style";

const StyledStrokeButton = styled.View`
${props => props.fullWidth === true ?
        `width: 100%;` :
        `width: ${props.width || "auto"}`
    }
height: ${props => props.height || "56px"};
background: ${props => props.buttonColor || "#2B2A29"};
box-shadow: 0px 1px 8px rgba(109, 137, 211, 0.15);
border-radius: ${props => props.borderRadius || "10"}px;
align-items: center;
justify-content: center;
`

export default function StrokeButton({ buttonText, children, onPress, textColor, ...props }) {
    return (
        <TouchableOpacity style={{ width: "100%" }} onPress={onPress}>
            <StyledStrokeButton {...props}>
                <PaletteText color={textColor} >{buttonText}</PaletteText>
            </StyledStrokeButton>
        </TouchableOpacity>
    );
}