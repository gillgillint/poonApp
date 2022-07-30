import React from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';

const NavBar = () => {
  return (
    <ImageBackground
      source={require('../../img/bgNavBar.png')}
      resizeMode="cover"
      style={{
        width: '100%',
        height: 90,
        position: 'absolute',
        bottom: 0,
      }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={{width: '33%', marginRight: 30}}
          onPress={() => Linking.openURL('https://bit.ly/30BKDH8')}>
          <Image
            style={styles.img1}
            source={require('../../img/navBarImg1.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{width: '33%'}}
          onPress={() => Linking.openURL('https://bit.ly/30BKDH8')}>
          <Image
            style={styles.img2}
            source={require('../../img/navBarImg2.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{width: '33%'}}
          onPress={() => Linking.openURL('https://cutt.ly/oK4JttX')}>
          <Image
            style={styles.img3}
            source={require('../../img/navBarImg3.png')}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
  img1: {
    width: '85%',
    height: 50,
  },
  img2: {
    marginTop: -55,
    width: '70%',
    height: 130,
  },

  img3: {
    width: '85%',
    height: 50,
  },
});

export default NavBar;
