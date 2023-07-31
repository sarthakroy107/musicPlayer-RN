/* eslint-disable prettier/prettier */
import TrackPlayer, { Event, RepeatMode } from "react-native-track-player";
import { playlistData } from "./src/constants";
import { AppState } from "react-native";

export async function setupPlayer() {
    let letSetUp = false;
    try {
        await TrackPlayer.getCurrentTrack();
        letSetUp = true;
    }
    catch (err) {
        await TrackPlayer.setupPlayer();
        letSetUp = true;
    }
    finally {
        return letSetUp;
    }
}

export async function addTrack() {
    await TrackPlayer.add(playlistData);
    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

export async function playbackService() {
    TrackPlayer.addEventListener(Event.RemotePause, ()=>{
        TrackPlayer.pause();
    });
    TrackPlayer.addEventListener(Event.RemotePlay, ()=>{
        TrackPlayer.play();
    });
    TrackPlayer.addEventListener(Event.RemoteNext, ()=>{
        TrackPlayer.skipToNext();
    });
    TrackPlayer.addEventListener(Event.RemotePrevious, ()=>{
        TrackPlayer.skipToPrevious();
    });
}
