/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import MainScreen from './App';
import {name as appName} from './app.json';
import {createAppContainer, createStackNavigator} from "react-navigation";
import Tab3 from "./news";

const MainNavigator = createStackNavigator({
    Main: {screen: MainScreen},
    News : {screen: Tab3}
},{
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
}
    )
const App = createAppContainer(MainNavigator);


AppRegistry.registerComponent(appName, () => App);
