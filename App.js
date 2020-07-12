import React, { useState } from 'react';
import { StyleSheet, Text, View, I18nManager, TouchableOpacity, TouchableHighlight } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Home from './src/screens/Home/Home';
// import Notifications from './src/screens/Notifications/Notifications'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import DrawerContent from './src/screens/DrawerContent/DrawerContent';
import ForgetPassword from './src/screens/ForgetPassword/ForgetPassword';
import SigninScreen from './src/screens/signIn/sgininScreen';
import StartingScreen from './src/screens/StartingScreen/StartingScreen';
import NotificationScreen from "./src/screens/Notifications/notificationScreen";
export default function App() {
  I18nManager.forceRTL(true)
  const fetchFonts = () => {

    return Font.loadAsync({
      'Cocon': require('./assets/fonts/coconnextarabic-light.ttf')
    });
  };

  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }
  const Drawer = createDrawerNavigator();
  const icon = () => {
    return (
      <Ionicons name="ios-arrow-back" size={24} color="black" />
    )
  }
  return (
    <View style={{ flex: 1 }}>
      {/* <SigninScreen Title="تسجيل الدخول" /> */}
      {/* <ForgetPassword /> */}
      {/* <StartingScreen
        Title="الشروط الخاصة بالسائق"
        detailsText1="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق"
        detailsText2="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق"
      /> */}
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="نسيت كلمة المرور">
          <Drawer.Screen name="الرئيسية" component={Home} />
          <Drawer.Screen name="الاشعارات" component={NotificationScreen} />
          <Drawer.Screen name="نسيت كلمة المرور" component={ForgetPassword} />
        </Drawer.Navigator>
      </NavigationContainer>
      {/* <NotificationScreen />
      {/* <ForgetPassword /> */}
    </View>
  );
}
const styles = StyleSheet.create({
});
