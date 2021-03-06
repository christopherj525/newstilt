import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import CardFeed from '../components/CardFeed'
import SwiperComponent from '../components/SwiperComponent'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Screen B",
    headerLeft: null
  };

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={styles.container}>
        <CardFeed/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
