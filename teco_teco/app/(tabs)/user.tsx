import { View, StyleSheet, Image, ScrollView, Text } from 'react-native';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';

export default function User() {
  const posts = useQuery(api.posts.getPosts) || [];

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/7b/0c/e6/7b0ce61805ac08129c86b97e140d01f7.jpg'
          }}
          style={styles.avatar}
        />

        <Text style={styles.name}>debora</Text>
        <Text style={styles.bio}>blue aesthetic</Text>
      </View>

      <View style={styles.grid}>
        {posts.map((post: any) => (
          <Image
            key={post._id}
            source={{ uri: post.img }}
            style={styles.image}
          />
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    alignItems: 'center',
    padding: 20,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },

  bio: {
    color: '#777',
    marginTop: 5,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    padding: 10,
  },

  image: {
    width: '32%',
    aspectRatio: 1,
    borderRadius: 10,
  },
});