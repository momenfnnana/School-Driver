import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
        navigation.navigate('StartingScreen')
    },3000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/images/Bitmap.png")}
          style={styles.imageBackground}
        />
        <Image
          style={styles.busImage}
          source={require("../../../assets/images/busSchool.png")}
        />
      </View>
      <Text style={styles.version}>Version 1.0.0</Text>
      <Image
        style={styles.rightImage}
        source={require("../../../assets/images/rightSplash.png")}
      />
      <Image
        style={styles.leftImage}
        source={require("../../../assets/images/leftSplash.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D5436A",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    alignItems: "center",
  },
  imageBackground: {
    position: "absolute",
    opacity: 0.5,
  },
  version: {
    position: "absolute",
    bottom: 20,
    fontFamily: "Cocon",
    fontSize: 12,
    color: "#fff",
  },
  rightImage: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  leftImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});

export default SplashScreen;
