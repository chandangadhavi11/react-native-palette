import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ApiConfig from "../../apis/api.config";
import { apiPostCall } from "../../apis/api.service";
import FillButton from "../../components/Button/button.fill";
import StrokeButton from "../../components/Button/button.style";
import MaxDimensionLoading from "../../components/Loading/loading.style";
import PaletteLogo from "../../components/PaletteLogo/palette.logo";
import PaletteText from "../../components/Text/text.style";
import PaletteInputText from "../../components/TextInput/input.text";
import { Box, FullWidthBox } from "../../ui/Box/box.ui";
import { ColumnFlexBox } from "../../ui/FlexBox/FlexBox";

export default function ConfirmPasswordScreen({ route, navigation }) {

    const emailValue = route.params.emailValue;

    const [confirmPasswordDetails, setConfirmPasswordDetails] = useState({
        password: "",
        confirmPassword: ""
    });

    const [registerApi, setRegisterApi] = useState({
        data: undefined,
        loading: false,
        error: undefined
    });

    const alreadyHaveAccountHandler = () => {
        navigation.navigate('Login')
    }

    const onClickedContinueHandler = () => {
        setRegisterApi({ ...registerApi, loading: true });
        const rawBody = {
            email: emailValue,
            password: confirmPasswordDetails.password,
        }
        apiPostCall(ApiConfig.REGISTER, rawBody)
            .then(res => setRegisterApi(
                {
                    data: res.data,
                    loading: false,
                    error: undefined
                }
            )
            ).catch(err => setConfirmPasswordDetails({
                ...confirmPasswordDetails,
                error: err.response.data.error
            }));
    }

    useEffect(() => {
        if (registerApi.data) navigation.navigate('Login')
    }, [registerApi.data]);

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
                    <PaletteInputText
                        placeholder="Enter Password"
                        value={confirmPasswordDetails.password}
                        onChangeText={(text) => setConfirmPasswordDetails({ ...confirmPasswordDetails, password: text })} />
                </FullWidthBox>
                <FullWidthBox marginTop={37} horizontalPadding={32}>
                    <PaletteInputText
                        placeholder="Enter Password"
                        value={confirmPasswordDetails.confirmPassword}
                        onChangeText={(text) => setConfirmPasswordDetails({ ...confirmPasswordDetails, confirmPassword: text })} />
                </FullWidthBox>
                <FullWidthBox marginTop={130} horizontalPadding={56}>
                    {registerApi.loading ?
                        <MaxDimensionLoading /> :
                        <StrokeButton
                            onPress={onClickedContinueHandler}
                            buttonText="Continue"
                            textColor="white" />
                    }

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