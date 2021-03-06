/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Button} from 'react-native-elements';
import {CustomHeader} from '../components/header';
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


export default class Home extends Component<Props> {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        const toggleDrawer = ()=>{
            this.props.navigation.toggleDrawer();
        };

        return (

            <View>
                    <CustomHeader leftIconPress={()=>{this.props.navigation.toggleDrawer();}} title="主页"></CustomHeader>
                    <Image source={pic} resizeMode={"cover"} style={styles.Image} />
                    <Button title="Button" buttonStyle={styles.Button} backgroundColor={"skyblue"}></Button>
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
    },
    Image:{
        width:"100%",
        height:221
    },
    Button:{
        marginTop:20,
        width:120,
        height:48,
        marginLeft:"auto",
        marginRight:"auto"
    }
});

export {Home}