import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export class DetailsPage extends React.Component {

  static navigationOptions = {
    title: 'Details Page',
  };

  goto = ()=> {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>DetailsPage</Text>
        <Button title="Go To Back" onPress={this.goto}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFB6C1'
  }
});