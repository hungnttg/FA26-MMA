import React from "react";
import { Text,View,TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {createDrawerNavigator} from 'expo-router/build/react-navigation/drawer';
import {GestureHandlerRootView} from 'react-native-gesture-handler'

const Drawer = createDrawerNavigator();
function Home({navigation}){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity
                onPress={()=>navigation.openDrawer()}
                style={{position:'absolute',left:20,top:50}}
            >
                <Ionicons name="menu" size={30} color="black"/>
            </TouchableOpacity>
            <Text>Home Screen</Text>
        </View>
    );
}
function Settings(){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Settings Screen</Text>
        </View>
    );
}
export default function Slot14(){
    return(
        <GestureHandlerRootView style={{flex:1}}>
            <Drawer.Navigator screenOptions={{headerShown:false}}>
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="Settings" component={Settings}
                options={{headerShown:true}}/>
            </Drawer.Navigator>
        </GestureHandlerRootView>
    );
}