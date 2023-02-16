import React from "react";
import { View, Text, StyleSheet } from "react-native";



/* Componente */
const Header = (props) => (
    <View style={style.container}>
        <Text style = {style.title}> { props.titulo } </Text>
    </View>
);

/* Stylesheet */
const style = StyleSheet.create({
    container: {
        marginTop: 15,
        backgroundColor: '#001f3d',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 50,
        color: '#e87a00',
    }

});

export default Header;