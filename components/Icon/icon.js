import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Box } from "../../ui/Box/box.ui";
import { RowFlexBox } from "../../ui/FlexBox/FlexBox";
import PaletteText from "../Text/text.style";

const IconContainer = styled.Image`
    width: ${props => props.size || "auto"}px;
    height: ${props => props.size || "auto"}px;
`

export default function Icon({ onPress, size, source, ...props }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <RowFlexBox>
                <IconContainer size={size} source={source} />
            </RowFlexBox>
        </TouchableOpacity>

    );
}