import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import SigninForm from "../../components/SignInForm/signinForm";
import { Context as AuthContext } from '../../Context/AuthContext'
const { width, height } = Dimensions.get("window");

const SigninScreen = ({ Title = "تسجيل الدخول", navigation }) => {
  const { signin } = useContext(AuthContext)
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        style={{ width: "100%" }}
        behavior="position"
        keyboardVerticalOffset={10}
      >
        <ImageBackground
          source={require("../../../assets/images/Oval.png")}
          style={styles.container}
        >
          {/* Heading Text */}
          <View style={styles.containHedingLine}>
            <Text style={styles.HeadingLine}>{Title}</Text>
          </View>

          {/* Images */}
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/images/Bitmap.png")}
              style={styles.imageBackground}
            />
            <Image
              style={styles.busImage}
              source={require("../../../assets/images/BitmapSignin.png")}
            />
          </View>
        </ImageBackground>
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: -100 }}>
          <SigninForm title="حساب أولياء الإمور" />
        </View>
      </KeyboardAvoidingView>
      <View style={styles.signinBtnContainer}>
        <TouchableOpacity
          style={styles.signinBtn}
          onPress={signin}
        >
          <Text style={styles.signinText}>تسجيل الدخول</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: "center",
    // justifyContent: "flex-end",
    height: height,
    resizeMode: "cover",
    marginTop: -height / 2.5,
    // marginBottom:50
  },
  containHedingLine: {
    position: "absolute",
    bottom: 260,
    // marginTop: height / 8,
    // marginBottom: 20,
  },
  HeadingLine: {
    color: "#fff",
    fontSize: 28,
    fontFamily: "Cocon",
  },
  imageContainer: {
    position: "absolute",
    // width: "100%",
    alignItems: "center",
    justifyContent: "center",
    bottom: 160
  },
  imageBackground: {
    position: "absolute",
    opacity: 0.5,
  },
  busImage: {},
  signinBtnContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  signinBtn: {
    marginBottom: height / 8,
    backgroundColor: "#D5436A",
    borderRadius: 10,
    alignItems: "center",
    width: "90%",
    // alignSelf:'center'
  },
  signinText: {
    fontFamily: "Cocon",
    marginVertical: 15,
    color: "#fff",
    fontSize: 20,
  },
});

export default SigninScreen;
