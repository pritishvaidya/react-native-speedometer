/* eslint import/no-unresolved: [2, { ignore: ['react-native'] }] */
import { StyleSheet, Dimensions } from 'react-native';

export const { width } = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
  // Circular Container
  circleWrapper: {
    width,
    height: width / 2,
    overflow: 'hidden',
  },
  outerCircle: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: width - 20,
    height: width / 2 - 10,
    borderTopLeftRadius: width / 2 - 10,
    borderTopRightRadius: width / 2 - 10,
    overflow: 'hidden',
    borderColor: '#ffffff',
    backgroundColor: '#e6e6e6',
  },
  innerCircle: {
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: width * 0.6,
    height: (width / 2) * 0.6,
    borderTopLeftRadius: width / 2 - 10,
    borderTopRightRadius: width / 2 - 10,
  },
  halfCircle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width / 2,
    height: width,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRadius: width / 2,
  },
  imageWrapper: {
    position: 'absolute',
    top: -22,
    left: 0,
    zIndex: 10,
  },
  image: {
    resizeMode: 'stretch',
    height: width - 20,
    width: width - 20,
  },
  labelWrapper: {
    marginVertical: 5,
    alignItems: 'center',
  },
  label: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  labelNote: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
