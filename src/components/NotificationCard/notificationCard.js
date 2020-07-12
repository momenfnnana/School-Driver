import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
const NotificationCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.messageContainer}>
        <View style={styles.circle}></View>
        <View>
          <Text style={styles.messageText}>
            تم وصول الباص إلى الموقع ، هل ابنكم جاهز ؟
          </Text>
          <Text style={styles.timeText}>قبل 15 د</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.ReadyBtn}>
          <Text style={styles.ReadyText}>جاهز</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.AbsenceBtn}>
          <Text style={styles.AbsenceText}>إذن غياب</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 10,
    borderRadius: 12,
    marginBottom: 10,
    borderColor:"#30303050",
    borderWidth:1
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
    backgroundColor: "#D5436A",
    marginRight: 10,
  },
  messageText: {
    fontFamily: "Cocon",
    fontSize: 16,
    color: "#4A4A4A",
    marginBottom: 3,
  },
  timeText: {
    fontFamily: "Cocon",
    fontSize: 11,
    color: "#4A4A4A",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15
  },
  ReadyBtn: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: "#D5436A",
    paddingVertical: 10,
    alignItems: "center",
    marginRight: 5
  },
  ReadyText: {
    color: '#fff',
    fontFamily: 'Cocon',
    fontSize: 14
  },
  AbsenceBtn: {
    flex: 1,
    borderRadius: 6,
    // backgroundColor: "#D5436A",
    paddingVertical: 10,
    alignItems: "center",
    borderColor: "#D5436A",
    borderWidth: 1,
    marginLeft: 5
  },
  AbsenceText: {
    color: '#D5436A',
    fontFamily: 'Cocon',
    fontSize: 14
  }
});

export default NotificationCard;
