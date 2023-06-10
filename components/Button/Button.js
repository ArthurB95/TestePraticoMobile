import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default function Button({onPress}) {
  
  function handleButton() {
    console.log("FUI CLICADO");
    onPress()
  }

  return (
    <View>
      <TouchableOpacity onPress={handleButton}>
        <Text>Option</Text>
      </TouchableOpacity>
    </View>
  );
}
