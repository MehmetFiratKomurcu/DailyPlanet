import React, {Component} from 'react';
import {FlatList,View} from 'react-native';
import {Container, List, ListItem, Content, Text, Card, CardItem, Left, Thumbnail, Body, Image, Button, Icon, Right} from 'native-base';
import CardImageExample from "./cardPage";

const api = "http://192.168.43.237/DailyPlanet/"

export default class TabTwo extends Component {

    renderItem = ({item, index}) => {
        const imageUril = api + item.image_path;
        const com_image = "http://192.168.43.237/DailyPlanet/" + item.company_image;
        //console.warn(item)
        return(

            <CardImageExample  navigation={this.props.navigation} imageUri={imageUril} header={item.title} likeCount={item.like_count}
                               dislikeCount={item.dislike_count} time={item.date_time} view_count = {item.view_count} Company={item.company_name}
                               company_image={com_image} content={item.content} newsId={item.id} />

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