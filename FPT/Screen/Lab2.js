import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, FlatList, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Data from '../DATA/Data';
import Add from './Add';

export default class Lab2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 0, Fullname: 'Võ Hoàng Thiện', YBirth: '1999', Address: 'HCM'},
        {id: 1, Fullname: 'Bùi Quỳnh Như', YBirth: '1996', Address: 'Q2'},
        {id: 2, Fullname: 'Nguyễn Đức Anh', YBirth: '1997', Address: 'Q4'},
        {id: 3, Fullname: 'Võ Tuấn Tài', YBirth: '2000', Address: 'Q5'},
        {id: 4, Fullname: 'Trần Tấn Tài', YBirth: '1998', Address: 'Q1'},
        {id: 5, Fullname: 'Trần Văn Quang', YBirth: '1999', Address: 'Q9'},
      ],
    };
  }

   
  onUpdate = (id,data) => {
    let listNews = this.state.data;
    listNews[id] = data;
    this.setState({data: listNews});
  };
  onSelect = (data) => {
    let listNew = [...this.state.data, data];
    this.setState({data: listNew});
  };
  onDeleteItem = (index) => {
    let newList = this.state.data.filter((item, i) => i != index);
    this.setState({data: newList});
  };
 
  renderItem = ({item, index}) => {
   
    return (
      <View style={styles.container}>
        <View style={{flex: 0.3, padding: 5}}>
          <Image
            source={require('../image/avatar2.png')}
            style={{height: 90, width: 90, borderRadius: 40}}
            resizeMode="cover"
          />
        </View>
        <View style={{flex: 0.7, justifyContent: 'center'}}>
          <View
            style={{
              flex: 0.5,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 0.7}}>
              <Text style={{fontSize: 20}}>{item.Fullname}</Text>
            </View>
            <View style={{flex: 0.2, paddingLeft: 20,alignItems: 'flex-end'}}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Update', {index : index,item: item,onUpdate: this.onUpdate})
                }>
                <Text style={{color: 'red', fontWeight: 'bold'}}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{flex: 0.5, justifyContent: 'center', flexDirection: 'row'}}>
            <View style={{flex: 0.4, justifyContent: 'center',alignItems :'flex-start' }}>
              <Text style={{fontSize: 20}}>{item.Address}</Text>
            </View>
            <View style={{flex: 0.3, justifyContent: 'center'}}>
              <Text style={{fontSize: 20}}>{item.YBirth}</Text>
            </View>
            <View
              style={{
                flex: 0.3,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity onPress={() => this.onDeleteItem(index)}>
                <Text style={{color: 'red', fontWeight: 'bold'}}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{paddingLeft: 125}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              Danh Sách Thực Tập
            </Text>
          </View>
          <View style={{paddingRight: 15}}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Add', {onSelect: this.onSelect})
              }>
              <Text style={{color: 'red', fontWeight: 'bold', fontSize: 30}}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={this.state.data}
          extraData={this.props}
          keyExtractor={(item, index) => index}
          renderItem={this.renderItem}
          // leftOpenValue={75}
          // rightOpenValue={-75}
        />
      </View>
    );
  }
}
Lab2.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'pink',
    flexDirection: 'row',
  },
});
