import {
  NativeBaseProvider,
  FormControl,
  Input,
  Button,
  Modal,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {React, useRef, useState, useContext} from 'react';
import {BlogContext} from '../../context/blog';

const AddComment = ({route}) => {
  const {blog} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const {commentBlog} = useContext(BlogContext);
  const [comment, setComment] = useState('');

  const saveComment = () => {
    let payload = {
      comment: comment,
      username: 'messy crof',
      id: Math.random().toString(),
    };
    commentBlog(blog.id, payload);
    setComment('');
    setModalVisible(false);
  };

  return (
    <NativeBaseProvider>
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Add your comment</Modal.Header>
          <Modal.Body>
            <FormControl>
              <Input
                ref={initialRef}
                value={comment}
                onChangeText={e => setComment(e)}
                multiline={true}
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setModalVisible(false);
                }}>
                Cancel
              </Button>
              <Button
                onPress={() => {
                  saveComment();
                }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}>
        <Icon name="plus" size={15} color="white" />
      </TouchableOpacity>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  addButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#06b6d4',
    borderRadius: 20,
  },
});

export default AddComment;
