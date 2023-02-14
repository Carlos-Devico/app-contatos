import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';

export default class App extends React.Component {
 renderList(){
  const names = [
    'Edie',
    'Paul',
    'Snoopy'
  ];

  const textElements = names.map(x => {
    return <Text>{x}</Text>
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


