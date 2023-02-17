import { FlatList, Text, StyleSheet } from "react-native";
import ContactListItem from './ContactListItem'


const ContactList = props => {
	const { contatos, onPressItem } = props ;

	return (
		<FlatList
			style={styles.container}
			data={contatos}
            // renderiando cada item com renderItem
			renderItem={({ item }) => (
				<ContactListItem
					contato={item}
					navigateToContactDetail={onPressItem} />
			)}
            // define chaves para cada item, usar o email
			keyExtractor={item => item.email} />
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e2f9ff'
	},
})

export default ContactList;



