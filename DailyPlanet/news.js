import React, {Component} from 'react';
import {FlatList, Image} from 'react-native';
import {Container, List, ListItem, Content, Text, Card, CardItem, Left, Thumbnail, Body, Button, Icon, Right} from 'native-base';


// <Text>{this.props.navigation.state.params.header}</Text>
export default class news extends Component{

    render() {
        //const imageUril = this.props.navigation.state.params.likeCount;
        //const {imageUri} = this.props;
        //const imageUri = "http://192.168.43.237/DailyPlanet/" + data.image_path;
        return(
            <Container>
                <Content style = {{padding:20}}>
                    <Text>{this.props.navigation.state.params.imageUri}</Text>
                    <Image source={{uri: "http://192.168.43.237/DailyPlanet/images/martian.jpg"}} style={{height: 200, width: null, flex: 1}}/>
                    <Text>{this.props.navigation.state.params.content}</Text>
                </Content>
            </Container>
        );
    }

}