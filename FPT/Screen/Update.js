import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      newName: '',
      newYBirth: '',
      newAddress: '',
    };
  }

 async componentDidMount() {
    let dataa = this.props.navigation.getParam('item', 'NO-Data')
   await this.setState({data:dataa , newName :dataa.Fullname, newYBirth : dataa.YBirth, newAddress : dataa.Address },()=>console.log(this.state.newAddress));
  }

  Update = () => {
    let ObjNew = {
      Fullname: this.state.newName,
      YBirth: this.state.newYBirth,
      Address: this.state.newAddress,
    };
    this.props.navigation.state.params.onUpdate( this.props.navigation.getParam('index', 'NO-Data'), ObjNew);
    
    this.props.navigation.goBack();
   
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.txtInput}
          placeholder=" Ho va Ten"
          
          onChangeText={(text) => this.setState({newName: text})}
        />
        <TextInput
          style={styles.txtInput}
          placeholder="Nam Sinh"
          
          onChangeText={(text) => this.setState({newYBirth: text})}
        />
        <TextInput
          style={styles.txtInput}
          placeholder="Dia chi"
          
          onChangeText={(text) => this.setState({newAddress: text})}
        />
        <TouchableOpacity
          style={styles.sumit}
          onPress={() => {
            this.Update();
          }}>
          <Text style={{color: 'white'}}>SAVE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sumit}
          onPress={() => this.props.navigation.goBack()}>
          <Text style={{color: 'white'}}>BACK</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
Update.navigationOptions = {
  header: null,
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
    // marginVertical: 10,
    marginTop: 10,

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
