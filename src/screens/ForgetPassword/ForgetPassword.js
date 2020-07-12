import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Header from '../../components/header/Header';
import { TextInput } from "react-native-paper";

const { width, height } = Dimensions.get("window");

const ForgetPassword = ({ navigation }) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={styles.container}>
            <Header
                text="تعديل كلمة المرور"
                rightIcon={require("../../../assets/images/arrow-right.png")}
                handleRightIcon={() => { navigation.openDrawer() }}
                leftIcon={require('../../../assets/images/menu.png')}
                handleLeftIcon={navigation.openDrawer()}
                hideLeftIcon={true}
            />
            <View style={{ flex: 1, width: "90%", alignSelf: "center", paddingVertical: 20, marginTop: 0 }}>
                <TextInput
                    value={name}
                    onChangeText={(val) => setName(val)}
                    style={styles.input}
                    mode={"outlined"}
                    label="كلمة المرور القديمة"
                    placeholder="كلمة المرور القديمة"
                    theme={{
                        colors: { primary: "#D5436A", underlineColor: "#DED7EE" },
                        fonts: { regular: { fontFamily: "Cocon" } },
                    }}
                    editable={true}
                    multiline={true}
                    numberOfLines={3}
                    secureTextEntry
                />

                <TextInput
                    value={password}
                    onChangeText={(val) => setPassword(val)}
                    style={styles.input}
                    mode={"outlined"}
                    label="كلمة المرور الجديدة"
                    placeholder="كلمة المرور الجديدة"
                    theme={{
                        colors: { primary: "#D5436A", underlineColor: "#DED7EE" },
                        fonts: { regular: { fontFamily: "Cocon" } },
                    }}
                    editable={true}
                    multiline={true}
                    numberOfLines={3}
                    secureTextEntry
                />
                 <TextInput
                    value={password}
                    onChangeText={(val) => setPassword(val)}
                    style={styles.input}
                    mode={"outlined"}
                    label="تأكيد كلمة المرور"
                    placeholder="تأكيد كلمة المرور"
                    theme={{
                        colors: { primary: "#D5436A", underlineColor: "#DED7EE" },
                        fonts: { regular: { fontFamily: "Cocon" } },
                    }}
                    editable={true}
                    multiline={true}
                    numberOfLines={3}
                    secureTextEntry
                />
                <View style={styles.signinBtnContainer}>
                    <TouchableOpacity style={styles.signinBtn}>
                        <Text style={styles.signinText}>حفظ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        justifyContent: "center",
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
    container: {
        flex: 1,
        backgroundColor: "#F3F5F8"
    },
    input: {
        width: "100%",
        fontFamily: "Cocon",
        height: 60,
        color: "#D5436A",
        backgroundColor: "#F3F5F8",
        borderColor: "#DED7EE90",
        marginTop: 20,
    },
    signinBtnContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    signinBtn: {
        marginBottom: height / 8,
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
})
export default ForgetPassword;