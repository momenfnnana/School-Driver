import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../../components/header/Header";
import Spacer from "../../components/Spacer/Spacer";
import NotificationCard from "../../components/NotificationCard/notificationCard";

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Header
        text="الإشعارات"
        rightIcon={require("../../../assets/images/arrow-right.png")}
        handleRightIcon={() => navigation.pop()}
        notificationIcon={false}
        onNotification={() => console.log("on press notification!")}
        onRightIcon={() => console.log("on press RightIcon!")}
        leftIcon={require("../../../assets/images/arrow-right.png")}
        hideLeftIcon={true}
        notificationNumbers={1}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.readText}>غير مقروء</Text>
        <View>
          <NotificationCard />
          <NotificationCard />
        </View>
        <Text style={styles.recentText}>مؤخــرا</Text>
        <View>
          <NotificationCard />
          <NotificationCard />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    zIndex: -1,
    marginTop:"20%"
  },
  readText: {
    fontFamily: "Cocon",
    fontSize: 20,
    color: "#4A4A4A",
    marginBottom: 20,
    marginTop: 50
  },
  recentText: {
    fontFamily: "Cocon",
    fontSize: 20,
    color: "#4A4A4A",
    marginBottom: 20,
    marginTop: 5
  }
});

export default NotificationScreen;
