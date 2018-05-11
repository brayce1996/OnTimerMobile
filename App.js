import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import Home from './src/components/HomeScreen'
import EventForm from './src/components/EventForm'
import Account from './src/components/AccountScreen'
import Notification from './src/components/NotificationScreen'

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class App extends React.Component {
  render() {
    return <AppNavigator />
  }
}

const AppNavigator = createBottomTabNavigator({
  Home: Home,
  'Add Event': EventForm,
  Notification: Notification,
  Account: Account
},
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home'){
          iconName = `ios-menu${focused ? '' : '-outline'}`;
        }else if (routeName === 'Add Event'){
          iconName = `ios-add${focused ? '' : '-outline'}`;
        } else if (routeName === 'Notification') {
          iconName = `ios-notifications${focused ? '' : '-outline'}`;
        } else if (routeName === 'Account'){
          iconName = `ios-contact${focused ? '' : '-outline'}`;
        }
        
        
        

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  }
);
