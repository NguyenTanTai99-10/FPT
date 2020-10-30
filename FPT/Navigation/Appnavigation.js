
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Mainnavigation from './Mainnavigation';

const containerMain = createAppContainer (Mainnavigation);
export default containerMain;