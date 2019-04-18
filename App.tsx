import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import ListScreen from './src/screens/ListScreen/ListScreen';

const App = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  List: {
    screen: ListScreen
  }},
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
)

export default createAppContainer(App);