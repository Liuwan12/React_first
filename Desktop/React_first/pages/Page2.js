import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button} from 'react-native';

export default class Page2 extends Component{
    render() {
        const {navigation} = this.props;
        return (
          <View style={styles.container}>
    
           <Text>欢迎来到page2</Text>
           <Button 
            title="Go Back"
            onPress={()=>{
                navigation.goBack();
            }}
           />     
          </View>
        )
      }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
      justifyContent: 'center',
      alignItems: 'center',
    }
});