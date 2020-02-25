import React, {Component, useState} from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
  Animated
} from 'react-native'

import { PanGestureHandler} from 'react-native-gesture-handler';
import { polarToCartesian } from '../helpers/F'
import Slider from "./Slider";


// ====IN PROGRESS==== //

const Cursor = ({ windowWidth, cx, cy, radius, end_angle }) => {
  const _touchX = new Animated.Value(windowWidth / 2 - radius);
  const _onPanGestureEvent = Animated.event([{nativeEvent: {x: _touchX}}], { useNativeDriver: true });

  return (
    <PanGestureHandler
      onGestureEvent={_onPanGestureEvent}>
      <Animated.View style={{
        height: 150,
        justifyContent: 'center',
      }}>
        <Animated.View
          style={[{
            backgroundColor: '#42a5f5',
            borderRadius: radius,
            height: radius * 2,
            width: radius * 2,
          }, {
            transform: [{translateX: Animated.add(_touchX, new Animated.Value(-radius))}]
          }]}
        />
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Cursor;

Cursor.defaultProps = {
  windowWidth: 250,
  cx: 250,
  cy: 250,
  radius: 10,
  start_angle: 0,
  end_angle: 160,
};
