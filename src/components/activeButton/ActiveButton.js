import React, { useS } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ActiveButton = ({ text, bColor, bkColor, textColor }) => {
    return (
        <View style={[styles.container, { borderColor: `${bColor}` }]}>
            <Text style={[styles.text,{color:`${textColor}`}]}>{text}</Text>
            <View style={[styles.circle, { backgroundColor: `${bkColor}` }]} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,
        padding: "4%",
        marginBottom: "4%",
        width: "95%",
        alignSelf: "center"
    },
    circle: {
        height: 17,
        width: 17,
        borderRadius: 50
    },
    text: {
        fontFamily: "Cocon"
    }
})
export default ActiveButton