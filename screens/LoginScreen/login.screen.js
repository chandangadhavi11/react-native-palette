import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ApiConfig from "../../apis/api.config";
import { apiPostCall } from "../../apis/api.service";
import FillButton from "../../components/Button/button.fill";
import StrokeButton from "../../components/Button/button.style";
import PaletteLogo from "../../components/PaletteLogo/palette.logo";
import PaletteText from "../../components/Text/text.style";
import PaletteInputText from "../../components/TextInput/input.text";
import { Box, FullWidthBox } from "../../ui/Box/box.ui";
import { ColumnFlexBox } from "../../ui/FlexBox/FlexBox";
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaxDimensionLoading from "../../components/Loading/loading.style";


export default function LoginScreen({ navigation }) {

    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    });

    const [loginApi, setLoginApi] = useState({
        data: undefined,
        loading: false,
        error: undefined
    });


    const onLoginHandler = () => {
        setLoginApi({ ...loginApi, loading: true });
        // navigation.navigate('Todo')
        apiPostCall(ApiConfig.LOGIN, loginDetails)
            .then(res => setLoginApi(
                {
                    data: res.data,
                    loading: false,
                    error: undefined
                }
            )
            ).catch(err => setLoginApi({
                ...loginApi,
                error: err.response.data.error
            }));
    }
    const onRegisterHandler = () => {
        navigation.navigate('Register');
    }

    useEffect(() => {
        if (loginApi.data) {
            console.log(loginApi.data.token);
            AsyncStorage.setItem('token_key', loginApi.data.token);
            navigation.navigate('Todo');
        }
    }, [loginApi.data]);

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
                            value={loginDetails.email}
                        />
                    </FullWidthBox>
                    <FullWidthBox marginTop={42} centerItems={true}>
                        <PaletteInputText
                            placeholder="Password"
                            onChangeText={(text) => setLoginDetails({ ...loginDetails, password: text })}
                            value={loginDetails.password}
                        />
                    </FullWidthBox>
                    <FullWidthBox marginTop={27}>
                        <PaletteText float="right" type="paragraph">Forgot password?</PaletteText>

                    </FullWidthBox>
                    <FullWidthBox marginTop={82}>
                        {loginApi.loading ?
                            <MaxDimensionLoading /> :
                            <StrokeButton
                                buttonText="LOG IN"
                                textColor="white"
                                fullWidth={true}
                                onPress={onLoginHandler} />
                        }
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