const mainColors = {
  pink1: '#E784E7', // button
  pink2: '#FF9CFE', // beranda
  pink3: '#FFB0FE', // jenis dokter, agenda dokter, story dokter 80%
  pink4: '#FF8DFE', // bintang rating, chat notif 80%
  pink5: '#EBBCEA', // chat buble
  pink6: '#FCDFFB', // background
  black: '#000000',
  black1: 'rgba(0, 0, 0, 0.5)',
  grey: '#4C4C4C',
  grey2: '#7D8797',
  grey3: '#F7F7F7',
  grey4: '#E9E9E9',
  grey5: '#F3F3F3',
  black2: '#474747',
  white: 'white',
  red: '#F13556',
};

export const colors = {
  primary: mainColors.pink1,
  secondary: mainColors.pink3,
  tertiary: mainColors.pink4,
  beranda: mainColors.pink2,
  chatme: mainColors.grey3,
  chatyou: mainColors.pink5,
  background: mainColors.pink6,
  backgroundPage: mainColors.grey3,
  backgroundPage2: mainColors.grey4,
  white: mainColors.white,
  grey: mainColors.grey,
  grey3: mainColors.grey3,

  text: {
    primary: 'black',
    secondary: mainColors.black2,
    tertiary: mainColors.grey,
    active: mainColors.pink2,
    inactive: mainColors.grey,
  },
  button: {
    primary: {
      background: mainColors.pink1,
      text: mainColors.white,
    },
    secondary: {
      background: mainColors.white,
      text: mainColors.grey2,
    },
    disable: {
      background: mainColors.grey3,
      text: mainColors.grey2,
    },
  },
  border: mainColors.grey4,
  loadingBackground: mainColors.black1,
  error: mainColors.red,
};
