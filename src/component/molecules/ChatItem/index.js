import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IsMe from './IsMe';
import IsYou from './IsYou';

export default function ChatItem({IsMe}) {
  if (IsMe) {
    return <IsMe />;
  }
  return <IsYou />;
}
