import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export function PostCard({ post }: any) {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.card}>
      
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
        <View style={styles.avatar} />

        <View style={{ flex: 1 }}>
          <Text style={styles.caption}>{post.caption}</Text>
          <Text style={styles.time}>agora mesmo</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 25,
    marginBottom: 20,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },

  // 🔥 AJUSTE PERFEITO DA IMAGEM
  image: {
    width: '100%',
    aspectRatio: 1,   // mantém proporção
    maxHeight: 260,   // limita tamanho (resolve gigante)
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
    backgroundColor: '#ccc',
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