import React, { useState } from 'react';
import { I18nManager } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Provider as AuthProvider } from './src/Context/AuthContext'
import Navigator from './src/navigation/Navigation'
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

  return (
    <AuthProvider>
      <Navigator />
    </AuthProvider >
  );
}