import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import CardFeed from '../components/CardFeed'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "NewsTilt",
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
