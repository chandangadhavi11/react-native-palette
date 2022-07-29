import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import FillButton from "../../components/Button/button.fill";
import StrokeButton from "../../components/Button/button.style";
import PaletteLogo from "../../components/PaletteLogo/palette.logo";
import PaletteText from "../../components/Text/text.style";
import PaletteInputText from "../../components/TextInput/input.text";
import { Box, FullWidthBox } from "../../ui/Box/box.ui";
import { ColumnFlexBox } from "../../ui/FlexBox/FlexBox";

export default function RegisterScreen({ navigation }) {

    const [email, setEmail] = useState("");
    const onClickedContinueHandler = () => {
        navigation.navigate({ name: 'ConfirmPassword', params: { emailValue: email } })
    }
    return (
        <SafeAreaView>
            <ColumnFlexBox fullWidth={true} centerItems={true} >
                <FullWidthBox marginTop={90} centerItems={true}>
                    <PaletteLogo />
                </FullWidthBox>
                <FullWidthBox marginLeft={60} marginTop={116}>
                    <Box>
                        <PaletteText type="heading">Welcome to Palette!</PaletteText>
                    </Box>
                    <Box width={320} marginTop={22} marginLeft={20}>
                        <PaletteText type="paragraph">Please enter the email address that your institute has used</PaletteText>
                    </Box>
                </FullWidthBox>
                <FullWidthBox marginTop={97} horizontalPadding={32}>
                    <PaletteInputText
                        placeholder="Enter email address"
                        value={email}
                        onChangeText={(text) => setEmail(text)} />
                </FullWidthBox>
                <FullWidthBox marginTop={200} horizontalPadding={56}>
                    <StrokeButton
                        buttonText="Continue"
                        textColor="white"
                        onPress={onClickedContinueHandler} />
                </FullWidthBox>
            </ColumnFlexBox>
        </SafeAreaView>

    );
}