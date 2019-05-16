import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

import Map from '../screens/Map';
import Welcome from '../screens/Welcome';

const TabNavigator = createBottomTabNavigator({
    Map,
    Welcome
}, {
    defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
            const {routeName} = navigation.state;
            let iconName;

            switch (routeName) {
                case 'Map':
                    iconName = iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    break;
                case 'Welcome':
                    iconName = iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    break;
                default:
                    iconName = `ios-options${focused ? '' : '-outline'}`;
            }

            return <Ionicons name={iconName} size={25} color={tintColor}/>;
        }
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    }
});


export default createAppContainer(TabNavigator);
