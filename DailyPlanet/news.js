import React, {Component} from 'react';
import {FlatList, Image, View} from 'react-native';
import {Container, List, ListItem, Content, Text, Card, CardItem, Left, Thumbnail, Body, Button, Icon, Right} from 'native-base';
import App from "./App";


// <Text>{this.props.navigation.state.params.header}</Text>
export default class news extends Component{

    constructor(props){
        super(props)
        this.state = {
            issetLikeCount: false,
            issetDislikeCount: false,
            likeCount: this.props.navigation.state.params.likeCount,
            dislikeCount: this.props.navigation.state.params.dislikeCount
        }
    }

     postLike(thiss) {
        if(this.state.issetLikeCount == false) {
            this.setState({issetLikeCount: true})
            this.updateLikeText()
            return fetch('http://192.168.43.237/DailyPlanet/update.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: thiss.navigation.state.params.newsId,
                    like_count: 'yes',
                })
            })
        }else{
            alert("aaa")
        }
    }

    postDislike(thiss) {
        this.updateDislikeText()
        return fetch('http://192.168.43.237/DailyPlanet/update.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: thiss.navigation.state.params.newsId,
                dislike_count: 'yes',
            })
        })

    }

    updateLikeText = () => {
        this.setState({likeCount: parseInt(this.state.likeCount) + 1})
    }

    updateDislikeText = () => {
        this.setState({dislikeCount: parseInt(this.state.dislikeCount) + 1})
    }

    render() {
        //const imageUril = this.props.navigation.state.params.likeCount;
        //const {imageUri} = this.props;
        //const imageUri = "http://192.168.43.237/DailyPlanet/" + data.image_path;
        return(
            <Container>
                <Content style = {{padding:20}}>
                    <Text>{this.props.navigation.state.params.header}</Text>
                    <Image source={{uri: this.props.navigation.state.params.imageUri}} style={{height: 200, width: null, flex: 1}}/>
                    <Text>{this.props.navigation.state.params.content}</Text>
                    <Text>{this.props.navigation.state.params.view_count} kez görüntülendi.</Text>

                        <Button transparent onPress={() => {this.postLike(this.props)}}>
                            <Icon active name="thumbs-up" />
                            <Text id = 'likeCountId'>
                                {this.state.likeCount}
                            </Text>
                        </Button>

                        <Button transparent onPress={() => {this.postDislike(this.props)}}>
                            <Icon active name="thumbs-down" />
                            <Text>
                                {this.state.dislikeCount}
                            </Text>
                        </Button>

                </Content>
            </Container>
        );
    }

}