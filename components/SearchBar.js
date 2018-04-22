import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, TextInput } from 'react-native';
import MapView from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import utils from '../../assets/utils';
 
export default class SearchBar extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	startLocation: "Start Location",
	    	destination: "Destination",
	    };
	  }
	  
	shouldComponentUpdate(nextProps, nextState) {
		const startLocation1 = nextState;
		const destination1 = nextState;
		const startLocation2 = this.state.startLocation;
		const destination2 = this.state.destination;

		return (startLocation1 !== startLocation2) && (destination1 !== destination2);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		this.props.pubsub.publish("new-search", [this.state.startLocation, this.state.destination]);
	}

	render() {
		return (
			<View style={styles.searchSection}>
				<TextInput
					className="startLocation"
			        style={styles.button}
			        onChangeText={(text) => this.setState({startLocation: text})}
			        value={this.state.startLocation}
			    />
			    <TextInput 
			    	className="destination"
			        style={styles.button}
			        onChangeText={(text) => this.setState({destination: text})}
			        value={this.state.destination}
			    />
			</View>
		);
	}
}

const {height, width} = Dimensions.get('window');
const styles = {
	searchSection: {
		width: "100%",
		backgroundColor: "#fafafa",
		paddingLeft: 24,
		paddingRight: 24,
		paddingBottom: 24,
		paddingTop: 24,
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		zIndex: 10,
	},

	button: {
		height: 40, 
		backgroundColor: "#F3F3F3",
		paddingLeft: 16,
		paddingRight: 16,
		marginTop: 12,
	}
}