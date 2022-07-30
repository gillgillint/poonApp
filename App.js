import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';
import NavBar from './components/Layout/NavBar';
import TopBar from './components/Layout/TopBar';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./img/background.jpg')}
        resizeMode="cover"
        style={styles.bgImage}>
        <TopBar />
        <View style={styles.sideBar}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://bit.ly/30BKDH8')}>
            <View style={styles.sideBarIconBox}>
              <Image
                style={styles.sideBarImg1}
                source={require('./img/iconSlot.png')}
              />
              <Image
                style={styles.sideBarText1}
                source={require('./img/textSlot.png')}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL('https://bit.ly/30BKDH8')}>
            <View style={styles.sideBarIconBox}>
              <Image
                style={styles.sideBarImg1}
                source={require('./img/iconCasino.png')}
              />
              <Image
                style={styles.sideBarText1}
                source={require('./img/textCasino.png')}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL('https://bit.ly/30BKDH8')}>
            <View style={styles.sideBarIconBox}>
              <Image
                style={styles.sideBarImg1}
                source={require('./img/iconBall.png')}
              />
              <Image
                style={styles.sideBarText3}
                source={require('./img/textBall.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <SafeAreaView>
          <ScrollView style={styles.scrollView}>
            <View style={styles.container1}>
              <TouchableOpacity
                style={{width: '33%', marginRight: 5}}
                onPress={() => Linking.openURL('https://bit.ly/30BKDH8')}>
                <Image
                  style={styles.video1}
                  source={require('./img/dugdig1.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{width: '33%', marginRight: 5}}
                onPress={() => Linking.openURL('https://bit.ly/30BKDH8')}>
                <Image
                  style={styles.video2}
                  source={require('./img/dugdig2.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{width: '33%'}}
                onPress={() => Linking.openURL('https://bit.ly/30BKDH8')}>
                <Image
                  style={styles.video3}
                  source={require('./img/dugdig3.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.container2}>
              <Image
                style={styles.popGame}
                source={require('./img/popgame.png')}
              />

              <View style={styles.container1}>
                <TouchableOpacity
                  style={{width: '50%'}}
                  onPress={() => Linking.openURL('https://bit.ly/30BKDH8')}>
                  <Image
                    style={styles.popGame1}
                    source={require('./img/popGame1.png')}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{width: '50%'}}
                  onPress={() => Linking.openURL('https://bit.ly/30BKDH8')}>
                  <Image
                    style={styles.popGame2}
                    source={require('./img/popGame2.png')}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://bit.ly/30BKDH8')}>
                <Image
                  style={styles.popGame3}
                  source={require('./img/popGame3.png')}
                />
              </TouchableOpacity>
            </View>

            <Text style={{color: 'transparent'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              perspiciatis iste, natus incidunt ex possimus! Nam perferendis
              dolores expedita maiores natus nulla similique labore aperiam ad
              reprehenderit. Illum optio, quia perferendis harum, nemo minima
              aliquam error suscipit consectetur iure commodi est consequatur
              aspernatur repellendus corrupti quas quam adipisci! Aperiam
              aspernatur eos voluptas ab perspiciatis distinctio nisi doloribus
              quis ratione laudantium voluptates ullam cum deserunt nemo
              quisquam aliquid quasi, illo iste et tenetur illum, aspernatur eos
              voluptas ab perspiciatis distinctio nisi doloribus quis ratione
              laudantium voluptates ullam cum deserunt nemo quisquam aliquid
              quasi, illo iste et tenetur illum, aspernatur eos voluptas ab
              perspiciatis distinctio nisi doloribus quis ratione laudantium
              aspernatur eos voluptas ab perspiciatis distinctio nisi doloribus
              quis ratione laudantium voluptates ullam cum deserunt nemo
              quisquam aliquid quasi, illo iste et tenetur illum, aspernatur eos
              voluptas ab perspiciatis distinctio nisi doloribus quis ratione
              laudantium voluptates ullam cum deserunt nemo quisquam aliquid
              quasi, illo iste et tenetur illum, aspernatur eos voluptas ab
              perspiciatis distinctio nisi doloribus quis ratione laudantium
              aspernatur eos voluptas ab perspiciatis distinctio nisi doloribus
              quis ratione laudantium voluptates ullam cum deserunt nemo
              quisquam aliquid quasi, illo iste et tenetur illum, aspernatur eos
              voluptas ab perspiciatis distinctio nisi doloribus quis ratione
              laudantium voluptates ullam cum deserunt nemo quisquam aliquid
              quasi, illo iste et tenetur illum, aspernatur eos voluptas ab
              perspiciatis distinctio nisi doloribus quis ratione laudantium
            </Text>
          </ScrollView>
        </SafeAreaView>
        <NavBar />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  container2: {
    width: '100%',
    marginTop: 40,
  },

  scrollView: {
    backgroundColor: 'transparent',
    paddingTop: 10,
    marginRight: 15,
    marginLeft: '17%',
  },
  sideBarIconBox: {
    display: 'flex',
    marginBottom: 30,
  },
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  sideBar: {
    position: 'absolute',
    paddingTop: 120,
    paddingLeft: '17%',
  },
  sideBarImg1: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  sideBarText1: {
    width: 40,
    height: 12,
  },
  sideBarText3: {
    width: 28,
    height: 12,
    marginLeft: 5,
  },
  video1: {
    resizeMode: 'stretch',
    height: 250,
    width: '95%',
  },
  video2: {
    resizeMode: 'stretch',
    height: 250,
    width: '95%',
  },
  video3: {
    resizeMode: 'stretch',
    height: 250,
    width: '95%',
  },
  popGame: {
    height: 18,
    width: 95,
    marginBottom: 15,
  },
  popGame1: {
    resizeMode: 'stretch',
    height: 150,
    width: '98%',
    marginBottom: 15,
    marginRight: 15,
  },
  popGame2: {
    resizeMode: 'stretch',
    height: 150,
    width: '98%',
    marginBottom: 15,
  },
  popGame3: {
    resizeMode: 'stretch',
    height: 250,
    width: '100%',
  },
});

export default App;
