import {StyleSheet} from 'react-native';
import {colors} from '../../globalStyles';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    flex: 1,
  },
  topContainer: {
    flex: 1,
  },
  link: {
    color: colors.primary,
    textAlign: 'right',
    marginTop: 10,
  },
  signup_link: {
    textAlign: 'center',
  },
  bottomContainer: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
  },
  buttonText: {
    color: colors.white,
  },
  text: {
    color: colors.primary,
  },
  resendLink: {
    marginTop: 10,
    padding: 10,
  },
  resendText: {
    color: colors.red,
  },
  signup_text: {
    color: colors.primary,
  },
  otpFeild: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  input: {
    width: '20%',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: colors.primary,
    color: colors.white,
  },
  dateGender: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    flex: 1,
  },
  gender: {
    flex: 1,
  },
});