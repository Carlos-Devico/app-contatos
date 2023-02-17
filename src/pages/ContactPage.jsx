import React from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import axios from 'axios';
import ContactList from '../components/ContactList';


export default class ContactPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			contatos: [],
			loading: false,
			error: false,
		};
	}

	componentDidMount() {
		this.setState({ loading: true });
		setTimeout(() => {
			axios
				.get('https://randomuser.me/api/?nat=br&results=15')
				.then(response => {
					const { results } = response.data;
					this.setState({
						contatos: results,
						loading: false,
					});
				}).catch(error => {
					this.setState({ loading:false, error:true })
				});
		}, 3500)
	}

	renderPage() {
		if (this.state.loading) {
			return <ActivityIndicator size="large" color="#ff960d" />;
		}

		if (this.state.error) {
			return <Text style={styles.error}>Ops... Algo deu errado =(</Text>;
		}

		return (
			<ContactList
				contatos={this.state.contatos}
				onPressItem={pageParams => {
          console.log('Passou aqui !!!')
					this.props.navigation.navigate('ContactDetail', pageParams);
				}} />
		);
	}


	render() {
		return (
			<View style={styles.container}>
				{ this.renderPage() }
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	error: {
		color: 'red',
		alignSelf: 'center',
		fontSize: 18,
	}
});


