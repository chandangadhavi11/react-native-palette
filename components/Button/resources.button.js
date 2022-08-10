import { Text } from "react-native";
import styled from "styled-components"
import { Box, FloatBottomBox, FullWidthBox } from "../../ui/Box/box.ui";
import { ColumnFlexBox } from "../../ui/FlexBox/FlexBox";
import Icon from "../Icon/icon";
import PaletteText from "../Text/text.style";

const ResourceButtonContainer = styled.View`
width: 94px;
height: 93px;

background: #F5F5F5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
`

export default function ResourceButton({ }) {
    return (
        <ResourceButtonContainer>
            <ColumnFlexBox>
                <FullWidthBox centerItems={true} height={74}>
                    <Icon
                        source={require("../../assets/res_file_icon.png")}
                        size={40}
                    />
                </FullWidthBox>

                <FloatBottomBox
                    fullWidth={true}
                    backgroundColor={"#595FDD"}
                    centerItems={true}>
                    <PaletteText color={"white"} numberOfLines={1}>SampleFileName.pdf</PaletteText>
                </FloatBottomBox>
            </ColumnFlexBox>

        </ResourceButtonContainer>
    );
}