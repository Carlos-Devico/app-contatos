import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import ContactPage from './src/pages/ContactPage';
import ContactDetailPage from './src/pages/ContactDetailPage';




const AppNavigator = createStackNavigator({
  'Main': {
    screen: ContactPage
  },
 
  'ContactDetail': {
    screen: ContactDetailPage,
  }
},
{
  defaultNavigationOptions: {
    title: 'Contatos',

    headerStyle: {
      backgroundColor: '#0bdb',
      borderBottomWidth: 1,
      borderBottomColor: '#e69413',
    },
    headerTitleStyle: {
      color:'white',
      fontSize: 20,
      alignSelf: 'center',
      
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;