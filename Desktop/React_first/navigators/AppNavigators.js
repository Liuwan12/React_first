import { createStackNavigator ,createAppContainer} from 'react-navigation'
import HomePage from '../pages/HomePage'
import Page1 from '../pages/Page1' 
import Page2 from '../pages/Page2'
import Page3 from '../pages/page3'
import React from 'react'
import {Button} from 'react-native'

const AppStackNavigator =  createStackNavigator({
    HomePage: {
        screen: HomePage,
        // navigationOptions:{
        //     title: "Home"
        // }
    },
    Page1: {
        screen: Page1,
        navigationOptions:({navigation})=>({
            title: `${navigation.state.params.name}页面名`
        })
    },
    Page2: {
        screen: Page2,
        navigationOptions:{
            title:"page2"
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions:(props)=>{
            const {navigation} = props;
            const {state,setParams} = navigation;
            const {params}=state;
            return {
                title: params.title?params.title:'This is Page3',
                headerRight:(
                    <Button
                        title={params.mode==='edit'?'保存':'编辑'}
                        onPress={()=>{
                            setParams({mode:params.mode==='edit'?"":"edit"})
                        }}
                    />
                )
            }
        }
    },
},{
    navigationOptions:{
        // header: null
    }
});
export default createAppContainer(AppStackNavigator)
