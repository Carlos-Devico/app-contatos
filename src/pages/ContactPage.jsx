import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import ListaContatos from '../components/ContactList';
import axios from 'axios';


export default class ContactPage extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      // estado vazio
      contatos: []
    };
  }

componentDidMount(){
  axios
  .get('https://randomuser.me/api/?nat=br&results=5')
  .then(response => {
    const { results } = response.data;
    this.setState({
      contatos: results,
      loading: false,
    });
    
  });
}



  render(){
    
    // this.props.navigation.navigate('ContactDetail');
    return (
      <View>
        <ListaContatos contatos = { this.state.contatos } onPressItem={ pageParams => {
          this.props.navigation.navigate('ContactDetail', pageParams);
        } }/>
      </View>
    );
  }
}


