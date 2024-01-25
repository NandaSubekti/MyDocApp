import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ListDoctorChat} from '../../component';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {JSONChatList} from '../../asset';

export default function Chat({navigation}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <View style={styles.wrappertitle}>
          <Text style={styles.halo}>Halo Nanda,</Text>
          <Text style={styles.title}>Messages</Text>
        </View>
        {JSONChatList.data.map(item => {
          return (
            <ListDoctorChat
              key={item.id}
              name={item.name}
              profession={item.profession}
              pesan={item.pesan}
              onPress={() => navigation.navigate('Chatting')}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.backgroundPage, flex: 1},
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 23,
    marginLeft: 17,
    color: colors.text.primary,
  },
  halo: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    marginTop: 30,
    marginLeft: 17,
  },
  wrappertitle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    paddingBottom: 15,
  },
});
