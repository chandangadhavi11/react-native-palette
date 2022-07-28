import { View, Text, SafeAreaView, Image } from "react-native";
import styled from "styled-components";
import logo from "../../assets/logo_text_app.svg"
import { Box } from "../../ui/Box/box.ui";
import { ColumnFlexBox } from "../../ui/FlexBox/FlexBox";

const StyledPaletteLogo = styled.Image`
height: 84px;
width: 286px;
`

export default function PaletteLogo() {
    return (
        <SafeAreaView>
            <StyledPaletteLogo source={require('../../assets/logo_text_app.png')} />
        </SafeAreaView>
    );
}
