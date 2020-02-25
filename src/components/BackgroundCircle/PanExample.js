import React, { Component } from 'react';
import { StyleSheet, View, PanResponder, I18nManager, Text } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import Colors from 'src/themes/Colors';
// import { DraggableBox } from '../draggable';
// import { LoremIpsum } from '../common';

var CIRCLE_SIZE = 80;

// A clone of: https://github.com/facebook/react-native/blob/master/RNTester/js/PanResponderExample.js
class PanResponderExample extends Component {
  _panResponder = {};
  _previousLeft = 0;
  _previousTop = 0;
  _circleStyles = {};

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      // onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      // onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
    });
    this._previousLeft = 20;
    this._previousTop = 84;
    this._circleStyles = {
      style: {
        left: this._previousLeft,
        top: this._previousTop,
        backgroundColor: Colors.pink,
      },
    };
    this._numberStyles = {
      style: {
        left: this._previousLeft,
        top: this._previousTop,
        fontSize: 8,
      },
    };
  }

  componentDidMount() {
    this._updateNativeStyles();
  }

  render() {
    return (
      <Text
        ref={numbers => {
          this.numbers = numbers;
        }}
        style={styles.numbers}
        {...this._panResponder.panHandlers}
      >{this.props.timeNumber}</Text>
    );
  }

  // _highlight = () => {
  //   this._circleStyles.style.backgroundColor = Colors.whiteGray;
  //   this._updateNativeStyles();
  // };

  _scale = () => {
    this._numberStyles.style.fontSize = 20;
    this._updateNativeStyles();
  };

  _unScale = () => {
    this._numberStyles.style.fontSize = 8;
    this._updateNativeStyles();
  };

  // _unHighlight = () => {
  //   this._circleStyles.style.backgroundColor = Colors.pink;
  //   this._updateNativeStyles();
  // };

  _updateNativeStyles = () => {
    // this.circle && this.circle.setNativeProps(this._circleStyles);
    this.numbers && this.numbers.setNativeProps(this._numberStyles);
  };

  _handleStartShouldSetPanResponder = (e, gestureState) => {
    // Should we become active when the user presses down on the circle?
    return true;
  };

  _handleMoveShouldSetPanResponder = (e, gestureState) => {
    // Should we become active when the user moves a touch over the circle?
    return true;
  };

  _handlePanResponderGrant = (e, gestureState) => {
    this._scale();
  };

  // _handlePanResponderMove = (e, gestureState) => {
  //   this._numberStyles.style.left = this._previousLeft + gestureState.dx * (I18nManager.isRTL ? -1 : 1);
  //   this._numberStyles.style.top = this._previousTop + gestureState.dy;
  //   this._updateNativeStyles();
  // };

  _handlePanResponderEnd = (e, gestureState) => {
    this._unScale();
    // this._previousLeft += gestureState.dx * (I18nManager.isRTL ? -1 : 1);
    // this._previousTop += gestureState.dy;
  };
}

export default class Example extends Component {
  _onClick = () => {
    alert("I'm so touched");
  };
  render() {
    return (
      <View
        style={styles.scrollView}>

        <PanResponderExample />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Colors.whiteGray,
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    zIndex: 100,
  },
  numbers: {
    zIndex: 100,
  }
});
