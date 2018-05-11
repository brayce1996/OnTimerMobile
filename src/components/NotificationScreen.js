import React from 'react';
import { Text, View } from 'react-native';

export default class NotificationScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>History of hosting or being added to events</Text>
            </View>
        );
    }
}