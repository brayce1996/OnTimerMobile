import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Home from './src/components/HomeScreen'
import EventForm from './src/components/EventForm'
import Account from './src/components/AccountScreen'
import Notification from './src/components/NotificationScreen'

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//       </View>
//     );
//   }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }
// }

export default createBottomTabNavigator({
  Home: Home,
  NewEvent: EventForm,
  Notification: Notification,
  Account: Account

});
