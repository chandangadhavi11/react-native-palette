import { SafeAreaView, ScrollView, Text } from "react-native";
import BackButton from "../../components/Button/back.button";
import PaletteTopBar from "../../components/TopBar/top.bar";
import { Grid } from "../../ui/Grid/grid";
import { Box, FullWidthBox } from "../../ui/Box/box.ui"
import LogOutButton from "../../components/Button/logout.button";
import { ColumnFlexBox, RowFlexBox } from "../../ui/FlexBox/FlexBox";
import ProfileIcon from "../../components/Icon/profile.icon";
import PaletteText from "../../components/Text/text.style";
import StrokeButton from "../../components/Button/button.style";
import IconWithText from "../../components/Icon/iconText";
import { Card } from "../../ui/Card/card.ui";
import Icon from "../../components/Icon/icon";

const ProfileLeftTopBar = () => {
    return (
        <Box marginRight={46}>
            <BackButton
                onPress={() => { console.log("Chandan") }} />
        </Box>

    );
}

const ProfileRightTopBar = () => {
    return (
        <Box>
            <LogOutButton
                onPress={() => { console.log("Chandan") }} />
        </Box>
    );
}

const AddButton = () => {
    return (
        <Card width={88} height={94} centerItems={true}>
            <Icon
                source={require('../../assets/back_icon.png')}
                size={24}
                onPress={() => { console.log("Chandan") }}
            />
        </Card>
    );
}

const IconCard = () => {
    return (
        <Card width={56} height={56} centerItems={true} marginRight={20}>
            <Icon
                source={require('../../assets/back_icon.png')}
                size={24}
                onPress={() => { console.log("Chandan") }}
            />
        </Card>
    );
}



export default function EditProfileScreen() {
    return (
        <SafeAreaView>

            <PaletteTopBar
                renderLeft={() => <ProfileLeftTopBar />}
                renderRight={() => <ProfileRightTopBar />}
                topBarTitleText="My Profile"
            />

            <FullWidthBox>
                <RowFlexBox centerItems={true}>
                    <Box marginLeft={60}>
                        <ProfileIcon />
                    </Box>
                    <ColumnFlexBox marginLeft={32}>
                        <PaletteText size={25}>Bruce Wayne</PaletteText>
                        <Box marginTop={8}>
                            <PaletteText color="#ADADAD">24 yrs Male CA</PaletteText>
                        </Box>
                    </ColumnFlexBox>
                </RowFlexBox>
            </FullWidthBox>

            <FullWidthBox horizontalPadding={40} marginTop={35}>
                <StrokeButton
                    borderRadius={8}
                    buttonColor="#FAFAFA"
                    buttonText={"Edit Profile"}
                    textColor="#000000" />
            </FullWidthBox>

            {/* Education */}
            <FullWidthBox horizontalPadding={40} marginTop={35}>
                <IconWithText
                    source={require('../../assets/back_icon.png')}
                    text="Education"
                />
                <ScrollView horizontal={true}>
                    <RowFlexBox marginTop={24}>
                        <Card horizontalPadding={32} marginRight={24}>
                            <Box marginTop={20} marginBottom={20}>
                                <PaletteText>Dallas Institute</PaletteText>
                                <Box marginTop={8}>
                                    <PaletteText color={"#929292BF"} size={14}>Computer Science Grade 2, DLI40123</PaletteText>
                                </Box>
                            </Box>
                        </Card>
                        <AddButton />
                    </RowFlexBox>
                </ScrollView>

            </FullWidthBox>

            {/* WE */}
            <FullWidthBox horizontalPadding={40} marginTop={35}>
                <IconWithText
                    source={require('../../assets/back_icon.png')}
                    text="Work Experience"
                />

                <RowFlexBox marginTop={24}>
                    <Card horizontalPadding={32} marginRight={24}>
                        <Box marginTop={20} marginBottom={20}>
                            <PaletteText>Dallas Institute</PaletteText>
                            <Box marginTop={8}>
                                <PaletteText color={"#929292BF"} size={14}>Computer Science Grade 2, DLI40123</PaletteText>
                            </Box>
                        </Box>
                    </Card>

                    <Card horizontalPadding={32}>
                        <Box marginTop={20} marginBottom={20}>
                            <PaletteText>Dallas Institute</PaletteText>
                            <Box marginTop={8}>
                                <PaletteText color={"#929292BF"} size={14}>Computer Science Grade 2, DLI40123</PaletteText>
                            </Box>
                        </Box>
                    </Card>
                </RowFlexBox>
            </FullWidthBox>

            {/* Interests */}
            <FullWidthBox horizontalPadding={40} marginTop={35}>
                <IconWithText
                    source={require('../../assets/back_icon.png')}
                    text="Interests"
                />

                <RowFlexBox marginTop={24}>
                    <Card horizontalPadding={32} marginRight={24}>
                        <Box marginTop={20} marginBottom={20}>
                            <PaletteText>Music</PaletteText>
                        </Box>
                    </Card>

                    <Card horizontalPadding={32}>
                        <Box marginTop={20} marginBottom={20}>
                            <PaletteText>Tennis</PaletteText>
                        </Box>
                    </Card>
                    <Card horizontalPadding={32}>
                        <Box marginTop={20} marginBottom={20}>
                            <PaletteText>Painting</PaletteText>
                        </Box>
                    </Card>
                </RowFlexBox>
            </FullWidthBox>

            {/* Links */}
            <FullWidthBox horizontalPadding={40} marginTop={10}>
                <RowFlexBox>
                    <IconCard />
                    <IconCard />
                    <IconCard />
                    <IconCard />
                    <IconCard />
                    <IconCard />
                </RowFlexBox>
            </FullWidthBox>

        </SafeAreaView >

    );
}
