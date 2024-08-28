import * as Updates from 'expo-updates';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import { ResizeMode, Video } from 'expo-av';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Video
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        shouldPlay
        videoStyle={styles.video}
      />
      <Button
        onPress={Updates.reloadAsync}
        title="Reload"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    gap: 20,
    justifyContent: 'center',
  },
  video: {
    height: 400,
    width: '100%',
  },
});
