import React, { Component } from 'react'
import { Text, TextInput, View ,StyleSheet, TouchableOpacity, Alert} from 'react-native'

export default class Lab1 extends Component {


  constructor(props){
    super(props);
    this.state ={ a:0 , b:0 , c:0 , result :'123'}
  }
  sumit = () =>{
    let detail =  this.state.b * this.state.b - 4* this.state.a* this.state.c;
    if ( detail > 0){
      let x1 = ((-1 * this.state.b) + Math.sqrt(detail)) / (2 *this.state.a);
      let x2 = ((-1 * this.state.b) - Math.sqrt(detail)) / (2 *this.state.a);
      let kq = 'Phuong trinh co hai nghiem ' + x1.toString() + ' va ' + x2.toString();
      Alert.alert('',kq,[{text: 'OK',style: 'cancel',},],{cancelable: true,},);
    }
    
    if( detail  == 0 ){
      let x = (-1 * this.state.b)/ (2*this.state.a)
      let kq = 'Phuong trinh co nghiem kep' + 'x1 = x2 = ' + x.toString();
      Alert.alert('',kq,[{text: 'OK',style: 'cancel',},],{cancelable: true,},);
    }
    if ( detail < 0){
      let kq = 'Phuong trinh vo nghiem ';
      Alert.alert('',kq,[{text: 'OK',style: 'cancel',},],{cancelable: true,},);
    }
  };
  render() {
    return (
      <View style = {styles.container}>
        <TextInput 
          style={styles.txtInput}
          placeholder = "Nhap a"
          onChangeText = {(text) =>this.setState({a:text})}
        /> 
        <TextInput 
          style={styles.txtInput}
          placeholder = "Nhap b"
          onChangeText = {(text) =>this.setState({b:text})}
        />
        <TextInput 
        style={styles.txtInput}
        placeholder = "Nhap c"
        onChangeText = {(text) =>this.setState({c:text})}
        />
        <TouchableOpacity 
        onPress={ () =>this.sumit()}
        style={styles.sumit}>
          <Text style={{color:'white'}}>SUMIT</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
Lab1.navigationOptions= {
  headerShown: false,
}
const styles = StyleSheet.create({
  container :{
  flex : 1,
  marginHorizontal : 10,
  marginVertical: 20,
 } ,
 txtInput : {
   height : 40,
   borderColor: 'gray',
   borderWidth: 1,
   marginTop : 7
 },
 sumit :{
  height : 40,
  backgroundColor: 'black',
  marginHorizontal : 50,
  marginVertical: 10,
  justifyContent : 'center',
  alignItems : "center",
  borderRadius : 20
 }
});
