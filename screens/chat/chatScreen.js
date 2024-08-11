import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {messages} from '../../utils/message';
import {colors} from '../../globalStyles';
import {FlatList} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

export default function ChatScreen({route}) {
  return (
    <View style={styles.chatcontainer}>
      <View style={styles.messagesContainer}>
        <FlatList
          data={messages}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View
              style={[
                styles.messagebox,
                item.sender === 'me' ? styles.senderMsg : styles.receiverMsg,
              ]}>
              <Text style={{color: colors.white}}>{item.msg}</Text>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.sendButton}>
          <Icons name="plus-square-o" size={20} color={colors.primary} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          multiline={true}
          placeholderTextColor={colors.gray}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Icons name="send-o" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatcontainer: {
    flex: 1,
  },
  messagesContainer: {
    height: '100%',
    paddingBottom: 60,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  senderMsg: {
    backgroundColor: colors.primary,
    alignSelf: 'flex-end',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  receiverMsg: {
    backgroundColor: colors.gray,
    alignSelf: 'flex-start',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  messagebox: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row', // Stack message and time vertically
    alignItems: 'flex-start', // Align items to the start
  },
  timeText: {
    color: colors.white,
    fontSize: 10,
    marginTop: 5, // Add space between message and time
    alignSelf: 'flex-end', // Align time to the end
    marginLeft: 5, // Add space between message
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    borderTopColor: colors.primary,
    borderTopWidth: 1,
    backgroundColor: colors.white, // Ensure background color is set
    zIndex: 1, // Ensure input is above the message
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    marginRight: 5,
  },
  sendButton: {
    padding: 10,
  },
});
