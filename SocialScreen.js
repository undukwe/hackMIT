import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { StreamApp, FlatFeed } from 'expo-activity-feed';
import {MapView, Marker} from 'react-native-maps';
import { Activity } from 'react-native-activity-feed-core';


export default function SocialScreen() {
      return (
        <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always' }}>
          <StreamApp
              apiKey="5czsmts5s65z"
              appId="59269"
              token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidXNlci1vbmUifQ.7QpIFyBvAgEYgrYZpZ7MyynZL1UYXeeeGaAsrn6IImw"
          >
          <FlatFeed/>
        </StreamApp>
    
        </SafeAreaView>
    
      );
    };
    
