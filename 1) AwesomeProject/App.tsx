import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import AppPro from './AppPro';

const App = () => {
  return (
    <SafeAreaView>
      <AppPro/>
      <View>
        <Text>Hello World 1</Text>
        <Text>Hello World 2</Text>
        <Text>Hello World 3</Text>
        <Text>Hello World 5</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
