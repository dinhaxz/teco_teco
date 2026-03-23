import { View, FlatList, StyleSheet, TextInput } from 'react-native';
import { PostCard } from '../../componets/PostCard';
import { useFeed } from '../../hooks/useFeed';

export default function Feed() {
  const { posts } = useFeed();

  return (
    <View style={styles.container}>

      {/* INPUT REAL */}
      <TextInput
        placeholder="No que está pensando?"
        style={styles.input}
      />

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

  input: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    padding: 12,
    borderRadius: 15,
    marginBottom: 20,
  },
});