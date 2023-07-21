import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import Dashboard from "../screens/Dashboard";
import Settings from "../screens/Settings";

const Tab = createMaterialBottomTabNavigator();

export default class TabNavigator extends Component{
    render(){
        return(
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Dashboard} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
        )
    }
}