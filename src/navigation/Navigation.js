import React, { useContext } from 'react';
import { Context as AuthContext } from '../Context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import ForgetPassword from '../screens/ForgetPassword/ForgetPassword';
import NotificationScreen from '../screens/Notifications/notificationScreen';
import SigninScreen from '../screens/signIn/sgininScreen';
import StartingScreen from '../screens/StartingScreen/StartingScreen';
import SplashScreen from '../screens/splashScreen/splashScreen'
import { DrawerContent } from './DrawerContent';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const LoginStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="StartingScreen" component={StartingScreen} />
            <Stack.Screen name="SigninScreen" component={SigninScreen} />
        </Stack.Navigator>
    )
}
const HomeStack = () => {
    return (
        <Stack.Navigator headerMode={false}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Notification" component={NotificationScreen} />
        </Stack.Navigator>
    )
}
const Navigator = () => {
    const { state } = useContext(AuthContext)
    return (
        <NavigationContainer>
            {
                state.isSignedIn === true ? (
                    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
                        <Drawer.Screen name="الرئيسية" component={HomeStack} />
                        <Drawer.Screen name="نسيت كلمة المرور" component={ForgetPassword} />
                    </Drawer.Navigator>
                ) : (
                        <Stack.Navigator headerMode={false}>
                            <Stack.Screen name="splash" component={SplashScreen} />
                            <Stack.Screen name="StartingScreen" component={StartingScreen} />
                            <Stack.Screen name="SigninScreen" component={SigninScreen} />
                        </Stack.Navigator>
                    )
            }
        </NavigationContainer>
    )
}
export default Navigator;