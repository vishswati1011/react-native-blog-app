import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#006175',
  secondary: '#F2F2F2',
  black: '#000000',
  white: '#ffffff',
  gray: '#808080',
  red: '#ff0000',
  green: '#80B1BA',
};

export const globalStyles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    padding: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'gray',
    padding: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 10,
    color: colors.gray,
  },
  buttonStyle: {
    backgroundColor: '#006175',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    width: '100%',
  },
  input: {
    // borderColor: 'gray',
    // borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    height: 40,
    backgroundColor: colors.secondary,
  },
});
