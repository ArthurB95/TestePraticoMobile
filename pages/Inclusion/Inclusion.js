import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export default function Inclusion() {
  const [result, setResult] = useState('');

  function soma() {
    var x = 4;
    var y = 9;
    var soma = x + y;
    setResult(`Result: ${soma}`);
  }

  function subtracao() {
    var x = 4;
    var y = 9;
    var soma = x - y;
    setResult(`Result: ${soma}`);
  }

  function multiplicacao() {
    var x = 4;
    var y = 9;
    var soma = x * y;
    setResult(`Result: ${soma}`);
  }

  function divisao() {
    var x = 4;
    var y = 9;
    var soma = x / y;
    setResult(`Result: ${soma}`);
  }

  return (
    <View>
      <TouchableOpacity onPress={soma}>
        <Text>Soma</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={subtracao}>
        <Text>Subtracao</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={multiplicacao}>
        <Text>Multiplicacao</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={divisao}>
        <Text>Divisao</Text>
      </TouchableOpacity>
      <Text>{result}</Text>
    </View>
  );
}
