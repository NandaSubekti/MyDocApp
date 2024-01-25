import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  Button,
  DoctorCategoryList,
  DoctorComponent,
  Gap,
  Header,
} from '../../component';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {IconBack, JSONDoctor} from '../../asset';

export default function ListDoctorAnak({
  navigation,
  onPress,
  name,
  profession,
}) {
  const dokterAnakData = JSONDoctor.data.filter(
    doctor => doctor.profession === 'Dokter Anak',
  );

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
        {dokterAnakData.map(item => (
          <DoctorComponent
            key={item.id}
            doctorId={item.id}
            name={item.name}
            profession={item.profession}
            navigation={navigation}
          />
        ))}
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

// {
//   JSONDoctor.data.map(item => {
//     return (
//       <DoctorCategoryList
//         key={item.id}
//         name={item.name}
//         profession={item.profession}
//       />
//     );
//   });
// }

// The last ver that work
// {
//   dokterAnakData.map(item => (
//     <DoctorCategoryList
//       key={item.id}
//       name={item.name}
//       profession={item.profession}
//     />
//   ));
// }
