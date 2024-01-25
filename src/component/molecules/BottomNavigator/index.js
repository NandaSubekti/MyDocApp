import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../../utils/colors';
import {TabItem} from '../../atoms';

export default function BottomNavigator({state, descriptors, navigation}) {
  return (
    <View style={styles.continer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem
            key={index}
            title={label}
            active={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  continer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 31,
    paddingEnd: 38,
    paddingBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 37,
    alignItems: 'flex-end',
    backgroundColor: colors.white,
  },
});
