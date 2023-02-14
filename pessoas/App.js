import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

import Header from './src/components/Header';

export default class App extends React.Component {
 renderList(){
  /* Promisses */
  axios.get('https://randomuser.me/api/?nat=br&results=5').then(response => {

    const { results } = response.data
    const names  = results.map(people => people.name.first);
    console.log(names);
    
  })

  const textElements = names.map(x => {
    return <Text key={x}>{x}</Text>
  })
  return textElements;
 }


  render(){
    return (
      <View>
        <Header titulo="Pessoas"/>
        { this.renderList() }
        
      </View>
    );
  }
}


