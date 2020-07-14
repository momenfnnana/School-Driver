import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import MapView, { Marker, Circle } from 'react-native-maps'
import Header from '../../components/header/Header';
import ActivityState from '../../components/activityState/ActivityState';
import Modal from 'react-native-modal'
import ActiveButton from '../../components/activeButton/ActiveButton';
import * as Location from 'expo-location';
import Data from '../../fakePosition/fakePosition'

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
    const pushModal = () => {
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
    const Position = Data.map((i) => <Circle
        key={i.key}
        center={i.coords}
        radius={30}
        strokeColor="#D5436A90"
        fillColor="#D5436A90"
    />)
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Header
                text="الرئيسية"
                rightIcon={require('../../../assets/images/menu.png')}
                handleRightIcon={() => { navigation.openDrawer() }}
                notificationNumbers={10}
                notificationIcon={true}
                onNotification={() => navigation.navigate("Notification")}
            />
            <MapView
                style={styles.MapView}
                customMapStyle={require('../../../assets/mapstyle.json')}
                region={{
                    // ...coordinate.coords,
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    zoom: 17,
                    latitude: 37.78825,
                    longitude: -122.4324,
                }}
            >
                {Position}
                <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title={"sdafswerf wef few "}
                >
                    <Image
                        source={require('../../../assets/images/bus.png')} />
                </Marker>
            </MapView>
            <ActivityState onPress={pushModal} text={activeText} bkColor={activeBkColor} textColor={activeBkColor} />
            <Modal style={{ width: "100%", alignSelf: "center", height: "100%", marginBottom: 0 }} isVisible={isModalVisible}>
                <View style={{ position: 'absolute', bottom: 0, width: "100%", height: "30%", backgroundColor: "#fff", borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
                    <Text style={{ textAlign: "center", fontFamily: "Cocon", padding: "5%", fontSize: 23, color: "#D5436A" }}>تغيير الحالة</Text>
                    <TouchableOpacity onPress={changeActiveState}>
                        <ActiveButton textColor="#04F966" text="متاح" bColor="#B8A9A950" bkColor="#04F966" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={changeBusyState}>
                        <ActiveButton textColor="#D5436A" text="مشغول" bColor="#B8A9A950" bkColor="#D5436A" />
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    MapView: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -10
    },
    mapCenterMarkerView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    mapCenterMarker: {
        width: 60,
        height: 100,
        backgroundColor: 'rgba(0,0,0,0)',
        resizeMode: "contain"
    },
})
export default Home;