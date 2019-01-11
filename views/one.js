/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View,Image} from 'react-native';


class MyText extends Component {
    constructor(props){
        super(props);
        this.state = { showText:true , color:"red"};

        setInterval(()=>{
            this.setState(previousState => {
                let color = previousState.color;
                if(previousState.showText===true){
                    if(color==="red"){
                        color="blue";
                    }else color="red"
                }

                return { showText: !previousState.showText,color:color};
            });
        },1000);
    }

    render() {

        if (!this.state.showText) {
            return  (
                <View style={{alignItems: 'center'}}>
                    <Text style={{opacity:0,color:this.state.color,fontSize:20}}>Hello {this.props.name}!</Text>
                </View>
            );
        }

        return (
            <View style={{alignItems: 'center'}}>
                <Text style={{opacity:1,color:this.state.color,fontSize:20}}>Hello {this.props.name}!</Text>
            </View>
        );
    }


}


export default class One extends Component<Props> {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={styles.container}>
                <Image source={pic} style={{width: 193, height: 110}} />
                <MyText name="小白"/>
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

export {One}