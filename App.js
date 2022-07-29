import ConfirmPasswordScreen from './screens/ConfirmPasswordScreen/confirmPassword.screen';
import LoginScreen from './screens/LoginScreen/login.screen';
import MyProfileScreen from './screens/ProfileScreen/myprofile.screen';
import RegisterScreen from './screens/RegisterScreen/register.screen';
import TodoScreen from './screens/TodoScreen/todo.screen';
import EditProfileScreen from './screens/EditProfileScreen/editprofile.screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import LoadingScreen from './screens/LoadingScreen/loading.screen';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ConfirmPassword" component={ConfirmPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MyProfile" component={MyProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Todo" component={TodoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


