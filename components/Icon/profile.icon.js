import { TouchableOpacity } from "react-native";
import styled from "styled-components";

const IconContainer = styled.Image`
    width: ${props => props.size || "auto"}px;
    height: ${props => props.size || "auto"}px;
    background: #D9D9D9;
    border-radius: 200px;
`

export default function ProfileIcon({ onPress, size, ...props }) {
    return (
        <TouchableOpacity style={{ width: "100%" }} onPress={onPress}>
            <IconContainer size={size || 100} />
        </TouchableOpacity>
    );
}