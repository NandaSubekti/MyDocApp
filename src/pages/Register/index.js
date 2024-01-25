import {createUserWithEmailAndPassword} from 'firebase/auth';
import {ref, set} from 'firebase/database';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, Loading} from '../../component';
import {auth, db} from '../../config/Fire';
import {showError, storeData} from '../../utils';
import {colors} from '../../utils/colors';
import {useForm} from '../../utils/useForm';

export default function Register({navigation}) {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  //function untuk loading.
  const [loading, setLoading] = useState(false);

  // Initialize Firebase Authentication and get a reference to the service
  // const auth = getAuth(Fire);
  // const database = getDatabase(Fire);

  const onContinue = () => {
    setLoading(true);
    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then(userCredential => {
        // Signed up
        const user = userCredential.user;
        setLoading(false);
        setForm('reset');
        //ini url direktori penyimpanan di firebase
        const data = {
          email: form.email,
          username: form.fullName,
          profession: form.profession,
          uid: user.uid,
        };
        // simpan data ke firebase
        // const userRef = ref(db, 'users/' + user.uid + '/data');
        const userRef = ref(db, 'users/' + user.uid);
        set(userRef, data);
        // const useRef = ref(db, 'users/' + user.uid + '/');
        // set(useRef, {data});
        // console.log('data added');

        // simpan data di lokal storage
        storeData('user', data);
        navigation.navigate('UploadPhoto', data);
      })

      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false);
        showError(error.message);
      });
  };

  return (
    <>
      <View style={styles.page}>
        <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label={'Full Name'}
              value={form.fullName}
              onChangeText={value => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label={'Pekerjaan'}
              value={form.profession}
              onChangeText={value => setForm('profession', value)}
            />
            <Gap height={24} />
            <Input
              label={'Email'}
              value={form.email}
              onChangeText={value => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              label={'Password'}
              value={form.password}
              onChangeText={value => setForm('password', value)}
              secureTextEntry={true}
            />
            <Gap height={80} />
            <Button title={'Continue'} onPress={onContinue} />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {padding: 40, paddingTop: 0},
});
