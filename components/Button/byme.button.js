import { TouchableOpacity } from "react-native";
import styled from "styled-components"

const ByMeButtonContainer = styled.View`
width: 100px;
height: 32px;

background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
border-radius: 10px;
justify-content: center;
align-items: center;
`

const ByMeButtonText = styled.Text`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
display: flex;
align-items: center;
text-align: center;

color: #F86D70;

`

export default function ByMeButton() {
    return (
        <TouchableOpacity>
            <ByMeButtonContainer>
                <ByMeButtonText>By Me</ByMeButtonText>
            </ByMeButtonContainer>
        </TouchableOpacity>

    );
}