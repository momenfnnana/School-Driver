import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import MapView from 'react-native-maps'
import Header from '../../components/header/Header';
import ActivityState from '../../components/activityState/ActivityState';
import Modal from 'react-native-modal'
import ActiveButton from '../../components/activeButton/ActiveButton';
import useLocation from '../../hook/useLocation'
import * as Location from 'expo-location';
// test
const Home = ({ navigation }) => {
    const [activeText, setActiveText] = useState('متاح')
    const [activeBkColor, setActiveBkColor] = useState("#04F966")
    const [isModalVisible, setModalVisible] = useState(false);
    const [err, setErr] = useState(null);
    const [coordinate, setCoords] = useState({})
    const startWatching = async () => {
        try {
            await Location.requestPermissionsAsync();
            await Location.watchPositionAsync({
                accuracy: Location.Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => {
                console.log(location);
                setCoords(location)
            })
        } catch (e) {
            setErr(e)
        }
    }
    useEffect(() => {
        startWatching()
    }, [])
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const changeActiveState = () => {
        setModalVisible(false)
        setActiveText('متاح')
        setActiveBkColor('#04F966')
    }
    const changeBusyState = () => {
        setModalVisible(false);
        setActiveText('مشغول')
        setActiveBkColor('#D5436A')
    }
    const region = {
        longitude: 34.4563904,
        latitude: 31.5090485,
        longitudeDelta: 0.02,
        latitudeDelta: 0.02
    }
    return (
        <View style={styles.container}>
            <Header
                text="الرئيسية"
                rightIcon={require('../../../assets/images/menu.png')}
                handleRightIcon={() => { navigation.openDrawer() }}
                leftIcon={require('../../../assets/images/menu.png')}
                handleLeftIcon={navigation.openDrawer()}
                hideLeftIcon={true}
            />
            <MapView
                style={styles.MapView}
                region={{
                    ...coordinate.coords,
                    longitudeDelta: 0.03,
                    latitudeDelta: 0.03
                }
                }
            />
            <ActivityState onPress={toggleModal} text={activeText} bkColor={activeBkColor} textColor={activeBkColor} />
            <Modal style={{ width: "100%", alignSelf: "center", height: "100%", marginBottom: 0 }} isVisible={isModalVisible}>
                <View style={{ position: 'absolute', bottom: 0, width: "100%", height: "30%", backgroundColor: "#fff", borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
                    <Text style={{ textAlign: "center", fontFamily: "Cocon", padding: "5%", fontSize: 23, color: "#D5436A" }}>تغيير الحالة</Text>
                    <TouchableOpacity onPress={changeActiveState}>
                        <ActiveButton textColor="#04F966" text="متاح" bColor="#B8A9A950" bkColor="#04F966" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={changeBusyState}>
                        <ActiveButton textColor="#D5436A" text="مشغول" bColor="#B8A9A950" bkColor="#D5436A" />
                    </TouchableOpacity>
                    {/* <MaterialCommunityIcons name="crosshairs-gps" size={24} color="black" /> */}
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    MapView: {
        height:"100%"
    }
})
export default Home;