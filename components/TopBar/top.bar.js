import { Text } from "react-native";
import styled from "styled-components";
import { Dimensions } from 'react-native';


const TopBarContainer = styled.View`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

const ItemContainer = styled.View`
width: ${Dimensions.get('window').width / 3}px;
height: 90px;
justify-content: center;
align-items: center;
`

const TopBarText = styled.Text`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
/* identical to box height */


color: rgba(0, 0, 0, 0.75);
`


export default function PaletteTopBar({ renderLeft, renderRight, topBarTitleText }) {
    return (
        <TopBarContainer>
            <ItemContainer>
                {renderLeft && renderLeft()}
            </ItemContainer>
            <ItemContainer>
                <TopBarText>{topBarTitleText}</TopBarText>
            </ItemContainer>
            <ItemContainer>
                {renderRight && renderRight()}
            </ItemContainer>
        </TopBarContainer>
    );
}
