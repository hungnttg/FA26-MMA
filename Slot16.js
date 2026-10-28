//npm i react-native-maps
//emulator -list-avds
//emulator -avd TenThietBi
import React,{useState} from "react";
import { View,Text,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView,{Marker} from "react-native-maps";
const Slot16 = () =>{
    //vi tri can hien thi tren ban do
    const [coordinate,setCoordinate]=useState({
        latitude: 21.0333,
        longitude: 105.8500
    });
    //su kien tren ban do
    const handleMapPress = (e) =>{
        //set vi tri hien thoi
        const {latitude,longitude}=e.nativeEvent.coordinate;
        setCoordinate({latitude,longitude});//cap nhat vi tri
    };
    //giao dien
    return(
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: coordinate.latitude,
                    longitude: coordinate.longitude,
                    latitudeDelta:0.01,
                    longitudeDelta:0.01
                }}
                onPress={handleMapPress}
            >
                <Marker coordinate={coordinate} title="Vi tri da chon"/>
            </MapView>
            {/* hien thi cac truong thong tin khi set vi tri */}
            <View style={styles.infoBox}>
                <Text style={styles.text}>Vi do: {coordinate.latitude.toFixed(6)}</Text>
                <Text style={styles.text}>Kinh do: {coordinate.longitude.toFixed(6)}</Text>
            </View>
        </SafeAreaView>
    );
}
export default Slot16;
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    map:{
        flex:1,
    },
    infoBox:{
        padding:15,
        backgroundColor:'white',
        alignItems:'center',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color: '#333',
    },
});