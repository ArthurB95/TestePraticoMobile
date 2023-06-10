import React from 'react';
import {TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Navegacao() {

  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate("Sections");
  }

  return (
    <View>
      <TouchableOpacity onPress={handleNavigation}><Text>Navegacao</Text></TouchableOpacity>
    </View>
  )
}