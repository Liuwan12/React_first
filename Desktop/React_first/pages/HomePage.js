import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button} from 'react-native';

export default class HomePage extends Component{
    static navigationOptions={
      title: "Home",
      headerBackTitle:'返回哈哈'
    }
    render() {
      const {navigation}=this.props
        return (
          <View style={styles.container}>
    
           <Text>欢迎来到homepage</Text>
            <Button
              title="Go to Page1"
              onPress={()=>{
                navigation.navigate('Page1',{name:'动态的'})
              }}
            />  
            <Button
              title="Go to Page2"
              onPress={()=>{
                navigation.navigate('Page2')
              }}
            />
            <Button
              title="Go to Page3"
              onPress={()=>{
                navigation.navigate('Page3',{title:'Devio'})
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