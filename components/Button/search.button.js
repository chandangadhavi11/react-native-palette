import { TouchableOpacity } from "react-native";
import styled from "styled-components"
import Icon from "../Icon/icon";

const SearchButtonContainer = styled.View`
width: 38px;
height: 38px;

background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.14);
border-radius: 100px;

justify-content: center;
align-items: center;
`


export default function SearchButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <SearchButtonContainer>
                <Icon source={require('../../assets/search_icon.png')}
                    size={16} />
            </SearchButtonContainer>
        </TouchableOpacity>

    );
}