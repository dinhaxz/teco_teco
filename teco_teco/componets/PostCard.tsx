import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export function PostCard({ post }: any) {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>

        {/* IMAGEM DO POST */}
        <Image
          source={{ uri: post.image }}
          style={styles.image}
          resizeMode="cover"
        />

        {/* AÇÕES */}
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => setLiked(!liked)}>
            <Text style={{ fontSize: 18 }}>
              {liked ? '💙' : '🤍'}
            </Text>
          </TouchableOpacity>

          <Text style={styles.actionText}>💬</Text>
          <Text style={styles.actionText}>📤</Text>
        </View>

        {/* INFO */}
        <View style={styles.footer}>
          
          {/* AVATAR COM IMAGEM */}
          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/97/0e/aa/970eaa3354a6b9c3556509816b662cb6.jpg'
            }}
            style={styles.avatar}
          />

          <View style={{ flex: 1 }}>
            <Text style={styles.caption}>{post.caption}</Text>
            <Text style={styles.time}>agora mesmo</Text>
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },

  card: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 25,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },

  // 🔥 IMAGEM VERTICAL BONITA
  image: {
    width: '100%',
    aspectRatio: 1.5,
  },

  actions: {
    flexDirection: 'row',
    gap: 15,
    padding: 10,
  },

  actionText: {
    fontSize: 18,
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
});