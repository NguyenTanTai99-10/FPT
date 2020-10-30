import React, { Component } from 'react'
import { Button, Text, View ,StyleSheet} from 'react-native'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state ={

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Button title ="Lab1" onPress={()=> this.props.navigation.navigate('Lab1')}>
                    
                </Button>
                <Button title ="Lab2" onPress={()=> this.props.navigation.navigate('Lab2')}>
                    
                </Button>
            </View>
        )
    }
}

Home.navigationOptions = {
    header : null
};
const styles = StyleSheet.create({
    container : {
        flex :1 ,
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        alignItems : 'center'

    }
});


