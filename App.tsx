import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import DetailScreen from './src/screens/DetailScreen/DetailScreen';

const App = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detail: {
    screen: DetailScreen
  }},
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
)

export default createAppContainer(App);