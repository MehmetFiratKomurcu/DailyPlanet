import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {Container, List, ListItem, Content, Text, Card, CardItem, Left, Thumbnail, Body, Image, Button, Icon, Right} from 'native-base';
import CardImageExample from "./cardPage";

export default class TabTwo extends Component {

    renderItem = ({item, index}) => {
        const imageUril = "http://192.168.43.237/DailyPlanet/" + item.image_path;
        console.warn(item)
        return(
            <CardImageExample  imageUri = {imageUril} header = {item.title} likeCount = {item.like_count}
                               dislikeCount = {item.dislike_count} time = {item.date_time}/>
        )
    }

    render() {
        const {data} = this.props;
        return (
            <Container>
               <Content style={{padding:20}}>
                   <FlatList
                       data={data}
                       renderItem={this.renderItem}
                       keyExtractor={(item,index) => index.toString()}
                   />
               </Content>
            </Container>
        );
    }
}