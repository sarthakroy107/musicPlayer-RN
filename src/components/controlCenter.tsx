/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ControlCenter = () => {
    const playbackState = usePlaybackState();
    const skipToNext = async () => {
        await TrackPlayer.skipToNext();
    };
    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious();
    };

    const togglePlayBack = async (playback: State) => {
        const currentTrack = await TrackPlayer.getCurrentTrack();
        console.log("PAYSTATE");
        console.log(playback === State.Ready);

        if (currentTrack !== null) {
            console.log();
            if (playback === State.Playing) {
                TrackPlayer.pause();
            }
            else {
                TrackPlayer.play();
            }
        }
    };

  return (
    <View style={styles.container}>
        <Pressable onPress={skipToPrevious}>
            <Icon
            name="skip-previous"
            size={45}/>
        </Pressable>
        <Pressable onPress={()=>togglePlayBack(playbackState)}>
            <Icon
            name={playbackState === State.Playing ? 'pause' : 'play-arrow'}
            size={45}/>
        </Pressable>
        <Pressable onPress={skipToNext}>
            <Icon
            name="skip-next"
            size={45}/>
        </Pressable>
    </View>
  );
};

export default ControlCenter;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
    },
});
