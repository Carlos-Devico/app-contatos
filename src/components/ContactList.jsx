import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ContactListItem from './ContactListItem'

const ContactList = props =>{
    const { contatos, onPressItem} = props;
    
    

const items = contatos.map(contato => 
    <ContactListItem key = {contato.name.first} contato={ contato } navigateToContactDetail={ onPressItem } />
)

  return  (
        <View style={styles.container}>
            { items }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2c698e',
    }
});

export default ContactList;


