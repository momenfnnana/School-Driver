import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'

const ActivityState = ({ text, bkColor, textColor ,onPress }) => {
    return (
        <TouchableOpacity style={styles.ActivityContainer} onPress={onPress}>
            <Text style={styles.text}>الحالة</Text>
            <View style={{ flexDirection: "row", width: "90%", alignItems: "center", justifyContent: "flex-end" }}>
                <Text style={[styles.avaliable, { color: `${textColor}` }]}>{text}</Text>
                <View style={[styles.light, { backgroundColor: `${bkColor}` }]} />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    ActivityContainer: {
        flex:1,
        position: "absolute",
        top: "14%",
        backgroundColor: "#fff",
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "6%",
        borderRadius: 10,
        shadowColor: "#D5436A",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        alignSelf:"center"
    },
    text: {
        fontSize: 22,
        fontFamily: "Cocon",
        color: "#D5436A"
    },
    avaliable: {
        fontSize: 15,
        fontFamily: "Cocon",
        marginRight: "3%"
    },
    light: {
        height: 17,
        width: 17,
        borderRadius: 50
    }
})
export default ActivityState