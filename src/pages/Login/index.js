import {signInWithEmailAndPassword} from 'firebase/auth';
import {child, get, ref, onValue} from 'firebase/database';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ILlogopink2} from '../../asset';
import {Button, Gap, Input, Link, Loading} from '../../component';
import {auth, db} from '../../config/Fire';
import {showError, storeData, useForm} from '../../utils';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {useDispatch} from 'react-redux';

export default function Login({navigation}) {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  //fungsi loading pakai redux
  const dispatch = useDispatch();

  const login = () => {
    dispatch({type: 'SET_LOADING', value: true});
    console.log('form: ', form);
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then(userCredential => {
        // console.log('login success: ', userCredential);
        const user = userCredential.user;
        dispatch({type: 'SET_LOADING', value: false});

        // ===== fungsi untuk cek aktivitas login terbaru====
        const userId = user.uid;
        return onValue(
          ref(db, '/users/' + userId),
          snapshot => {
            const username =
              (snapshot.val() && snapshot.val().username) || 'Anonymous';
            // console.log('user data: ', snapshot.val());
            const userData = snapshot.val();
            storeData('user', userData);
            navigation.replace('MainApp');
          },
          {
            onlyOnce: true,
          },
        );
        //===================================================================//
        //==== fungsi login, bukan observe dan once ====//
        // const userId = user.uid;
        // const dbRef = ref(db);
        // get(child(dbRef, `users/${userId}`))
        //   .then(snapshot => {
        //     if (snapshot.exists()) {
        //       console.log('data user login: ', snapshot.val());
        //       // simpan juga di lokal storage
        //       const userData = snapshot.val();
        //       storeData('user', userData);
        //       navigation.replace('MainApp');
        //     } else {
        //       console.log('No data available');
        //     }
        //   })
        //   .catch(error => {
        //     console.error(error);
        //   });
        //=================================================================//
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        dispatch({type: 'SET_LOADING', value: false});
        showError(error.message);
      });
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
      <ILlogopink2 style={styles.logo} />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input
        label="Email Addmess"
        value={form.email}
        onChangeText={value => setForm('email', value)}
      />
      <Gap height={30} />
      <Input
        label="Password"
        value={form.password}
        onChangeText={value => setForm('password', value)}
        secureTextEntry={true}
      />
      <Gap height={10} />
      <Link title={'Forgot My Password'} size={12} />
      <Gap height={50} />
      <Button title={'Sing In'} onPress={login} />
      <Gap height={30} />
      <Link
        title={'Create Ner Account'}
        size={16}
        align="center"
        onPress={() => navigation.navigate('Register')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 25,
    color: colors.text.primary,
    marginTop: 100,
    fontFamily: fonts.primary[600],
    marginTop: 61,
    marginBottom: 75,
  },
  logo: {
    alignSelf: 'center',
  },
});
