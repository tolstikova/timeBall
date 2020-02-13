/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Colors from 'themes/Colors';
import { TimeBall } from 'components';

const App = () => (
  <View style={styles.primary}>
    <TimeBall />
  </View>
);

const styles = StyleSheet.create({
  primary: {
    flex: 1,
    backgroundColor: Colors.whiteGray
  },
});

export default App;
