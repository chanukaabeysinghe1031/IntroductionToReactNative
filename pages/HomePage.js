import React from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

export class HomePage extends React.Component {

  static navigationOptions = {
    title: 'Home Page',
  };

  constructor(props) {
    super(props);
    this.state = {
      name: 'ABC'
    }
  }

  goto = ()=> {
    this.props.navigation.navigate('Details');
  }

  changeText = (txt)=> {
    this.setState({
      name: txt
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>{this.state.name}</Text>
        <Button title="Go To Details" onPress={this.goto}/>
        <TextInput style={styles.txtInp} onChangeText={this.changeText}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#90EE90'
  },
  txt: {
    fontSize: 40
  },
  txtInp: {
    marginTop: 50,
    width: '80%',
    height: 40,
    backgroundColor: 'white'
  }
});