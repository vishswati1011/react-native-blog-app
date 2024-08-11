import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../../globalStyles';
import Card from './card';
import {BlogContext} from '../../context/blog';

export default function Comment({route}) {
  const {blog} = route.params;

  const [localBlog, setLocalBlog] = useState(blog);
  const {getBlogById} = useContext(BlogContext);
  useEffect(() => {
    const fetchUpdatedBlog = async () => {
      const updatedBlog = await getBlogById(blog.id); // Fetch the updated blog using the context function
      setLocalBlog(updatedBlog);
    };

    fetchUpdatedBlog();
  }, [blog, getBlogById]);

  return (
    <View style={styles.container}>
      <Card item={localBlog} />
      {localBlog.comment.map((comment, index) => (
        <View style={styles.notificationContainer} key={index}>
          <View style={styles.notification}>
            <Image
              source={require('../../assets/users/image1.jpeg')}
              style={styles.userImage}
            />
            <View style={styles.userdate}>
              <Text style={styles.commentUser}>{comment.username}</Text>
              <Text style={styles.commentTime}>2 hours ago</Text>
            </View>
          </View>
          <Text style={styles.comment}>{comment.comment}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
  userdate: {
    display: 'flex',
    flexDirection: 'column',
  },
  notificationContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: colors.white,
  },
  notification: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  comment: {
    fontSize: 14,
    color: colors.black,
    padding: 10,
  },
  commentUser: {
    fontSize: 16,
    color: colors.black,
  },
  commentTime: {
    fontSize: 14,
    color: colors.black,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});
