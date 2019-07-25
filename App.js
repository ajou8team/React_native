import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class App extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <CounterButton/>
      </View>
    );
  }

}
class CounterButton extends React.Component {
  state = {
    counter : 0,
  };
  clickHandler = () => {
    this.setState({
      counter: this.state.counter +1,
    });
  };
  render(){
    return (
      <View>
        <Text>{this.state.counter}</Text>
         <Button title={'click me!'} onPress={this.clickHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
