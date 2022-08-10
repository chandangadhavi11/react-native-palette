import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";

const Icon = styled.Image`
    width: ${props => props.size || "auto"}px;
    height: ${props => props.size || "auto"}px;

    margin-right: ${props => props.marginRight || "0"}px;
    margin-left: ${props => props.marginLeft || "0"}px;
    margin-top: ${props => props.marginTop || "0"}px;
    margin-bottom: ${props => props.marginBottom || "0"}px;
`

export default function BackButton({ onPress, ...props }) {
    return (
        <TouchableOpacity style={{ width: "100%" }} onPress={onPress}>
            <Icon source={require('../../assets/back_icon.png')} size={24} {...props} />
        </TouchableOpacity>
    );
}