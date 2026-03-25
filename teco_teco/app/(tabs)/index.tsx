import { View, FlatList, StyleSheet, TextInput, Text } from 'react-native';
import { PostCard } from '../../componets/PostCard';
import { useFeed } from '../../hooks/useFeed';

export default function Feed() {
  const { posts } = useFeed();

  return (
    <View style={styles.container}>

      {/* TOPO */}
      <View style={styles.header}>
        <Text style={styles.title}>Feed</Text>

        <View style={styles.postBox}>
          <View style={styles.avatar} />
          <TextInput
            placeholder="No que está pensando?"
            style={styles.input}
          />
        </View>
      </View>

      {/* FEED */}
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <PostCard post={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf6ff',
    paddingTop: 20,
  },

  header: {
    paddingHorizontal: 16,
    marginBottom: 15,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1DA1F2',
  },

  postBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  avatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#ccc',
    marginRight: 10,
  },

  input: {
    flex: 1,
  },
});