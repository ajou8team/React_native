import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class App extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <CounterButton counter = {0}/>
        <CounterButton counter = {1}/>
        <CounterButton counter = {2}/>
        <CounterButton counter = {3}/>
      </View>
    );
  }

}
class CounterButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter: props.counter,
    }
  }
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
