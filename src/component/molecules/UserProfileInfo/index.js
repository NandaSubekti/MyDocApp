import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {DummyUser} from '../../../asset';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';
import {Button, Gap} from '../../atoms';

export default function UserProfileInfo({
  name,
  profession,
  photo,
  navigation,
  onPress,
}) {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.continer}>
          <Image source={photo} style={styles.avatar} />
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.profession}>{profession}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Button type={'infobutton'} title={'Sing Out'} onPress={onPress} />
      <Gap height={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  continer: {
    flexDirection: 'row',
    paddingHorizontal: 17,
    backgroundColor: colors.backgroundPage,
    paddingTop: 20,
    paddingBottom: 15,
    alignItems: 'center',
  },
  avatar: {width: 70, height: 70, borderRadius: 70 / 2, marginRight: 12},
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    color: colors.text.primary,
  },
  profession: {
    fontFamily: fonts.primary[300],
    fontSize: 11,
    color: colors.text.secondary,
  },
});
