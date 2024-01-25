import {signOut} from 'firebase/auth';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILNullPhoto, JSONUserProfile} from '../../asset';
import {UserProfileInfo, UserProfileList} from '../../component';
import {auth} from '../../config/Fire';
import {getData, showError} from '../../utils';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

export default function Account({navigation}) {
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    username: '',
    profession: '',
  });

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = res.photo ? {uri: res.photo} : ILNullPhoto;
      // data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);

  //fungsi sign out
  const SignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.replace('GetStarted');
      })
      .catch(error => {
        // showError(error.message);
      });
  };

  return (
    <View style={styles.page}>
      <View style={styles.wrappertitle}>
        <Text style={styles.title}>My Profile</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {profile.username.length > 0 && (
          <UserProfileInfo
            name={profile.username}
            profession={profile.profession}
            photo={profile.photo}
            onPress={SignOut}
          />
        )}

        <View style={styles.boxsetting}>
          {JSONUserProfile.data.map(item => {
            return (
              <UserProfileList
                key={item.name}
                name={item.name}
                menu1={item.menu1}
                menu2={item.menu2}
                menu3={item.menu3}
                menu4={item.menu4}
                onPressMenu1={() => navigation.navigate('EditProfile')}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.backgroundPage},
  wrappertitle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    paddingBottom: 15,
    paddingTop: 30,
    paddingHorizontal: 17,
    alignItems: 'center',
    backgroundColor: colors.backgroundPage,
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 25,
    color: colors.text.primary,
  },
  boxsetting: {borderColor: 'green', paddingHorizontal: 17},
});
