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
} from "react-native";
import SigninForm from "../../components/SignInForm/signinForm";
import { Context as AuthContext } from '../../Context/AuthContext';

const { width, height } = Dimensions.get("window");

const SigninScreen = ({ Title }) => {

  const { signin , state } = useContext(AuthContext);
  console.log('===============ddd=d=d=d=d==d', state)
  return (
    <View style={styles.fullContainer}>
      <StatusBar style="light" />
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
        <SigninForm title="حساب السائق" />
      </ImageBackground>
      <View style={styles.signinBtnContainer}>
        <TouchableOpacity onPress={signin} style={styles.signinBtn}>
          <Text style={styles.signinText}>تسجيل الدخول</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
  },
  container: {
    alignItems: "center",
    justifyContent: "flex-end",
    height: height,
    resizeMode: "cover",
    marginTop: -height / 2.5,
  },
  containHedingLine: {
    marginTop: height / 8,
    marginBottom: 20,
  },
  HeadingLine: {
    color: "#fff",
    fontSize: 28,
    fontFamily: "Cocon",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageBackground: {
    position: "absolute",
    opacity: 0.5,
  },
  busImage: {},
  signinBtnContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height:"30%"
  },
  signinBtn: {
    marginBottom: "20%",
    backgroundColor: '#D5436A',
    borderRadius: 10,
    alignItems: 'center',
    width: '90%',
    // alignSelf:'center'
  },
  signinText: {
    fontFamily: 'Cocon',
    marginVertical: 15,
    color: '#fff',
    fontSize: 20
  }
});

export default SigninScreen;
