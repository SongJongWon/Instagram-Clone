import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import {Icon, Container, Content} from 'native-base' 
import CardComponent from '../CardComponent'

class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor})=>(
            <Icon name="ios-home" style={{color:tintColor}} />
        )
    }
    
    render(){
        return (
            <Container style={styles.container}>
                <Content>
                    <CardComponent imageSource="okinawa" likes="101"/>
                    <CardComponent imageSource="macau" likes="40"/>
                    <CardComponent imageSource="hongkong" likes="72"/>
                </Content>
            </Container>
        );
    }
}
export default HomeTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',

    }
});
