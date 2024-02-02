import {Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ScrollabelCards from './components/ScrollabelCards';
import CardWithImage from './components/CardWithImage';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ScrollabelCards />
        <CardWithImage/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
