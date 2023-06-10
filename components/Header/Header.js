import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

export default function Header() {

  function cliqueiAqui() {
    console.log('FUI CLICADO')
  }

  return (
    <View>
      <Image
        source={{
          uri: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F9c%2F3d%2F6d%2F9c3d6d0a0b6d4d4005141d0220952b62--puc-logo-inspiration.jpg&tbnid=epQFhVll2Ln_zM&vet=12ahUKEwiT4L6lnrn_AhVGNN4AHUaMDowQMygBegUIARDMAQ..i&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F428334614530379235%2F&docid=b5jho-KK8BCdoM&w=736&h=600&q=puc%20minas%20logo&ved=2ahUKEwiT4L6lnrn_AhVGNN4AHUaMDowQMygBegUIARDMAQ",
        }}
      />
      <Text>Header</Text>
      <TouchableOpacity onPress={cliqueiAqui}><Text>Botão</Text></TouchableOpacity>
    </View>
  );
}
