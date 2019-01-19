/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import {Home} from './views/Home';
import {Setting} from './views/Setting';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator,createAppContainer } from 'react-navigation';

//tab导航
/*
const TabNavigator = createBottomTabNavigator(
    {
        '首页': Home,
        Settings: Setting,
        Profile:Three
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === '首页') {
                    iconName = `user${focused ? '' : '-o'}`;
                } else if (routeName === 'Settings') {
                    iconName = `comment${focused ? '' : '-o'}`;
                } else if (routeName === 'Profile') {
                    iconName = `bell${focused ? '' : '-o'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

export default createAppContainer(TabNavigator);

*/


const MyDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
            drawerLabel: '主页',
            drawerIcon: ({ tintColor }) => (
                <Icon name={"home"} size={20}/>
            ),
        }
    },
    Notifications:{
        screen:Setting,
        navigationOptions:{
            drawerLabel: '设置',
            drawerIcon: ({ tintColor }) => (
                <Icon name={"bell"} size={20}/>
            ),
        }

    }
}
);

export default createAppContainer(MyDrawerNavigator);