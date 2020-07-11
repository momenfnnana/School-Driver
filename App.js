import React, { useState } from 'react';
import { StyleSheet, Text, View, I18nManager, TouchableOpacity, TouchableHighlight } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Home from './src/screens/Home/Home';
import Notifications from './src/screens/Notifications/Notifications'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import DrawerContent from './src/screens/DrawerContent/DrawerContent';
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
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home">
        <Drawer.Screen name="الرئيسية" component={Home} />
        <Drawer.Screen name="الاشعارات" component={Notifications} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
});
