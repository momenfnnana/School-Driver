import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

const StartingScreen = ({ Title, detailsText1, detailsText2 }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

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
          source={require("../../../assets/images/busSchool.png")}
        />
      </View>

      {/* Text details */}
      <View style={styles.textContainer}>
        <Text style={styles.textDetails}>{detailsText1}</Text>
        <Text style={[styles.textDetails, { marginTop: 10 }]}>
          {detailsText2}
        </Text>
      </View>

      {/* Confirm button */}
      <TouchableOpacity style={styles.confirmBtn}>
        <Text style={styles.textConfirmBtn}>تأكيد</Text>
      </TouchableOpacity>

      {/* Rules and conditions button */}
      <TouchableOpacity style={styles.rulesBtn}>
        <Text style={styles.textRulesBtn}>
          هل انت موافق على والأحكام والشروط ؟
        </Text>
      </TouchableOpacity>

      {/* Copy right text */}
      <View style={styles.copyRights}>
        <Text style={styles.copyRightsText}>جميع الحقوق محفوظة © 2020</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D5436A",
    alignItems: "center",
    fontFamily: "Cocon",
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
  },
  imageBackground: {
    position: "absolute",
    opacity: 0.5,
  },
  busImage: {},
  textContainer: {
    marginTop: 30,
    // width: "85%",
    paddingHorizontal:20
  },
  textDetails: {
    color: "#fff",
    fontFamily: "Cocon",
    fontSize: 15,
    lineHeight:22
  },
  confirmBtn: {
    borderRadius: 50,
    backgroundColor: "#fff",
    width: "75%",
    marginTop: 25,
  },
  textConfirmBtn: {
    textAlign: "center",
    paddingVertical: 15,
    fontFamily: "Cocon",
    fontSize: 16,
    color: "#D5436A",
  },
  rulesBtn: {
    marginTop: 5,
  },
  textRulesBtn: {
    color: "#fff",
    fontFamily: "Cocon",
    textDecorationLine: "underline",
  },
  copyRights: {
    flex: 1,
    justifyContent: "flex-end",
  },
  copyRightsText: {
    fontFamily: "Cocon",
    color: "#fff",
    marginBottom: 10,
    fontSize:10
  },
});

export default StartingScreen;
