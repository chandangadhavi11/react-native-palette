import { SafeAreaView, Text } from "react-native";
import BackButton from "../../components/Button/back.button";
import ResourceButton from "../../components/Button/resources.button";
import Icon from "../../components/Icon/icon";
import IconWithText from "../../components/Icon/iconText";
import PaletteText from "../../components/Text/text.style";
import PaletteTopBar from "../../components/TopBar/top.bar";
import { Box, FullWidthBox } from "../../ui/Box/box.ui"
import { ColumnFlexBox, RowFlexBox } from "../../ui/FlexBox/FlexBox";
import DescriptionSection from "./description.section";

export default function TodoDetailScreen({ navigation }) {
    const onBackClicked = () => {
        navigation.goBack();
    }
    return (
        <SafeAreaView>
            <PaletteTopBar
                renderLeft={() => (
                    <BackButton marginLeft={24} onPress={onBackClicked} />
                )} />

            <FullWidthBox horizontalPadding={36}>
                <FullWidthBox >
                    <PaletteText size={24}>Apply to Montgomery College</PaletteText>
                </FullWidthBox>

                <FullWidthBox marginTop={14}>
                    <PaletteText size={10}>LISTED BY</PaletteText>
                    <RowFlexBox>
                        <Icon size={18} source={require("../../assets/pen_icon.png")} />
                        <Box marginLeft={4} marginTop={2}>
                            <PaletteText size={12}>You, at 6:00pm, May 05 2021</PaletteText>
                        </Box>
                    </RowFlexBox>
                </FullWidthBox>

                <FullWidthBox marginTop={20}>

                    <RowFlexBox>
                        <Box height={40}
                            backgroundColor={"#B62931"}
                            horizontalPadding={20}
                            borderRadius={5}
                            centerItems={true}>
                            <PaletteText size={20} color={"white"}>REMOVED</PaletteText>
                        </Box>
                        <ColumnFlexBox marginLeft={22}>
                            <PaletteText size={12}>COMPLETE BY</PaletteText>
                            <PaletteText size={20}>6:00 am, Jun 20 2021</PaletteText>
                        </ColumnFlexBox>
                    </RowFlexBox>
                </FullWidthBox>

                <FullWidthBox marginTop={20}>
                    <DescriptionSection />
                </FullWidthBox>

                <FullWidthBox marginTop={30}>
                    <IconWithText
                        source={require("../../assets/res_icon.png")}
                        text={"Resources"}
                        textColor={"#4B5D6B"}
                    />
                    <RowFlexBox fullWidth={true} centerItems={true} marginTop={20}>
                        <Box>
                            <ResourceButton />
                        </Box>
                        <Box marginLeft={20}>
                            <ResourceButton />
                        </Box>
                        <Box marginLeft={20}>
                            <ResourceButton />
                        </Box>
                    </RowFlexBox>
                </FullWidthBox>

                <FullWidthBox marginTop={30}>
                    <IconWithText
                        source={require("../../assets/res_icon.png")}
                        text={"Links"}
                        textColor={"#4B5D6B"}
                    />

                    <FullWidthBox marginTop={23}>
                        <RowFlexBox marginLeft={20} >
                            <PaletteText color={"#4B5D6B"}>Montgomery College website</PaletteText>
                            <Icon
                                source={require("../../assets/open_link_icon.png")}
                                size={14} marginLeft={5} />
                        </RowFlexBox>
                        <RowFlexBox marginLeft={20} marginTop={18}>
                            <PaletteText color={"#4B5D6B"}>Montgomery College website</PaletteText>
                            <Icon source={require("../../assets/open_link_icon.png")}
                                size={14} marginLeft={5} />
                        </RowFlexBox>
                        <RowFlexBox marginLeft={20} marginTop={18}>
                            <PaletteText color={"#4B5D6B"}>Montgomery College website</PaletteText>
                            <Icon source={require("../../assets/open_link_icon.png")}
                                size={14} marginLeft={5} />
                        </RowFlexBox>
                    </FullWidthBox>
                </FullWidthBox>

            </FullWidthBox>

        </SafeAreaView>
    )
}