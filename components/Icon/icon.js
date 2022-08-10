import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Box } from "../../ui/Box/box.ui";
import { RowFlexBox } from "../../ui/FlexBox/FlexBox";
import PaletteText from "../Text/text.style";

const IconContainer = styled.Image`
    width: ${props => props.size || "auto"}px;
    height: ${props => props.size || "auto"}px;

    margin-right: ${props => props.marginRight || 0}px;
    margin-left: ${props => props.marginLeft || 0}px;
    margin-top: ${props => props.marginTop || 0}px;
    margin-bottom: ${props => props.marginBottom || 0}px;
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