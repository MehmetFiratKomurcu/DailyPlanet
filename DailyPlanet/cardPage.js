import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class CardImageExample extends Component {
    render() {
        const{imageUri = "https://studiofreya.com/wp-content/uploads/2017/10/xreact-native-string-concatenation-hello-world-170x300.jpg.pagespeed.ic.okrM4dOdlm.webp",
             header = "Here is Header", Company = "Here is Company", likeCount = "99", dislikeCount = "99",
             time = "1 hour ago"} = this.props;
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: imageUri}} />
                                <Body>
                                <Text>{header}</Text>
                                <Text note>{Company}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{uri: imageUri}} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>{likeCount}</Text>
                                </Button>
                            </Left>
                            <Body>
                            <Button transparent>
                                <Icon active name="thumbs-down" />
                                <Text>{dislikeCount}</Text>
                            </Button>
                            </Body>
                            <Right>
                                <Text>{time}</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}