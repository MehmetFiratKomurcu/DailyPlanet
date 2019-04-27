import React, {Component} from 'react';
import {View} from 'react-native';
import {Body, Button, Container, Header, Icon, Right, ScrollableTab, Tab, Tabs, Title, Footer, FooterTab, Text} from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import CardImageExample from "./cardPage";
import Request from "./Request"
import Tab3 from "./news"

export default class App extends Component {

    state = {
        data: []
    }

    constructor(){
        super();
        this.refresh = this.refresh.bind(this);
        setTimeout(this.refresh, 2000);
    };

    refresh(){
        this.componentDidMount();
        this.forceUpdate();
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

    shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
        this.refresh();
        return true;
    }


    render() {
        return (
            <Container>
                <Header hasTabs>
                    <Body>
                        <Title>Daily Planet</Title>
                    </Body>
                    <Button transparent onPress={() => {this.refresh()}}>
                        <Text>
                            Refresh
                        </Text>
                    </Button>
                </Header>
                <Tabs renderTabBar={() => <ScrollableTab/>}>
                    <Tab heading="All">
                        <Tab2 navigation={this.props.navigation} data={this.state.data.records}/>
                    </Tab>
                    <Tab heading="Sport">
                        <Tab2 navigation={this.props.navigation} data={this.state.data.records}/>
                    </Tab>
                    <Tab heading="Economy">
                        <Tab2 navigation={this.props.navigation} data={this.state.data.records}/>
                    </Tab>
                    <Tab heading="Politics">
                        <Tab2 navigation={this.props.navigation} data={this.state.data.records}/>
                    </Tab>
                    <Tab heading="Life">
                        <Tab2 navigation={this.props.navigation} data={this.state.data.records}/>
                    </Tab>
                    <Tab heading="Latest">
                        <Tab2 navigation={this.props.navigation} data={this.state.data.records}/>
                    </Tab>
                    {/*<Tab heading="Spor">*/}
                    {/*    <Tab1/>*/}
                    {/*</Tab>*/}
                    {/*<Tab heading="Magazin">*/}
                    {/*    <Tab3/>*/}
                    {/*</Tab>*/}
                    {/*<Tab heading="Economy">*/}
                    {/*    <Tab1 name={"mehmet"} abc={"564545"} xyz={"sdfdf"}/>*/}
                    {/*</Tab>*/}
                    {/*<Tab heading="Food">*/}
                    {/*    <Tab2/>*/}
                    {/*</Tab>*/}
                    {/*<Tab heading="Tab5">*/}
                    {/*    <CardImageExample/>*/}
                    {/*</Tab>*/}
                </Tabs>
            </Container>
        );
    }
}