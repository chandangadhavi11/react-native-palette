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

export default function LoginScreen({ navigation }) {

    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    });

    const onLoginHandler = () => {
        console.log("Chandan");
        navigation.navigate('Todo')

    }

    const onRegisterHandler = () => {
        navigation.navigate('Register')
    }

    return (
        <SafeAreaView>
            <ColumnFlexBox fullWidth={true} centerItems={true} >
                <FullWidthBox marginTop={90} centerItems={true}>
                    <PaletteLogo />
                </FullWidthBox>
                <FullWidthBox horizontalPadding={32} marginTop={156}>
                    <FullWidthBox marginTop={0} centerItems={true}>
                        <PaletteInputText
                            placeholder="Email"
                            onChangeText={(text) => setLoginDetails({ ...loginDetails, email: text })}
                            value=""
                        />
                    </FullWidthBox>
                    <FullWidthBox marginTop={42} centerItems={true}>
                        <PaletteInputText
                            placeholder="Password"
                            onChangeText={(text) => setLoginDetails({ ...loginDetails, password: text })}
                            value=""
                        />
                    </FullWidthBox>
                    <FullWidthBox marginTop={27}>
                        <PaletteText float="right" type="paragraph">Forgot password?</PaletteText>

                    </FullWidthBox>
                    <FullWidthBox marginTop={82}>
                        <StrokeButton
                            buttonText="LOG IN"
                            textColor="white"
                            fullWidth={true}
                            onPress={onLoginHandler} />
                    </FullWidthBox>
                    <FullWidthBox marginTop={40}>
                        <FillButton
                            buttonText="NEW USER"
                            fullWidth={true}
                            onPress={onRegisterHandler} />
                    </FullWidthBox>
                </FullWidthBox>
            </ColumnFlexBox>
        </SafeAreaView>

    );
}