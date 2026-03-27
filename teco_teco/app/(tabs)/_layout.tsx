import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1DA1F2',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Feed',
          tabBarIcon: () => <Text>🏠</Text>,
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          title: 'Postar',
          tabBarIcon: () => <Text>➕</Text>,
        }}
      />

      <Tabs.Screen
        name="user"
        options={{
          title: 'Perfil',
          tabBarIcon: () => <Text>👤</Text>,
        }}
      />
    </Tabs>
  );
}