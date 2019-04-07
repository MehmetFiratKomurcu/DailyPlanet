import React, {Component} from 'react';
import {Body, Button, Container, Header, Icon, Right, ScrollableTab, Tab, Tabs, Title, Footer, FooterTab, Text} from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import CardImageExample from "./cardPage";
import Request from "./Request"

export default class TabsScrollableExample extends Component {

    state = {
        data: []
    }

    componentDidMount(): void {
        Request.GET("http://192.168.43.237/DailyPlanet/read.php",{},{
            '200': (res) => {
                this.setState({data: res})
            },
            otherwise: () => {

            },
            fail: () => {
            }
        })
    }

    render() {
        return (
            <Container>
                <Header hasTabs>
                    <Body>
                        <Title>Daily Planet</Title>
                    </Body>
                </Header>
                <Tabs renderTabBar={() => <ScrollableTab/>}>
                    <Tab heading="All">
                        <Tab2 data={this.state.data.records}/>
                    </Tab>
                    <Tab heading="Spor">
                        <Tab1/>
                    </Tab>
                    <Tab heading="Magazin">
                        <Tab2/>
                    </Tab>
                    <Tab heading="Economy">
                        <Tab1 name={"mehöet"} abc={"564545"} xyz={"sdfdf"}/>
                    </Tab>
                    <Tab heading="Food">
                        <Tab2/>
                    </Tab>
                    <Tab heading="Tab5">
                        <CardImageExample/>
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}