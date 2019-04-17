import React, {Component} from 'react';
import {Container, Text} from 'native-base';

export default class TabsAdvancedExample extends Component {

    state = {
        data:""
    }

    componentDidMount() {

    }

    render() {
        const {name = "name", abc="abc", xyz="xyz"} = this.props;
        return (
            <Container>
                <Text>Sayfa 4</Text>
                <Text>{name}</Text>
                <Text>{abc}</Text>
                <Text>{xyz}</Text>
            </Container>
        );
    }
}