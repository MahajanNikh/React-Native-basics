import {Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ScrollabelCards from './components/ScrollabelCards';
import CardWithImage from './components/CardWithImage';
import ActionCard from './components/ActionCard';
import ContextList from './components/ContextList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ScrollabelCards />
        <CardWithImage />
        <ContextList />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
