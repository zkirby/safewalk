import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
 
export default class MapSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allRoutes: allRouteLines(),
      allCrimes: allCrimeMarkers(),
      currentRoute: allRouteLines(),
    };

    this.props.pubsub.subscribe("swipe", (data) => {
      this.setState({
        allRoutes: data == 0 ? this.state.allRoutes : this.state.allRoutes[data - 1],
      });
    })
  }

  allCrimeMarkers() {
    let crimeMarkers = this.props.crimes.map(function(crime) {
      return (
        <MapView.Marker
            key={crime.cid}
            coordinate={{
              latitude: crime.lat,
              longitude: crime.lon,
            }}
        >
          <Image
            resizeMode={Image.resizeMode.cover}
            style={{
              width: 25,
              height: 25,
              borderRadius:25/2,
              overflow:'hidden',
              backgroundColor:'#EB5757',
            }}
            source={require('../assets/images/alert.svg')}
          />
          <MapView.Callout style={{width:120}}>
            <View>
              <Text style = {{fontSize: 12}}>{crime.type} {"\n"}{crime.date}</Text>
            </View>
          </MapView.Callout>
        </MapView.Marker>
      );
    })

    return crimeMarkers
  }

  decode(t,e) {for(var n,o,u=0,l=0,r=0,d= [],h=0,i=0,a=null,c=Math.pow(10,e||5);u<t.length;){a=null,h=0,i=0;do a=t.charCodeAt(u++)-63,i|=(31&a)<<h,h+=5;while(a>=32);n=1&i?~(i>>1):i>>1,h=i=0;do a=t.charCodeAt(u++)-63,i|=(31&a)<<h,h+=5;while(a>=32);o=1&i?~(i>>1):i>>1,l+=n,r+=o,d.push([l/c,r/c])}return d=d.map(function(t){return{latitude:t[0],longitude:t[1]}})}

  allRouteLines() {
    const routes = this.props.mapData.routes;
    let allRoutes = routes.map((route) => {
      return (
        <MapView.Polyline
          coordinates={this.decode(route.overview_polyline.points)}
          strokeWidth={4}
        />
      );
    })
    return allRoutes
  }


  render() {
    const lat = (this.props.mapData.routes[0].bounds.northeast.lat + this.props.mapData.routes[0].bounds.southwest.lat) / 2;
    const lon = (this.props.mapData.routes[0].bounds.northeast.lng + this.props.mapData.routes[0].bounds.southwest.lng) / 2;
    const latDelta = (this.props.mapData.routes[0].bounds.northeast.lat - this.props.mapData.routes[0].bounds.southwest.lat) * 1.1;
    const lonDelta = (this.props.mapData.routes[0].bounds.northeast.lng - this.props.mapData.routes[0].bounds.southwest.lng) * 1.1;

    return (
       <MapView
            scrollEnabled={false}
            style={styles.map}
            region={{
              latitude: parseFloat(lat),
              longitude: parseFloat(lon),
              latitudeDelta: latDelta,
              longitudeDelta: lonDelta,
            }}
            showUserLocation={true}
            followsUserLocation={true}
            scrollEnabled ={true}
          >
          {this.state.allCrimes}
          {this.state.currentRoute}
      </MapView>
    );
  }
}
var {height, width} = Dimensions.get('window');
const styles = {
  map: { 
    width: width, 
    height: "60%",
  }
}

