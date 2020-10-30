import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {newName: '', newYBirth: '', newAddress: ''};
  }
  AddNewSV = () => {
    let ObjNew = {
      Fullname: this.state.newName,
      YBirth: this.state.newYBirth,
      Address: this.state.newAddress,
    };
    // const {navigation} = this.props;
    this.props.navigation.goBack();
    this.props.navigation.state.params.onSelect(ObjNew);
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.txtInput}
          placeholder=" Ho va Ten"
            onChangeText = {(text) =>this.setState({newName:text})}
        />
        <TextInput
          style={styles.txtInput}
          placeholder="Nam Sinh"
            onChangeText = {(text) =>this.setState({newYBirth:text})}
        />
        <TextInput
          style={styles.txtInput}
          placeholder="Dia chi"
          onChangeText = {(text) =>this.setState({newAddress:text})}
        />
        <TouchableOpacity onPress={() => this.AddNewSV()} style={styles.sumit}>
          <Text style={{color: 'white'}}>ADD</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
Add.navigationOptions = {
  
      header:null,
      
    

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  txtInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 7,
  },
  sumit: {
    height: 40,
    backgroundColor: 'black',
    marginHorizontal: 50,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius : 20
  },
});
