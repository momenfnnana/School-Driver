import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
const Header = ({ text, rightIcon, handleRightIcon, leftIcon, handleLeftIcon, hideLeftIcon }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={handleRightIcon}>
        <Image source={rightIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={hideLeftIcon} onPress={handleLeftIcon}>
        <Image source={leftIcon ? styles.icon : styles.whenHide} />
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: "12%",
    width:"100%",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#D5436A",
    flexDirection: "row"
  },
  text: {
    color: "#fff",
    fontSize: 22,
    fontFamily: "Cocon",
    marginLeft:"5%"
  },
  icon:{
    marginLeft:"5%",
    marginRight:0
  }
})
export default Header