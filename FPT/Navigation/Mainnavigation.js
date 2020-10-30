import {createStackNavigator} from 'react-navigation-stack';
import Lab1 from '../Screen/Lab1';
import Lab2 from '../Screen/Lab2';
import Home from '../Screen/Home';
import Add from '../Screen/Add';
import Update from '../Screen/Update';

const Appnavigation = createStackNavigator({
  Home: {
    screen: Home,
  },
  Lab1: {
    screen: Lab1,
  },
  Lab2: {
    screen: Lab2,
  },
  Add: {
    screen: Add,
  },
  Update : {
    screen : Update,
  }
},);
export default Appnavigation;
