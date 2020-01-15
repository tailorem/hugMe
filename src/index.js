import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

import Styles from '@styles';
import handHug from '@assets/images/hand-hug.png';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={Styles.scrollView}> */}
          <View style={Styles.body}>
            <View style={Styles.sectionContainer}>
              <Text style={Styles.sectionTitle}>Hug Me</Text>
              <Image source={handHug} style={Styles.splashImage} />
              <Text style={Styles.sectionDescription}>
                Keep track of how you're feeling, check in with your friends, and send each other encouragement!
              </Text>
            </View>
            <View style={Styles.buttonContainer}>
              <Button title={'Sign Up'} onPress={() => {}} style={Styles.button} />
              <Text>&nbsp;&nbsp;</Text>
              <Button title={'Log In'} onPress={() => {}} style={Styles.button} />
            </View>
          </View>
        {/* </ScrollView> */}
      </SafeAreaView>
    </>
  );
};

export default App;
