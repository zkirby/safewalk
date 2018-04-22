import React from 'react';
import { Text, View } from 'react-native';

export default class Info extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        let { name, rating, time } = props;

        return (
        <View>
            <Text className="route-name">{name}</Text>
            <Text className="route-safety" style={{"color":rating["color"]}}>Safety Rating: { rating["message"] }</Text>
            <Text className="route-time">Estimated time: {time}</Text>
            <Button title="Select this route" color="#2D9CDB"/>
        </View>
        );
    }
}

