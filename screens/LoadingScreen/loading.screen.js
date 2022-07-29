import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import { FullWidthBox } from "../../ui/Box/box.ui";


export default function LoadingScreen({ navigation }) {
    const [token, setToken] = useState(undefined);
    AsyncStorage.getItem('token_key')
        .then(token => {
            if (token) setToken(token);
        });

    useEffect(() => {
        if (typeof token != "undefined" && token != null && token !== "logout") {
            navigation.navigate('Todo');
        }
    }, [token]);

    useEffect(() => {
        if (token === "logout") {
            navigation.navigate('Login');
        }
    }, [token]);

    return (
        <FullWidthBox centerItems={true} fullHeight={true}>
            <ActivityIndicator size="large" />
        </FullWidthBox>
    );
}
