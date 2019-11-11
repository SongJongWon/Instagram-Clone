import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import {Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
//import { Colors } from 'react-native/Libraries/NewAppScreen';

class CardComponent extends Component {
    
    render() {
    
        const images = {
            "okinawa": require('../assets/okinawa.jpg'),
            "macau": require('../assets/macau.jpg'),
            "hongkong": require('../assets/hongkong.jpg')
        }

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/me.jpg')}/>
                        <Body>
                            <Text>Song </Text>
                            <Text note>Sep 11, 2019</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{height:200, width:null, flex:1}}/>
                </CardItem>
                <CardItem style={{height:45}}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart" style={{color:'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles" style={{color:'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send" style={{color:'black'}}/>
                        </Button>
                    </Left>
                </CardItem>

                <CardItem style={{height:20}}>
                    <Text>{this.props.likes} likes</Text>
                </CardItem>

                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{fontWeight:"900"}}>Song</Text>
                            #2 - Build The UI of the Feed Page of Instagram App Using React Native, React Navigation, StackNavigator, TabNavigator, Expo.io and Native Base 
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});