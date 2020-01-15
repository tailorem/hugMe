import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    splashImage: {
      height: width * 0.7,
      width: width * 0.7,
      borderRadius: width / 2,
      marginVertical: height * 0.05,
    },
    body: {
      alignItems: 'center',
      backgroundColor: 'linen',
      justifyContent: 'center',
      height: height,
      width: width,
    },
    sectionContainer: {
      paddingHorizontal: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: 48,
      fontWeight: 'bold',
      color: 'paleturquoise',
      textTransform: 'lowercase',
    },
    sectionDescription: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '400',
      color: 'dimgray',
    },
    buttonContainer: {
      flexDirection: 'row',
      marginVertical: height * 0.05,
    },
  });

  export default styles;