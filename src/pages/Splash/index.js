import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {ILlogo} from '../../asset';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../../config/Fire';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData} from '../../utils';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      // getData('user').then(res => {
      //   console.log('user yang tersimpan :', res);
      // });
      /*==== fungsi baca data login yang masih tersimpan ====*/
      onAuthStateChanged(auth, user => {
        if (user) {
          // user masih ter login gak perlu login lagi langsung ke dasbord aja
          // const uid = user.uid;
          navigation.replace('MainApp');
        } else {
          // User is signed out
          navigation.replace('GetStarted');
        }
      });
    }, 2000);
    // navigation.replace('GetStarted');
  }, []);

  return (
    <View style={styles.pages}>
      <ILlogo />
      <Text style={styles.title}>My Doc'App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pages: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
  },
});
