import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import FillButton from "../../components/Button/button.fill";
import StrokeButton from "../../components/Button/button.style";
import PaletteLogo from "../../components/PaletteLogo/palette.logo";
import PaletteText from "../../components/Text/text.style";
import PaletteInputText from "../../components/TextInput/input.text";
import { Box, FullWidthBox } from "../../ui/Box/box.ui";
import { ColumnFlexBox } from "../../ui/FlexBox/FlexBox";

export default function ConfirmPasswordScreen({ navigation }) {

    const alreadyHaveAccountHandler = () => {
        navigation.navigate('Login', { name: 'Jane' })
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
                <FullWidthBox marginTop={33} horizontalPadding={32}>
                    <PaletteInputText placeholder="Enter Password" />
                </FullWidthBox>
                <FullWidthBox marginTop={37} horizontalPadding={32}>
                    <PaletteInputText placeholder="Enter Password" />
                </FullWidthBox>
                <FullWidthBox marginTop={130} horizontalPadding={56}>
                    <StrokeButton buttonText="Continue" textColor="white" />
                </FullWidthBox>
                <Box marginTop={36}>
                    <PaletteText
                        onPress={alreadyHaveAccountHandler}
                        type="paragraph" > Already have an account ?</PaletteText>
                </Box>
            </ColumnFlexBox>
        </SafeAreaView >

    );
}