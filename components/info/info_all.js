import React from 'react';
import { Text, View } from 'react-native';
//import '../../assets/css/info.scss';
//import saftey from '../../assets/utils';

export default class InfoAll extends React.Component  {

    render () {

        let routes = { "rout1": {"cost": 30},  "rout2": {"cost": 34} };
        let routes_length = Object.keys(routes).length;

        const rating = { "message": "okay", "color":"red" };
        const rating_keys = Object.keys(routes)
        const rating_ag_time = rating_keys.splice(0, 1).reduce((route1, route2)=>( routes[route1]["cost"] + routes[route2]["cost"] ), rating_keys[0]) / routes_length;

        let bubbles = [];
        for (let i=0; i<routes_length; i++) {
            bubbles.push(<Text key={i + ''} class="bubble"></Text>);
        }

        return (
            <View id="info_all">
                { bubbles }
                <Text class="routes-found">{routes_length} Routes Found</Text>
                <View id="lower_text_body">
                    <Text class="average_safety" style={{"color":rating["color"]}}>Average Safety: { rating["message"] }</Text>
                    <Text class="average_time">Average Time: { rating_ag_time }</Text>
                </View> 
            </View>
        )
    }
}