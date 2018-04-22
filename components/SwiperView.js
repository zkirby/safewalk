import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import store from '../store/store';
import { connect } from 'react-redux';

import Swiper from 'react-native-swiper';

class SwiperView extends Component {

  constructor(props) {
    super(props);
  } 


  render(){
    return (
      <Swiper onIndexChanged={(index)=>{ this.props.pubsub.publish("swipe", index) }} style={styles.wrapper} showsButtons={true}>
        { this.props.children.map((x) => (<View style={styles.slide1}>{x}</View>)) }
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})


const mapStateToProps = state => ({
  views: state.views
});

const mapDispatchToProps = dispatch => {};

export default SwiperView;