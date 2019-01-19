import React, {Component} from 'react';
import { Header} from 'react-native-elements';

class CustomHeader extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            < Header
            
            leftComponent = {
                {
                    icon: 'menu',
                    color: '#fff',
                    onPress:this.props.leftIconPress
                }
            }
            centerComponent = {
                {
                    text: this.props.title?this.props.title:"",
                    style: {
                        color: '#fff'
                    }
                }
            }
            rightComponent = {
                {
                    icon: 'home',
                    color: '#fff'
                }
            }
            />);

    }
}

export {CustomHeader}