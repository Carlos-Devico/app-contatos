import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { capitalizeFirstLetter } from "../util";



const ContactListItem = props => {
    const { contato } = props;
    const { title, first, last } = contato.name;
    return(

        <View style = { styles.line }>

        {/* Inserindo o avatar da API aqui */}
        <Image style={styles.avatar} source={ {uri: contato.picture.thumbnail} } />

           <Text style={ styles.lineText }>
             { `${
                   capitalizeFirstLetter(title)
                } ${
                   capitalizeFirstLetter(first)
                } ${
                   capitalizeFirstLetter(last)
                }`
             }
                 </Text>
        </View>

    );
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "bbb",
        alignItems:'center',
        flexDirection: 'row',
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        marginStart: 15,
        aspectRatio: 1 ,
       
        flex: 1,
        borderRadius: 50
    }
});

export default ContactListItem;