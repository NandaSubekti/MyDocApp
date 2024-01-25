import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Button, Gap, Header, ListDoctorChat} from '../../component';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {IconBack, JSONChatList} from '../../asset';

export default function ListDoctor({
  navigation,
  onPress,
  name,
  profession,
  pesan,
}) {
  const Profile = () => {
    if (name === 'Alexa Rachel') {
      return <Image source={DummyDoctor1} style={styles.avatar} />;
    }
    if (name === 'Sunny Frank') {
      return <Image source={DummyDoctor2} style={styles.avatar} />;
    }
    if (name === 'Poe Minn') {
      return <Image source={DummyDoctor3} style={styles.avatar} />;
    }
    if (name === 'Sidat sing') {
      return <Image source={DummyDoctor6} style={styles.avatar} />;
    }
    return null;
  };
  return (
    <View style={styles.page}>
      <View style={styles.wrappertitle}>
        <Button
          type="icon-only"
          icon="back-dark"
          onPress={() => navigation.goBack()}
        />
        <View>
          <Text style={styles.halo}>Halo Nanda,</Text>
          <Text style={styles.title}>Pilih Dokter Anak</Text>
        </View>
      </View>
      <ScrollView>
        <Profile />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {paddingBottom: 30},
  wrappertitle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    paddingBottom: 15,
    paddingTop: 30,
    paddingHorizontal: 17,
    flexDirection: 'row',
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 23,
    paddingLeft: 20,
  },
  halo: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    paddingLeft: 20,
    paddingTop: 10,
  },
  continer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
  },
  name: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.primary,
  },
  profession: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.text.secondary,
  },
});

// <Header onPress={() => navigation.goBack()} title="Pilih Dokter Anak" />;
