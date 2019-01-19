/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button} from 'react-native-elements';
import {CustomHeader} from '../components/header'
import {Platform, StyleSheet, Text, View,Image} from 'react-native';

export default class Setting extends Component<Props> {
    render() {

        return (
            <View>
                 <CustomHeader leftIconPress={()=>{this.props.navigation.toggleDrawer();}} title="设置"></CustomHeader>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

export {Setting}