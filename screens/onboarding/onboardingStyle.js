import {StyleSheet} from 'react-native';
import {colors} from '../../globalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  imageDiv: {
    height: '60%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDiv: {
    height: '40%',
    justifyContent: 'left',
    padding: 10,
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontColor: '#000000',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    padding: 10,
  },
  signText: {
    fontSize: 14,
    color: 'black',
    padding: 10,
    textAlign: 'center',
  },
  desc: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'medium',
    padding: 10,
  },
  nextButton: {
    backgroundColor: '#006175',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  skipButton: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  skipButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  circle: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#006175',
    justifyContent: 'center',
    alignItems: 'center',
  },
  small_circle: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: '#DBE9EC',
  },
  small_image: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  centerDiv: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DBE9EC',
    borderRadius: 100,
    width: 150,
    height: 150,
  },
  center: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  primaryText: {
    color: colors.primary,
  },
});
