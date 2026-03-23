import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import { useFeed } from '../../hooks/useFeed';

export default function Create() {
  const [caption, setCaption] = useState('');
  const { addPost } = useFeed();

  const previewImage =
    'https://i.pinimg.com/736x/b5/18/41/b5184171fd55fc19e78ef17459bdd908.jpg';

  function handlePost() {
    addPost({
      caption: caption,
      image: previewImage,
    });

    setCaption('');
  }

  return (
    <View style={styles.container}>

      {/* PREVIEW DA IMAGEM */}
      <Image source={{ uri: previewImage }} style={styles.imagePreview} />

      {/* INPUT */}
      <TextInput
        placeholder="Escreva uma legenda..."
        value={caption}
        onChangeText={setCaption}
        style={styles.input}
        multiline
      />

      {/* BOTÕES */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallText}>🎨 Filtro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallText}>📍 Local</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallText}>😊 Emojis</Text>
        </TouchableOpacity>
      </View>

      {/* BOTÃO PRINCIPAL */}
      <TouchableOpacity style={styles.postButton} onPress={handlePost}>
        <Text style={styles.postText}>Publicar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf6ff',
    padding: 16,
  },

  imagePreview: {
    width: '100%',
    height: 220,
    borderRadius: 20,
    marginBottom: 15,
  },

  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 15,
    marginBottom: 15,
    minHeight: 80,
    textAlignVertical: 'top',
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  smallButton: {
    backgroundColor: '#d0eaff',
    padding: 10,
    borderRadius: 12,
  },

  smallText: {
    fontSize: 12,
  },

  postButton: {
    backgroundColor: '#1DA1F2',
    padding: 16,
    borderRadius: 15,
    alignItems: 'center',
  },

  postText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});