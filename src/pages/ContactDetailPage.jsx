import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import Line from "../components/Line";

export default class ContactDetailPage extends React.Component{
    render(){
        // recebendo os dados do componente de  contactListItem
        const { contato } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
            <Image source={{ uri: contato.picture.large }}
					style={styles.avatar}/>
                <View style={styles.detailContainer}>
					<Line label="Email:" content={contato.email} />
					<Line label="Cidade:" content={contato.location.city} />
					<Line label="Estado:" content={contato.location.state} />
					<Line label="Tel:" content={contato.phone} />
					<Line label="Cel:" content={contato.cell} />
					<Line label="Nacionalidade:" content={contato.nat} />
					
				</View>
			</View>
        );
    }
}

const styles = StyleSheet.create({
	container: {
		padding: 25,
	},
	avatar: {
		aspectRatio: 1
	},
	detailContainer: {
		backgroundColor: '#0f49c7',
		marginTop: 15,
		elevation: 1
	},
});

