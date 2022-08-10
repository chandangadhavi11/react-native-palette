import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Box } from "../../ui/Box/box.ui";
import { RowFlexBox } from "../../ui/FlexBox/FlexBox";
import PaletteText from "../Text/text.style";

const IconContainer = styled.Image`
    width: ${props => props.size || "auto"}px;
    height: ${props => props.size || "auto"}px;
    background-color: ${props => props.backgroundColor || "transparent"};
`

export default function IconWithText({ onPress, source, text, textColor, ...props }) {
    return (
        <RowFlexBox>
            <IconContainer size={24} source={source} />
            <Box marginLeft={10}>
                <PaletteText color={textColor} >{text}</PaletteText>
            </Box>
        </RowFlexBox>
    );
}