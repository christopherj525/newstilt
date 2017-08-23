import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native'
import CardList from '../components/CardList'

export default class AccountScreen extends React.Component {
  static navigationOptions = {
    title: 'Account'
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <CardList></CardList>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});