'use strict';
 
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
 
class LinksScreen extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      myText: 'I\'m ready to get swiped!',
      gestureName: 'none',
      backgroundColor: '#fff'
    };
  }
 
  onSwipeUp(gestureState) {
    this.setState({myText: 'Harlem Human Society'});
  }
 
  onSwipeDown(gestureState) {
    this.setState({myText: 'Chicago Climate Conglomerate'});
  }
 
  onSwipeLeft(gestureState) {
    this.setState({myText: 'Massachussetts Institute of TechPAWlogy'});
  }
 
  onSwipeRight(gestureState) {
    this.setState({myText: 'Washington Women Shelter'});
  }
 
  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_UP:
        this.setState({backgroundImage: "url (" + 'https://www.utahhumane.org/sites/utahhumane.org/files/styles/large/public/inline/2017volunteer01.jpg?itok=G0M3pkrU' + ")"});
        break;
      case SWIPE_DOWN:
        this.setState({backgroundImage: "url (" + 'https://cafodnottingham.files.wordpress.com/2017/06/8475.jpg?w=300&h=200' + ")"});
        break;
      case SWIPE_LEFT:
        this.setState({backgroundImage: "url (" + 'https://www.genesisshelter.org/wp-content/uploads/2016/08/Volunteer-Hero.jpg' + ")"});
        break;
      case SWIPE_RIGHT:
        this.setState({backgroundImage: "url (" + 'http://www.blackgirlscode.com/uploads/7/1/1/6/7116907/1514273_orig.jpg' + ")"});
        break;
    }
  }
 
  render() {
    
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
 
    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeUp={(state) => this.onSwipeUp(state)}
        onSwipeDown={(state) => this.onSwipeDown(state)}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor
        }}
        >
        <Text>{this.state.myText}</Text>
      </GestureRecognizer>
    );
  }
}
 
export default LinksScreen;

LinksScreen.navigationOptions = {
  title: 'app.json',
};