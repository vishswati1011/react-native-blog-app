import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/home';
import ProfileScreen from '../screens/profile/profile';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome';
import Post from '../screens/post/addPost';
import Comment from '../screens/comment/comment';
import {colors} from '../globalStyles';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.black,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Status"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'status',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="tips-and-updates" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarLabel: 'Post',
          tabBarIcon: ({color, size}) => (
            <Icons name="plus-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Comment"
        component={Comment}
        options={{
          tabBarLabel: 'Comment',
          tabBarIcon: ({color, size}) => (
            <Icons name="comment" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icons name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
