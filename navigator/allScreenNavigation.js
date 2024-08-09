import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Notification from '../screens/notification/notification';
import HomeScreen from '../screens/home/home';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Comment from '../screens/comment';
import withScrollView from '../withScrollView';
import LoungeScreen from '../screens/lounge/lounge';

const Stack = createNativeStackNavigator();

const BackButton = ({navigation}) => (
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <MaterialIcons name="arrow-back-ios" size={24} style={{marginLeft: 10}} />
  </TouchableOpacity>
);

const DeleteButton = () => (
  <TouchableOpacity onPress={() => alert('Delete action')}>
    <MaterialIcons name="delete" size={24} style={{marginRight: 10}} />
  </TouchableOpacity>
);

function HomeStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={withScrollView(Notification)}
        options={{
          headerShown: true,
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitle: 'Notification',
          headerTitleAlign: 'center',
          headerRight: () => <DeleteButton />,
        }}
      />
      <Stack.Screen
        name="Comment"
        component={withScrollView(Comment)}
        options={{
          headerShown: true,
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitle: 'Comment',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

function LoungeStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="LoungeScreen">
      <Stack.Screen
        name="LoungeScreen"
        component={LoungeScreen}
        options={{
          headerShown: true,
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitle: 'Lounge',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

export {HomeStack, LoungeStack};
