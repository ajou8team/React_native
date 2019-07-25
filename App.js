import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

// class CounterButton extends React.Component {
//   static defaultProps ={
//     counter : -1,
//   };
 
//   constructor(props){
//     super(props);
//     this.state = {
//       counter: props.counter,
//     }
//   }
//   clickHandler = () => {
//     this.setState({
//       counter: this.state.counter +1,
//     });
//   };
//   render(){
//     return (
//       <View style={styles.buttonContainer}>
//         <Text>{this.state.counter}</Text>
//          <Button title={'click me!'} onPress={this.clickHandler}/>
//       </View>
//     );
//   }
// }

export default class App extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        {/* <CounterButton counter = {0}/>
        <CounterButton count ={1} />
        <CounterButton counter = {1}/>
        <CounterButton counter = {2}/>
        <CounterButton counter = {3}/>
        <Text style={styles.text}>1</Text>
        <Text style={[styles.text, styles.text2]}>2</Text>
        <Text style={styles.text}>3</Text> */}
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, }}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    borderColor: 'red',
    borderWidth: 2,
    // justifyContent: 'center',
    // alignItems: 'stretch',
  },

  // text: {
  //   flex: 1,
  //   borderWidth: 1,
  //   borderColor: 'red',

  //   textAlign: 'center',
  //   textAlignVertical: 'center',
  //   fontSize: 24,
  //   fontWeight: 'bold',
  // },

  // text2: {
  //   flex: 2,
  // }
  // buttonContainer:{
  //   width: '100%',
  // },
});
