/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { addTrack, setupPlayer } from '../musicPlayerServices';

const App = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const setUp = async () =>{
    let isSetUp = await setupPlayer();
    if(isSetUp) {
      await addTrack();
    }
  }
  useEffect(()=>{
    setUp();
  }, []);

  // if (!isPlayerReady) {
  //   return (
  //     <SafeAreaView>
  //       <ActivityIndicator/>
  //     </SafeAreaView>
  //   );
  // }

  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App

const styles = StyleSheet.create({})