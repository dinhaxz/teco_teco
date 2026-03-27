import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export function PostCard({ post }: any) {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>

        {/* IMAGEM */}
        <Image source={{ uri: post.image }} style={styles.image} />

        {/* INFO */}
        <View style={styles.footer}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/92/65/01/9265017ba8fefd7988e951d0bfa9a983.jpg'
            }}
            style={styles.avatar}
          />

          <View style={{ flex: 1 }}>
            <Text style={styles.caption}>{post.caption}</Text>
            <Text style={styles.time}>agora mesmo</Text>
          </View>

          <TouchableOpacity onPress={() => setLiked(!liked)}>
            <Text style={styles.like}>
              {liked ? '💙' : '🤍'}
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginBottom: 15,
  },

  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 25,
    overflow: 'hidden',
    elevation: 3,
  },

  image: {
    width: '100%',
    height: 250,
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 10,
  },

  avatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },

  caption: {
    fontSize: 14,
    fontWeight: '500',
  },

  time: {
    fontSize: 12,
    color: '#777',
  },

  like: {
    fontSize: 18,
  },
});