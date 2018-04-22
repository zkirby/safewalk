import React from 'react';
import { Text, View } from 'react-native';

export default class SwiperNode extends React.Component  {
    render () {

        const { info,  } = this.props;

        return (
            <View id="info_all" style={styles.container}>
                <View id="lower_text_body" style={styles.textBox}>
                    <Text className="routes-found" style={styles.title}> {routes_length} Routes Found </Text>
                    <Text className="average_safety" style={Object.assign({"color":rating["color"]}, styles.coloredText)}>Average Safety: { rating["message"] }</Text>
                    <Text className="average_time" style={styles.text}>Average Time: { rating_ag_time }</Text>
                </View> 
            </View>
        )
    }
}
