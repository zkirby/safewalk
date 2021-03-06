import React from 'react';
import { Text, View } from 'react-native';
//import saftey from '../../assets/utils';

export default class InfoAll extends React.Component  {
    render () {

        const {rating, avg_dur, rlen} = this.props;
         
        return (
            <View id="info_all" style={styles.container}>
                <View id="lower_text_body" style={styles.textBox}>
                    <Text className="routes-found" style={styles.title}> {rlen} Routes Found </Text>
                    <Text className="average_safety" style={Object.assign({"color":rating["color"]}, styles.coloredText)}>Average Safety: { rating["message"] }</Text>
                    <Text className="average_time" style={styles.text}>Average Time: { avg_dur }</Text>
                </View> 
            </View>
        )
    }
}

const styles = {
    container: {
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "#FAFAFA",
        bottom: 0,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingLeft: 32,
        paddingBottom: 16,
        zIndex: 10,
    },
    textBox: {
        marginTop: 8,
    },
    text: {
        position: "relative",
        marginBottom: 8,
        color: "#A3A3A3",
        fontSize: 16,
        marginLeft: 24,

    },
    coloredText: {
        position: "relative",
        marginBottom: 4,
        fontSize: 16,
        marginLeft: 24,
    },
    title: {
        position: "relative",
        fontSize: 20,
        marginBottom: 6,
        color: "#676767",
    },
    bubbleContainer: {
        flex: 1,
        flexDirection: "row",
        marginTop: 8,
        marginLeft: -24,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    bubble: {
        height: 8,
        width: 8,
        borderRadius: "50%",
        backgroundColor: "#D3D3D3",
        marginRight: 10,
    }
}
