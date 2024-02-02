import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const ScrollabelCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Scrollabel Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElements]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElements]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.cardElements]}>
          <Text>TO</Text>
        </View>
        <View style={[styles.card, styles.cardElements]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElements]}>
          <Text>More</Text>
        </View>
        <View style={[styles.card, styles.cardElements]}>
          <Text>(:</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingTop: 5,
    flex: 1,
    textAlign: 'center',
  },
  container: {
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 8,
  },
  cardElements: {
    backgroundColor: 'gray',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#fcb205',
    shadowOpacity:1,
    shadowRadius:2
  },
});

export default ScrollabelCards;
