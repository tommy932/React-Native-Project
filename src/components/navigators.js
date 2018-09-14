//Navigators
import { createDrawerNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import React from 'react';
import { Button, View, Icon } from 'react'
import { DrawerActions } from 'react-navigation'

//StackNavigator screens
import ItemList from './ItemList'
import Item from './Item'

//TabNavigator screens
import TabA from './TabA'
import TabB from './TabB'
import TabC from './TabC'

//Plain old component
import Plain from './Plain'

export const Stack = createStackNavigator({
  ItemList: { screen: ItemList },
  Item: { screen: Item },
}, {
    initialRouteName: 'ItemList',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft: (
        <View key={1654} style={{marginLeft: 10}}>
          <Icon
            name="menu"
            size={25}
            color="#D4AF37"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
        </View>
      ),
    },
  }
);

export const Tabs = createBottomTabNavigator({
  TabA: { screen: TabA },
  TabB: { screen: TabB },
  TabC: { screen: Stack },
}, {
    order: ['TabA', 'TabB', 'TabC']
  })

export const Drawer = createDrawerNavigator({
  Stack: { screen: Stack },
  Tabs: { screen: Tabs },
  Plain: { screen: Plain },
},
  {
    useNativeAnimations: true
  })