import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function User() {
  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/97/0e/aa/970eaa3354a6b9c3556509816b662cb6.jpg'
          }}
          style={styles.avatar}
        />

        <Text style={styles.name}>@blue.user</Text>
        <Text style={styles.bio}>
          living soft & calm vibes 💙
        </Text>
      </View>

      {/* STATS */}
      <View style={styles.stats}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>24</Text>
          <Text style={styles.statLabel}>posts</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>1.2k</Text>
          <Text style={styles.statLabel}>seguidores</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>180</Text>
          <Text style={styles.statLabel}>seguindo</Text>
        </View>
      </View>

      {/* GALERIA */}
      <View style={styles.grid}>
        <Image source={{ uri: 'https://i.pinimg.com/736x/66/6e/1b/666e1b01bdfd5ad8071c07e07247deed.jpg' }} style={styles.gridImage} />
        <Image source={{ uri: 'https://i.pinimg.com/736x/00/de/dc/00dedccebacd887f26dc1aa9f66709fe.jpg' }} style={styles.gridImage} />
        <Image source={{ uri: 'https://i.pinimg.com/736x/d8/86/0d/d8860d5a7bc19a2c5ccde835f96e1ed7.jpg' }} style={styles.gridImage} />
        <Image source={{ uri: 'https://i.pinimg.com/736x/e9/24/a2/e924a2f96a833a9987fc6da3598013eb.jpg' }} style={styles.gridImage} />
        <Image source={{ uri: 'https://i.pinimg.com/736x/a6/25/82/a625823cf0ea4b50ce912a5f9db8c862.jpg' }} style={styles.gridImage} />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf6ff',
  },

  header: {
    alignItems: 'center',
    padding: 20,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginBottom: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  bio: {
    fontSize: 13,
    color: '#555',
    marginTop: 5,
  },

  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },

  statBox: {
    alignItems: 'center',
  },

  statNumber: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  statLabel: {
    fontSize: 12,
    color: '#777',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    padding: 10,
  },

  gridImage: {
    width: '32%',
    aspectRatio: 1,
    borderRadius: 10,
  },
});