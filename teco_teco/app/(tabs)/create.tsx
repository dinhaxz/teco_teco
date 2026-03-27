import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, Alert } from 'react-native';
import { useState } from 'react';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';

export default function Create() {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState('');

  const addPost = useMutation(api.posts.addPost);

  async function handlePost() {
    console.log("clicou no botão");

    if (!caption.trim() || !image.trim()) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    try {
      console.log("enviando pro convex...");

      await addPost({
        text: caption,
        img: image,
      });

      console.log("post criado!");

      Alert.alert('Sucesso', 'Post criado 💙');

      setCaption('');
      setImage('');

    } catch (error) {
      console.log("ERRO:", error);
      Alert.alert('Erro', 'Não foi possível postar');
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Criar Post</Text>

      <TextInput
        placeholder="Legenda..."
        value={caption}
        onChangeText={setCaption}
        style={styles.input}
      />

      <TextInput
        placeholder="Link da imagem"
        value={image}
        onChangeText={setImage}
        style={styles.input}
      />

      {image !== '' && (
        <Image source={{ uri: image }} style={styles.preview} />
      )}

      <TouchableOpacity style={styles.button} onPress={handlePost}>
        <Text style={styles.text}>Publicar</Text>
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

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },

  preview: {
    width: '100%',
    height: 220,
    borderRadius: 20,
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#1DA1F2',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },

  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});