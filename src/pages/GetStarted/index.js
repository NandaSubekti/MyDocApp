import {Alert, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILGetstarted, ILlogo, ILlogopink} from '../../asset';
import {Button, Gap} from '../../component';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

export default function GetStarted({navigation}) {
  return (
    <ImageBackground source={ILGetstarted} style={styles.page}>
      <View>
        <ILlogopink />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Sign In"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 29,
    color: colors.white,
    marginTop: 100,
    fontFamily: fonts.primary[600],
  },
  logo: {marginTop: 12},
});
