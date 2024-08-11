import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Notification from '../screens/notification/notification';
import HomeScreen from '../screens/home/home';
import {TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Comment from '../screens/post/comment';
import withScrollView from '../withScrollView';
import LoungeScreen from '../screens/lounge/lounge';
import ProfileScreen from '../screens/profile/profile';
import EditProfile from '../screens/profile/editProfile';
import userProfile from '../screens/profile/userProfile';
import Chat from '../screens/chat/chat';
import ChatScreen from '../screens/chat/chatScreen';
import AddComment from '../screens/post/newComment';
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
        options={({route}) => ({
          headerShown: true,
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitle: 'Comment',
          headerTitleAlign: 'center',
          headerRight: () => (
            <View style={{paddingRight: 10}}>
              <AddComment route={route} />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="userProfile"
        component={withScrollView(userProfile)}
        options={{
          headerShown: true,
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitle: 'Profile',
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

function ProfileStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: true,
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitle: 'My Profile',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={withScrollView(EditProfile)}
        options={{
          headerShown: true,
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitle: 'My Profile',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

function ChatStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Chat">
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: true,
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitle: 'Chats',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={({route}) => ({
          headerShown: true,
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitle: route.params?.user?.username || 'Chats',
          headerTitleAlign: 'center',
        })}
      />
    </Stack.Navigator>
  );
}

export {HomeStack, LoungeStack, ProfileStack, ChatStack};
