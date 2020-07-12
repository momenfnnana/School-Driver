import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
const SigninForm = ({ title }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.formContainer}>
      <Text style={styles.titleForm}>{title}</Text>
      <View style={{ width: "90%", paddingVertical: 20, marginTop: -10 }}>
        <TextInput
          value={name}
          onChangeText={(val) => setName(val)}
          style={styles.input}
          mode={"outlined"}
          label="اسم السائق"
          placeholder="اسم السائق"
          theme={{
            colors: { primary: "#D5436A", underlineColor: "#DED7EE" },
            fonts: { regular: { fontFamily: "Cocon" } },
          }}
          editable={true}
          multiline={true}
          numberOfLines={3}
        />

        <TextInput
          value={password}
          onChangeText={(val) => setPassword(val)}
          style={styles.input}
          mode={"outlined"}
          label="كلمة المرور"
          placeholder="كلمة المرور"
          theme={{
            colors: { primary: "#D5436A", underlineColor: "#DED7EE" },
            fonts: { regular: { fontFamily: "Cocon" } },
          }}
          editable={true}
          multiline={true}
          numberOfLines={3}
          secureTextEntry={true}
          textContentType="password"
          keyboardType="visible-password"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 15,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    width: "90%",
    textAlign: "center",
    marginBottom: -50,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 5,
  },
  titleForm: {
    marginTop: 15,
    fontFamily: "Cocon",
    color: "#D5436A",
    fontSize: 25,
  },
  input: {
    width: "100%",
    fontFamily: "Cocon",
    height: 45,
    color: "#D5436A",
    backgroundColor: "#fff",
    borderColor: "#DED7EE",
    marginTop: 10,
  },
  // keyboardView:{
  //   display:'flex',
  // }
});

export default SigninForm;
