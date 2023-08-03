/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useProgress } from 'react-native-track-player';
import Slider from '@react-native-community/slider';

const SongSlider = () => {
  const {position, duration} = useProgress();
  return (
    <View>
      <Slider
      value={position}
      minimumValue={0}
      maximumValue={duration}
      thumbTintColor="#FFF"
      maximumTrackTintColor="#FFF"
      style={styles.sliderStyle}
      />
      <View style={styles.timeStampContainer}>
        <Text>{new Date(position * 1000).toISOString().substring(15,19)}</Text>
        <Text>
            {new Date((duration - position) * 1000).toISOString().substring(15, 19)}
        </Text>
      </View>
    </View>
  );
};

export default SongSlider;

const styles = StyleSheet.create({
  sliderStyle:{
    width:350,
    height:5,
    marginVertical:12,
  },
  timeStampContainer:{
    width:320,
    marginLeft:15,
    flexDirection:'row',
    justifyContent:'space-between'
,  }
});
