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
import Shadow from "./src/components/Shadow";
import { BlurView } from 'react-native-blur';
import Cursor from "./src/components/Cursor";

const App = () => (
  <SafeAreaView style={styles.primary}>

    <Shadow />

  </SafeAreaView>
);

const styles = StyleSheet.create({
  primary: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.whiteGray
  },
});

export default App;
