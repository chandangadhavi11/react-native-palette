import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";

const Icon = styled.Image`
    width: ${props => props.size || "auto"}px;
    height: ${props => props.size || "auto"}px;
`

export default function LogOutButton({ onPress, ...props }) {
    return (
        <TouchableOpacity style={{ width: "100%" }} onPress={onPress}>
            <Icon source={require('../../assets/logout_icon.png')} size={30} />
        </TouchableOpacity>
    );
}