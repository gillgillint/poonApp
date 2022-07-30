import React from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';

const TopBar = () => {
  return (
    <ImageBackground
      source={require('../../img/bgTopBar.png')}
      resizeMode="cover"
      style={{width: '100%', height: 70}}>
      <View style={styles.container}>
        <TouchableOpacity
          style={{marginRight: 'auto'}}
          onPress={() => Linking.openURL('https://bit.ly/30BKDH8')}>
          <Image
            style={styles.img1}
            source={require('../../img/topBarImg1.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL('https://bit.ly/30BKDH8')}>
          <Image
            style={styles.img2}
            source={require('../../img/topBarImg2.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL('https://cutt.ly/oK4JttX')}>
          <Image
            style={styles.img3}
            source={require('../../img/topBarImg3.png')}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: '15%',
    paddingRight: 10,
    paddingTop: 18,
    paddingBottom: 12,
    display: 'flex',
    flexDirection: 'row',
  },
  img1: {
    width: 32,
    height: 32,
  },
  img2: {
    width: 96,
    height: 36,
    marginRight: 15,
  },

  img3: {
    width: 99,
    height: 36,
  },
});

export default TopBar;
