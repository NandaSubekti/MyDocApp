import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, ChatInput, ChatItem} from '../../component';
import {colors} from '../../utils/colors';
import {DummyDoctor9} from '../../asset';
import {fonts} from '../../utils/fonts';
import IsMe from '../../component/molecules/ChatItem/IsMe';

export default function Chatting({navigation}) {
  return (
    <View style={styles.page}>
      <View style={styles.wrappertitle}>
        <Button
          type="icon-only"
          icon="back-dark"
          onPress={() => navigation.goBack()}
        />
        <View style={styles.profile}>
          <Image source={DummyDoctor9} style={styles.avatar} />
          <Text style={styles.name}>Chie Lian Lie</Text>
          <Text style={styles.profession}>Dokter Saraf</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.date}>Senin, 20 Nov 2023</Text>
        <ChatItem IsMe={IsMe} />
        <ChatItem />
        <ChatItem IsMe={IsMe} />
      </View>
      <ChatInput />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.backgroundPage2x, flex: 1},
  wrappertitle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    paddingBottom: 15,
    paddingTop: 30,
    paddingHorizontal: 17,
    flexDirection: 'row',
    backgroundColor: colors.backgroundPage,
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    paddingRight: 34,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginBottom: 2,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.tertiary,
    textAlign: 'center',
    paddingVertical: 15,
  },
  content: {flex: 1},
});
