import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's New In Js</Text>
        </View>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            JavaScript, often abbreviated as JS, is a programming language and
            core technology of the World Wide Web, alongside HTML and CSS. As of
            2024, 98.9% of websites use JavaScript on the client side for
            webpage behavior, often incorporating third-party libraries
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.w3schools.com/whatis/whatis_js.asp')
            }>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://github.com/MahajanNikh')}>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    textAlign:'center'
  },
  card: {
    width: 330,
    height: 350,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 12,
  },
  elevatedCard: {
    backgroundColor: 'green',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 180,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    // alignItems:'center',
    justifyContent:'space-evenly'
  },
  socialLinks: {
    fontSize:16,
    color:'white',
    backgroundColor:'blue',
    paddingHorizontal:20,
    paddingVertical: 6  ,
    borderRadius:6
  },
});
