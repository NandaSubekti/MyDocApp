import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {DummyHospitals1, ILAkun, ILJual, ILMitra} from '../../../asset';
import {Gap} from '../../atoms';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils/colors';

export default function UserProfileList({
  name,
  menu1,
  menu2,
  menu3,
  menu4,
  navigation,
  onPressMenu1,
  onPressMenu2,
  onPressMenu3,
  onPressMenu4,
}) {
  const Ilustration = () => {
    if (name === 'Akun Dan Privasi') {
      return <Image source={ILAkun} style={styles.ilustration} />;
    }
    if (name === 'Atur Mitra') {
      return <Image source={ILMitra} style={styles.ilustration} />;
    }
    if (name === 'Jual Rumah Sakit') {
      return <Image source={ILJual} style={styles.ilustration} />;
    }
    return <Image source={ILAkun} style={styles.ilustration} />;
  };
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.setting}>
            <TouchableOpacity onPress={onPressMenu1}>
              <Text style={styles.menu1}>{menu1}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressMenu2}>
              <Text style={styles.menu2}>{menu2}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressMenu3}>
              <Text style={styles.menu3}>{menu3}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressMenu3}>
              <Text style={styles.menu4}>{menu4}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Ilustration />
        </View>
      </View>
      <Gap height={20} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  wrapper: {
    marginLeft: 17,
    justifyContent: 'center',
    paddingBottom: 15,
    paddingTop: 12,
  },
  setting: {paddingLeft: 10, paddingTop: 10},
  ilustration: {height: 165, width: 131, borderRadius: 20, marginLeft: 17},
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 17,
    color: colors.text.primary,
  },
  menu1: {
    fontFamily: fonts.primary.normal,
    fontSize: 13,
    color: colors.text.primary,
    paddingVertical: 4,
  },
  menu2: {
    fontFamily: fonts.primary.normal,
    fontSize: 13,
    color: colors.text.primary,
    paddingVertical: 4,
  },
  menu3: {
    fontFamily: fonts.primary.normal,
    fontSize: 13,
    color: colors.text.primary,
    paddingVertical: 4,
  },
  menu4: {
    fontFamily: fonts.primary.normal,
    fontSize: 13,
    color: colors.text.primary,
    paddingVertical: 4,
  },
});
