import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import ContactPage from './src/pages/ContactPage';
import ContactDetailPage from './src/pages/ContactDetailPage';

import { capitalizeFirstLetter } from './src/util';


const AppNavigator = createStackNavigator({
  'Main': {
    screen: ContactPage
  },
 
  'ContactDetail': {
    screen: ContactDetailPage,
    // função passsando o nome do contato de modo dinamico
    navigationOptions:({navigation}) => {
      const nomeContato = capitalizeFirstLetter(navigation.state.params.contato.name.first)
      return ({
        title: nomeContato,
        headerTitleStyle: {
          color:'white',
          fontSize: 20,
         
          
        }
      })
    }
  }
},
{
  defaultNavigationOptions: {
    title: 'Contatos',
    headerTintColor:'#f1a11f',
   

    headerStyle: {
      backgroundColor: '#00dda6cc',
      borderBottomWidth: 1,
      borderBottomColor: '#038033',
    },
    headerTitleStyle: {
      color:'#ffffff',
      fontSize: 20,
      alignSelf: 'center',
      
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;