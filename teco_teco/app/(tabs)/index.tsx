import { View, FlatList, StyleSheet, Text, Image, TextInput } from 'react-native';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { PostCard } from '../../componets/PostCard';

export default function Feed() {
  const realPosts = useQuery(api.posts.getPosts) || [];

  const fakePosts = [
    {
      _id: '1',
      text: 'blue energy',
      img: 'https://i.pinimg.com/1200x/6b/74/94/6b7494e9ea19ce65261b67c2dc8b2117.jpg',
    },
    {
      _id: '2',
      text: 'soft calm',
      img: 'https://i.pinimg.com/736x/8f/d2/87/8fd287f063e522175bba835f2bf039a8.jpg',
    },
    {
      _id: '3',
      text: 'late vibes',
      img: 'https://i.pinimg.com/736x/aa/6e/0a/aa6e0aa842098a0c416e1839ddb810ba.jpg',
    },
    {
      _id: '4',
      text: 'night mood',
      img: 'https://i.pinimg.com/736x/4b/06/de/4b06de167c1b49d27f3366845eb91288.jpg',
    },
  ];

  const posts = [...fakePosts, ...realPosts];

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <Text style={styles.title}>Feed 💙</Text>

      {/* CAIXA DE POST */}
      <View style={styles.createBox}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/7b/0c/e6/7b0ce61805ac08129c86b97e140d01f7.jpg'
          }}
          style={styles.avatar}
        />

        <TextInput
          placeholder="No que está pensando?"
          style={styles.input}
        />
      </View>

      {/* POSTS */}
      <FlatList
        data={posts}
        keyExtractor={(item: any) => item._id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PostCard post={{ caption: item.text, image: item.img }} />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf6ff',
    paddingTop: 40,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1DA1F2',
    marginLeft: 15,
    marginBottom: 10,
  },

  createBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  input: {
    marginLeft: 10,
    flex: 1,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 40,
  },
});