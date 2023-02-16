import 'react-native-gesture-handler'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ContactPage from "./src/pages/ContactPage";

 
const AppNavigator = createStackNavigator({
  'Contatos': {
    screen: ContactPage
  }
});
 
 
const AppContainer = createAppContainer(AppNavigator);
 
 
export default AppContainer;
