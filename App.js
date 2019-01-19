/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import {One} from './views/one';
import {Two} from './views/two';
import {Three} from './views/three';
import { Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator,createDrawerNavigator, createStackNavigator,createAppContainer,createSwitchNavigator } from 'react-navigation';

//tab导航
/*
const TabNavigator = createBottomTabNavigator(
    {
        '首页': One,
        Settings: Two,
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

class MyHomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    };

    render() {
        return (
           <One/>
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        title: 'Notifications',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }

    };

    render() {
        return (
            <View>
                   <Two/>
                <Button
                    onPress={() => this.props.navigation.openDrawer()}
                    title="open Drawer"
                />
            </View>
         
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

const AppNavigator1 = createStackNavigator({ 
    Home:{
        screen:MyHomeScreen,
        navigationOptions:{
            headerLeft:( <Icon
                name='bars' size={22} color="white" style={{marginLeft:20}}/>)
        }
    } 
});
const AppNavigator2 = createStackNavigator({ Notifications:{screen:MyNotificationsScreen} });

const MyDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppNavigator1,
        navigationOptions:{
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor }) => (
                <Icon name={"home"} size={20}/>
            ),
        }
    },
    Notifications:{
        screen:AppNavigator2,
     
        navigationOptions:{
            drawerLabel: 'Notifications',
            drawerIcon: ({ tintColor }) => (
                <Icon name={"bell"} size={20}/>
            ),
        }

    }
}
);

export default createAppContainer(MyDrawerNavigator);