import {colors} from '../colors';

const {showMessage} = require('react-native-flash-message');

export const showError = message => {
  showMessage({
    message: 'Error',
    description: message,
    type: 'default',
    backgroundColor: colors.error, // background color
    color: colors.white, // text color
  });
};

export const showSuccess = message => {
  showMessage({
    message: 'Success',
    description: message,
    type: 'default',
    backgroundColor: colors.primary, // background color
    color: colors.white, // text color
  });
};
