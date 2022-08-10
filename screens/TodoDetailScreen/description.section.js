import { Text } from "react-native";
import styled from "styled-components";
import Icon from "../../components/Icon/icon";
import IconWithText from "../../components/Icon/iconText";
import PaletteText from "../../components/Text/text.style";
import { Box, FullWidthBox } from "../../ui/Box/box.ui";

const DescriptionContainer = styled(Box)`
width: 100%;
height: auto;
background: #FFFFFF;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
padding-bottom: 16px;
`

export default function DescriptionSection() {
    return (
        <FullWidthBox>
            <DescriptionContainer>
                <Box marginTop={8} marginLeft={16}>
                    <PaletteText size={12}>DESCRIPTION</PaletteText>
                </Box>
                <FullWidthBox horizontalPadding={16} marginTop={5}>
                    <PaletteText size={14}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar interdum ullamcorper. Integer tempus molestie facilisis. Fusce nibh diam, feugiat et tortor non, interdum placerat lectus...</PaletteText>
                </FullWidthBox>

                <FullWidthBox centerItems={true} marginTop={10}>
                    <Icon size={20} source={require("../../assets/down_icon.png")} />
                </FullWidthBox>



            </DescriptionContainer>
        </FullWidthBox>
    )
}