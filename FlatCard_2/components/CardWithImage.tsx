import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';

export default class CardWithImage extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>Trending Places</Text>
        <View style={[styles.card, styles.cardElement]}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            style={styles.cardImage}
          />
          {/* <Image
            source={require('../images/TajMahal.jpg')}
            style={styles.cardImage}
          /> */}
          <View style={styles.cardBody}>
            <Text style={styles.cardHeading}>TAJ MAHAL</Text>
            <Text style={styles.cardLabel}>Agra , Delhi</Text>
            <Text style={styles.cardDescription}>
              The Taj Mahal is an ivory-white marble mausoleum on the south bank
              of the Yamuna river in the Indian city of Agra. It was
              commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned
              from 1628 to 1658), to house the tomb of his favourite wife,
              Mumtaz Mahal.
            </Text>
            <Text style={styles.cardFooter}>181 km away from Delhi</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    padding:6,

    
    textAlign: 'center',
    
  },
  card: {},
  cardElement: {},
  cardImage: {
    height: 180,
  },
  cardBody: {
    margin: 6,
  },
  cardHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  cardDescription: {
    textAlign: 'justify',
  },
  cardLabel: {
    textAlign: 'right',
  },
  cardFooter: {
    textAlign: 'right',
  },
});
