import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DummyNews1,
  DummyNews2,
  DummyNews3,
  DummyNews4,
  DummyNews5,
} from '../../../asset';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils/colors';

export default function NewsItem({title, date}) {
  const News = () => {
    if (
      title === 'Will your doctor be replaced by a robot? - RCI | English' &&
      date === 'Today'
    ) {
      return <Image source={DummyNews5} style={styles.image} />;
    }
    if (
      title === 'Learn how to make a proper orange juice at home' &&
      date === '12/18/2023'
    ) {
      return <Image source={DummyNews3} style={styles.image} />;
    }
    if (
      title === 'The latest trends in powering surgical hand tools' &&
      date === '12/10/2023'
    ) {
      return <Image source={DummyNews1} style={styles.image} />;
    }
    if (
      title ===
        'No evidence found that cannabis reduces long term opioid use' &&
      date === '11/29/2023'
    ) {
      return <Image source={DummyNews2} style={styles.image} />;
    }
    if (
      title === '5 things we now know about atrial fibrillation' &&
      date === '12/8/2023'
    ) {
      return <Image source={DummyNews4} style={styles.image} />;
    }
    return <Image source={DummyNews2} style={styles.image} />;
  };
  return (
    <View style={styles.continer}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <News />
    </View>
  );
}

const styles = StyleSheet.create({
  continer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingTop: 16,
    paddingHorizontal: 17,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: colors.text.primary,
    maxWidth: '90%',
  },
  date: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: colors.text.primary,
    marginTop: 10,
  },
  image: {width: 80, height: 60, borderRadius: 11},
  wrapper: {flex: 1},
});
