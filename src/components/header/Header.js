import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const Header = ({ text, rightIcon, handleRightIcon, notificationNumbers, notificationIcon, onNotification }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={handleRightIcon}>
        <Image source={rightIcon} />
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity disabled={!notificationIcon} onPress={onNotification}>
        <View
          style={
            notificationIcon
              ? { opacity: 1, position: "relative" }
              : { opacity: 0, position: "relative" }
          }
        >
          <Ionicons name="ios-notifications" size={26} color="#F8E71C" />
          <View style={styles.containNumbers}>
            <Text style={styles.textNumber}>{notificationNumbers}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    paddingTop: "10%",
    paddingBottom: "5%",
    paddingHorizontal: "5%",
    backgroundColor: "#D5436A",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    shadowColor: "#D5436A",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
    zIndex: 100,
  },
  text: {
    color: "#fff",
    fontSize: 22,
    fontFamily: "Cocon",
    marginRight: "5%"
  },
  icon: {
    marginLeft: "5%",
    marginRight: 0
  },
  iconLeft: {
    marginLeft: 0,
    marginRight: "5%"
  },
  containNumbers: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 13,
    width: 13,
    borderRadius: 6.5,
    left: -6,
    top: 3,
  },
  textNumber: {
    fontFamily: "Cocon",
    fontSize: 13,
    color: "#D5436A",
  },
})
export default Header