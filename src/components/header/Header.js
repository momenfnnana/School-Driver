import React,{useEffect,useCallback} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ text, rightIcon, notificationIcon, onRightIcon, onNotification, notificationNumbers=0 }) => {
    useCallback(()=>{
        useEffect(()=>{
        },[notificationIcon])
    },[notificationIcon])
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={onRightIcon}>
        <Image source={rightIcon} />
      </TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
      <TouchableOpacity style={notificationIcon?{opacity:1,position:'relative',zIndex:1000}:{opacity:0,position:'relative'}} disabled={!notificationIcon} onPress={onNotification}>
        <Ionicons name="ios-notifications" size={26} color="#F8E71C" />
        <View style={styles.containNumbers}>
            <Text style={styles.textNumber}>{notificationNumbers}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    top: 0,
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
    // zIndex:1
  },
  icon: {
    justifyContent: "flex-start",
    // width:"100%"
    zIndex:1000
  },
  text: {
    color: "#fff",
    fontFamily: "Cocon",
    fontSize: 22,
    // alignSelf:'center'
  },
  notification: {
    //   opacity:0
  },
  headerImage: {
    position: "absolute",
    top: 0,
  },
  fullHead: {
    flex: 1,
    alignItems: "center",
  },
  containNumbers:{
      position:'absolute',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#fff',
      height:13,
      width:13,
      borderRadius:6.5,
      left:-6,
      top:3
  },
  textNumber:{
      fontFamily:'Cocon',
      fontSize:13,
      color:"#D5436A"
  }
});
export default Header;
