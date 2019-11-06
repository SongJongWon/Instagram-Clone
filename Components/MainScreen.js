import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";

import HomeTab from './AppTabNavigator/HomeTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'

//import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { Icon } from 'native-base'

class MainScreen extends Component {
    
    static navigationOptions = {
        headerLeft: <Icon name="ios-camera" style={{paddingLeft:10}}/>,
        title:"Instargram",
        headerRight: <Icon name="ios-send"  style={{paddingRight:10}}/>
    }
    
    render(){
        return (
            <AppTabNavigator/>
        );
    }
}
export default MainScreen;

const TabNavigator = createMaterialTopTabNavigator({

    HomeTab:{
        screen: HomeTab
    },
    SearchTab:{
        screen: SearchTab
    },
    AddMediaTab:{
        screen: AddMediaTab
    },
    LikesTab:{
        screen: LikesTab
    },
    ProfileTab:{
        screen: ProfileTab
    }

}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        style: {
            ...Platform.select({
                android:{
                    backgroundColor:'white'
                }
            })
        },
        iconStyle: { height: 40 },
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        upperCaseLabel: false,
        showLabel: false,
        showIcon: true
    } 
});

const AppTabNavigator = createAppContainer(TabNavigator);

