import { Stack } from 'expo-router';
import { ConvexProvider, ConvexReactClient } from 'convex/react';

const convex = new ConvexReactClient("https://secret-porpoise-661.convex.site/");

export default function Layout() {
  return (
    <ConvexProvider client={convex}>
      <Stack screenOptions={{ headerShown: false }} />
    </ConvexProvider>
  );
}