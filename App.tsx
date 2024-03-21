/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Splash } from './screens/Splash';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() == 'dark';

  const backgroundStyle = {
    backgroundColor: '#E2CBFF', flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'default'}
      />
      <Splash />
      <Text></Text>
    </SafeAreaView>
  );
}


export default App;
