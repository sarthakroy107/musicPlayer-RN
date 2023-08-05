/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import { ActivityIndicator, Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { addTrack, setupPlayer } from '../musicPlayerServices';
import MusicPlayer from './screens/musicPlayer';
const {height} = Dimensions.get('window')
const App = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const setUp = async () =>{
    let isSetUp = await setupPlayer();
    if (isSetUp) {
      await addTrack();
    }
    setIsPlayerReady(isSetUp);
  };

  useEffect(()=>{
    setUp();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator/>
      </SafeAreaView>
    );
  }
  
  
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MusicPlayer/>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    height:height,
  },
});
