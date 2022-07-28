import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Box } from "../../ui/Box/box.ui";
import { RowFlexBox } from "../../ui/FlexBox/FlexBox";
import PaletteText from "../Text/text.style";

const IconContainer = styled.Image`
    width: ${props => props.size || "auto"}px;
    height: ${props => props.size || "auto"}px;
    background: #D9D9D9;
`

export default function IconWithText({ onPress, source, text, ...props }) {
    return (
        <RowFlexBox>
            <IconContainer size={24} source={source} />
            <Box marginLeft={10}>
                <PaletteText color="#929292BF">{text}</PaletteText>

            </Box>
        </RowFlexBox>
    );
}