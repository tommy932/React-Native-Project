// In App.js in a new project
import { Drawer } from './src/components/navigators'
import { AppRegistry } from 'react-native'
import React from 'react';
import { View, Text, Button , StyleSheet} from 'react-native';

AppRegistry.registerComponent('RNNavigators', () => Drawer );

export default class App extends React.Component {
  render() {
    return(
      <Drawer></Drawer>
      
    );
  }
}

/*
import React from 'react';
import { View, Text, Button , StyleSheet} from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';


class MyHomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
            </View>
    );
  }
}




class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyApp = createDrawerNavigator({
  FirstStackScreen: {
    screen: MyHomeScreen,
  },
  SecondScreen: {
    screen: MyNotificationsScreen,
  },
});



const RootStack = createStackNavigator(
  {
    FirstStackScreen: MyHomeScreen,
    SecondStackScreen: MyNotificationsScreen,
  },
  {
    initialRouteName: 'FirstStackScreen',
  
  navigationOptions : {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  },
  
}
);

export default class App extends React.Component {
  render() {
    return(

     <RootStack />
    );
  }
}


/*

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details' , {
            itemId: 86
          })}
        />
      </View>
    );
  }
}
class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };
  render() {

    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Button
          title="Go to TEST"
          onPress= {() => this.props.navigation.push('Details')}
          />
      </View>
    );
  }
}
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  
  navigationOptions : {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  },
  
}
);

export default class App extends React.Component {
  render() {
    return(

     <RootStack />
    );
  }
}
*/